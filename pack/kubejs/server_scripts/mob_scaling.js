const $AntarchyDifficulty = Java.loadClass('com.craisinlord.boogaloo_core.neoforge.difficulty.AntarchyDifficulty')

const MOB_SCALING = {
    peaceful: { health: 1.5, damage: 1.25 },
    easy: { health: 1.5, damage: 1.25 },
    normal: { health: 2.5, damage: 2 },
    hard: { health: 3, damage: 2.5 },
    antarchy: { health: 5, damage: 3.5 }
}

const BASE_DAMAGE_OVERRIDES = {
    'createcybernetics:cyberzombie': 4
}

const SCALED_HEALTH_TAG = 'boogaloo_mob_scale_health'
const SCALED_DAMAGE_TAG = 'boogaloo_mob_scale_damage'
const LEGACY_SCALED_TAG = 'boogaloo_mob_scaled'

function currentMobScaling(level) {
    const difficulty = String(level.getDifficulty().getKey())
    if (difficulty == 'hard' && $AntarchyDifficulty.isActive()) return MOB_SCALING.antarchy
    return MOB_SCALING[difficulty] || MOB_SCALING.normal
}

EntityEvents.spawned(event => {
    const entity = event.entity

    if (!entity.isLiving() || entity.isPlayer()) return
    if (entity.type == 'boogaloo_core:herobrine' || entity.tags.contains('boogaloo_core_herobrine_summon')) return
    if (entity.type == 'bda:red_death') return
    if (entity.tags.contains('boogaloo_red_death_nightmare')) return

    const scaling = currentMobScaling(entity.level)
    const data = entity.getPersistentData()

    let oldHealth = 1
    let oldDamage = 1
    if (data.contains(SCALED_HEALTH_TAG)) {
        oldHealth = data.getDouble(SCALED_HEALTH_TAG)
        oldDamage = data.getDouble(SCALED_DAMAGE_TAG)
    } else if (data.getBoolean(LEGACY_SCALED_TAG)) {
        oldHealth = MOB_SCALING.normal.health
        oldDamage = MOB_SCALING.normal.damage
        data.remove(LEGACY_SCALED_TAG)
    }
    if (oldHealth == scaling.health && oldDamage == scaling.damage) return

    data.putDouble(SCALED_HEALTH_TAG, scaling.health)
    data.putDouble(SCALED_DAMAGE_TAG, scaling.damage)

    const health = entity.getAttribute('minecraft:generic.max_health')
    if (health && entity.getHealth() > 0) {
        const fraction = Math.min(1, entity.getHealth() / health.value)
        health.baseValue = health.baseValue / oldHealth * scaling.health
        entity.setHealth(Math.max(1, health.value * fraction))
    }

    const damage = entity.getAttribute('minecraft:generic.attack_damage')
    if (damage) {
        const baseDamage = oldDamage == 1 && BASE_DAMAGE_OVERRIDES[String(entity.type)]
        damage.baseValue = (baseDamage || damage.baseValue / oldDamage) * scaling.damage
    }
})
