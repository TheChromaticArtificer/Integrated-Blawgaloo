const $KitEquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot')

const KIT_PREFIX = 'ib_kit.'
const KIT_APPLIED = 'ib_kit_applied'
const KIT_RANGED = ['minecraft:skeleton', 'minecraft:stray', 'minecraft:pillager', 'minecraft:bogged']

const KITS = {
  hydra_soldier: {
    armor: ['scguns:scrap_helmet', 'scguns:scrap_chestplate', 'scguns:scrap_leggings', 'scguns:scrap_boots'],
    melee: 'minecraft:iron_axe',
    effects: [['minecraft:speed', 0]],
    drop: 0.05
  },
  vampire_thrall: {
    armor: [null, 'witchery:hunter_chestplate', null, null],
    melee: 'minecraft:iron_sword',
    effects: [['minecraft:strength', 0]],
    drop: 0.03
  },
  dread_soldier: {
    armor: ['minecraft:chainmail_helmet', 'minecraft:chainmail_chestplate', null, 'minecraft:chainmail_boots'],
    melee: 'iceandfire:dread_sword',
    effects: [['minecraft:resistance', 0]],
    drop: 0.04
  },
  ant_infested: {
    armor: ['antarchy:tigers_eye_helmet', null, null, null],
    effects: [['minecraft:speed', 0]],
    drop: 0.03
  },
  jungle_poisoner: {
    armor: ['antarchy:tigers_eye_helmet', null, null, 'antarchy:tigers_eye_boots'],
    effects: [],
    drop: 0.04
  },
  wither_knight: {
    armor: ['minecraft:netherite_helmet', 'minecraft:netherite_chestplate', null, null],
    melee: 'minecraft:netherite_sword',
    effects: [['minecraft:fire_resistance', 0], ['minecraft:resistance', 0]],
    drop: 0.02
  },
  mutant_herald: {
    armor: ['mutantmonsters:mutant_skeleton_skull', null, null, null],
    effects: [['minecraft:strength', 0]],
    drop: 0.02
  },
  herobrine_cultist: {
    armor: ['minecraft:golden_helmet', 'witchery:witches_robes', null, null],
    melee: 'minecraft:golden_sword',
    effects: [['minecraft:speed', 0], ['minecraft:night_vision', 0]],
    drop: 0.03
  },
  miniboss: {
    armor: [],
    effects: [['minecraft:resistance', 0], ['minecraft:fire_resistance', 0]],
    health: 4,
    damage: 1.5,
    armorBonus: 10,
    knockback: 0.6
  }
}

const KIT_SLOTS = [$KitEquipmentSlot.HEAD, $KitEquipmentSlot.CHEST, $KitEquipmentSlot.LEGS, $KitEquipmentSlot.FEET]

function kitOf(entity) {
  for (const tag of entity.tags) {
    if (tag.startsWith(KIT_PREFIX)) return String(tag).substring(KIT_PREFIX.length)
  }
  return null
}

function scaleAttribute(entity, id, factor) {
  const attribute = entity.getAttribute(id)
  if (attribute) attribute.baseValue *= factor
}

function addAttribute(entity, id, amount) {
  const attribute = entity.getAttribute(id)
  if (attribute) attribute.baseValue += amount
}

EntityEvents.spawned(event => {
  const entity = event.entity
  if (!entity.isLiving() || entity.isPlayer()) return
  const name = kitOf(entity)
  if (!name || !KITS[name]) return
  const data = entity.getPersistentData()
  if (data.getBoolean(KIT_APPLIED)) return
  data.putBoolean(KIT_APPLIED, true)
  const kit = KITS[name]

  kit.armor.forEach((item, index) => {
    if (!item) return
    entity.setItemSlot(KIT_SLOTS[index], Item.of(item))
    if (entity.setDropChance) entity.setDropChance(KIT_SLOTS[index], kit.drop || 0)
  })
  if (kit.melee && !KIT_RANGED.includes(String(entity.type))) {
    entity.setItemSlot($KitEquipmentSlot.MAINHAND, Item.of(kit.melee))
    if (entity.setDropChance) entity.setDropChance($KitEquipmentSlot.MAINHAND, kit.drop || 0)
  }
  kit.effects.forEach(effect => entity.potionEffects.add(effect[0], 999999, effect[1], true, false))

  if (kit.health) scaleAttribute(entity, 'minecraft:generic.max_health', kit.health)
  if (kit.damage) scaleAttribute(entity, 'minecraft:generic.attack_damage', kit.damage)
  if (kit.armorBonus) addAttribute(entity, 'minecraft:generic.armor', kit.armorBonus)
  if (kit.knockback) addAttribute(entity, 'minecraft:generic.knockback_resistance', kit.knockback)
  if (name == 'miniboss') entity.setCustomNameVisible(true)
  entity.setHealth(entity.maxHealth)
})

EntityEvents.afterHurt(event => {
  const attacker = event.source.actual
  const target = event.entity
  if (!attacker || !attacker.isLiving() || attacker.isPlayer()) return
  const name = kitOf(attacker)
  if (!name) return
  if (name == 'vampire_thrall') {
    attacker.heal(event.damage * 0.3)
  } else if (name == 'dread_soldier') {
    target.potionEffects.add('minecraft:slowness', 60, 1)
    target.potionEffects.add('minecraft:mining_fatigue', 60, 0)
  } else if (name == 'jungle_poisoner') {
    target.potionEffects.add('minecraft:poison', 100, 0)
  } else if (name == 'wither_knight') {
    target.potionEffects.add('minecraft:wither', 80, 1)
  } else if (name == 'herobrine_cultist') {
    target.potionEffects.add('minecraft:blindness', 40, 0)
  }
})

EntityEvents.beforeHurt(event => {
  const entity = event.entity
  if (!entity.isLiving() || entity.isPlayer()) return
  if (kitOf(entity) != 'jungle_poisoner') return
  if (entity.health - event.damage < entity.maxHealth * 0.3 && !entity.potionEffects.isActive('minecraft:invisibility')) {
    entity.potionEffects.add('minecraft:invisibility', 100, 0)
    entity.potionEffects.add('minecraft:speed', 100, 1)
  }
})

function kitSpawnNear(dead, type, count) {
  for (let i = 0; i < count; i++) {
    const mob = dead.level.createEntity(type)
    mob.setPosition(dead.x + (Math.random() - 0.5) * 2, dead.y, dead.z + (Math.random() - 0.5) * 2)
    mob.spawn()
  }
}

EntityEvents.death(event => {
  const dead = event.entity
  if (!dead.isLiving() || dead.isPlayer()) return
  const name = kitOf(dead)
  if (!name) return
  if (name == 'ant_infested') {
    kitSpawnNear(dead, 'antarchy:red_ant', 2 + Math.floor(Math.random() * 2))
  } else if (name == 'mutant_herald' && Math.random() < 0.04) {
    kitSpawnNear(dead, 'mutantmonsters:mutant_zombie', 1)
  } else if (name == 'herobrine_cultist' && Math.random() < 0.1) {
    const killer = event.source.actual
    if (killer && killer.isPlayer()) dead.server.runCommandSilent('boogaloo_core watching summon stalking ' + killer.username)
  }
})
