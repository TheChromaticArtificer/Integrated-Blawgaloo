const removedSecurityCraft = [
  'securitycraft:sentry',
  'securitycraft:remote_access_sentry',
  'securitycraft:lens',
  'securitycraft:universal_block_remover',
  'securitycraft:universal_block_reinforcer_lvl1',
  'securitycraft:universal_block_reinforcer_lvl3',
  'securitycraft:block_pocket_manager',
  'securitycraft:block_pocket_wall',
  'securitycraft:crystal_quartz_item',
  'securitycraft:crystal_quartz',
  'securitycraft:chiseled_crystal_quartz',
  'securitycraft:crystal_quartz_bricks',
  'securitycraft:crystal_quartz_pillar',
  'securitycraft:crystal_quartz_slab',
  'securitycraft:crystal_quartz_stairs',
  'securitycraft:smooth_crystal_quartz',
  'securitycraft:smooth_crystal_quartz_slab',
  'securitycraft:smooth_crystal_quartz_stairs',
  'securitycraft:reinforced_crystal_quartz_block',
  'securitycraft:reinforced_chiseled_crystal_quartz_block',
  'securitycraft:reinforced_crystal_quartz_bricks',
  'securitycraft:reinforced_crystal_quartz_pillar',
  'securitycraft:reinforced_crystal_quartz_slab',
  'securitycraft:reinforced_crystal_quartz_stairs',
  'securitycraft:reinforced_smooth_crystal_quartz',
  'securitycraft:reinforced_smooth_crystal_quartz_slab',
  'securitycraft:reinforced_smooth_crystal_quartz_stairs',
  'securitycraft:oak_security_sea_boat',
  'securitycraft:spruce_security_sea_boat',
  'securitycraft:birch_security_sea_boat',
  'securitycraft:jungle_security_sea_boat',
  'securitycraft:acacia_security_sea_boat',
  'securitycraft:dark_oak_security_sea_boat',
  'securitycraft:mangrove_security_sea_boat',
  'securitycraft:cherry_security_sea_boat',
  'securitycraft:bamboo_security_sea_raft',
  'securitycraft:ancient_debris_mine',
  'securitycraft:blast_furnace_mine',
  'securitycraft:coal_mine',
  'securitycraft:cobbled_deepslate_mine',
  'securitycraft:cobblestone_mine',
  'securitycraft:copper_mine',
  'securitycraft:deepslate_coal_mine',
  'securitycraft:deepslate_copper_mine',
  'securitycraft:deepslate_diamond_mine',
  'securitycraft:deepslate_emerald_mine',
  'securitycraft:deepslate_gold_mine',
  'securitycraft:deepslate_iron_mine',
  'securitycraft:deepslate_lapis_mine',
  'securitycraft:deepslate_redstone_mine',
  'securitycraft:emerald_mine',
  'securitycraft:end_stone_mine',
  'securitycraft:furnace_mine',
  'securitycraft:gilded_blackstone_mine',
  'securitycraft:gold_mine',
  'securitycraft:gravel_mine',
  'securitycraft:iron_mine',
  'securitycraft:lapis_mine',
  'securitycraft:nether_gold_mine',
  'securitycraft:netherrack_mine',
  'securitycraft:quartz_mine',
  'securitycraft:redstone_mine',
  'securitycraft:sand_mine',
  'securitycraft:smoker_mine',
  'securitycraft:suspicious_gravel_mine',
  'securitycraft:suspicious_sand_mine',
  'securitycraft:track_mine'
]

ServerEvents.recipes(event => {
  removedSecurityCraft.forEach(item => event.remove({ output: item }))
  event.remove({ id: 'securitycraft:copy_sentry_remote_access_tool' })

  const PLATING = '#oritech:plating'
  const GLASS = 'oritech:industrial_glass_block'
  const CIRCUIT = 'oritech:processing_unit'
  const ADV_CIRCUIT = 'oritech:advanced_computing_engine'
  const LENS = 'oritech:enderic_lens'
  const MOTOR = 'oritech:motor'
  const BATTERY = 'oritech:basic_battery'
  const COIL = 'oritech:magnetic_coil'
  const WAFER = 'oritech:silicon_wafer'
  const STONE = '#minecraft:stone_crafting_materials'
  const REDSTONE = '#c:dusts/redstone'
  const IRON = '#c:ingots/iron'

  const reshaped = (id, pattern, key) => {
    event.remove({ id: id })
    event.shaped(id, pattern, key)
  }
  const reshapeless = (id, ingredients) => {
    event.remove({ id: id })
    event.shapeless(id, ingredients)
  }

  const keycardMetals = {
    keycard_lv1: '#c:ingots/copper',
    keycard_lv2: 'oritech:nickel_ingot',
    keycard_lv3: 'minecraft:iron_ingot',
    keycard_lv4: 'antarchy:titanium_ingot',
    keycard_lv5: 'marvel:vibranium_ingot'
  }
  Object.keys(keycardMetals).forEach((card, tier) => {
    reshapeless(`securitycraft:${card}`, [tier < 3 ? 'oritech:silicon' : WAFER, keycardMetals[card], keycardMetals[card]])
  })

  reshaped('securitycraft:keypad_item', ['BBB', 'BCB', 'BBB'], { B: 'minecraft:stone_button', C: CIRCUIT })
  reshaped('securitycraft:keycard_reader', ['PPP', 'WCH', 'PPP'], { P: PLATING, W: 'oritech:silicon', C: CIRCUIT, H: 'minecraft:hopper' })
  reshaped('securitycraft:keycard_lock', ['PP', 'WC', 'PP'], { P: PLATING, W: 'oritech:silicon', C: CIRCUIT })
  reshaped('securitycraft:keycard_holder', ['IHI', 'LIL'], { I: IRON, H: 'minecraft:hopper', L: '#c:leathers' })
  reshaped('securitycraft:retinal_scanner', ['PPP', 'PEP', 'PCP'], { P: PLATING, E: 'minecraft:ender_eye', C: CIRCUIT })
  reshapeless('securitycraft:scanner_trapdoor', ['minecraft:iron_trapdoor', 'securitycraft:retinal_scanner'])
  reshaped('securitycraft:codebreaker', ['DTD', 'GAG', 'RER'], { D: '#c:gems/diamond', T: 'minecraft:redstone_torch', G: '#c:ingots/gold', A: ADV_CIRCUIT, R: REDSTONE, E: '#c:gems/emerald' })

  reshaped('securitycraft:security_camera', ['PPP', 'ECP', 'PPS'], { P: PLATING, E: 'minecraft:ender_eye', C: CIRCUIT, S: '#c:rods/wooden' })
  reshaped('securitycraft:camera_monitor', ['PPP', 'GCG', 'PPP'], { P: PLATING, G: GLASS, C: CIRCUIT })
  reshaped('securitycraft:portable_radar', ['III', 'ICI', 'IBI'], { I: IRON, C: CIRCUIT, B: BATTERY })
  reshaped('securitycraft:username_logger', ['SRS', 'SCS', 'SSS'], { S: STONE, R: 'securitycraft:portable_radar', C: COIL })
  reshaped('securitycraft:inventory_scanner', ['SSS', 'SLS', 'SCS'], { S: STONE, L: 'securitycraft:laser_block', C: '#c:chests/ender' })
  reshaped('securitycraft:alarm', ['GGG', 'GNG', 'GCG'], { G: GLASS, N: 'minecraft:note_block', C: CIRCUIT })
  reshaped('securitycraft:panic_button', [' I ', 'IBI', ' C '], { I: IRON, B: 'minecraft:stone_button', C: CIRCUIT })
  reshaped('securitycraft:secure_redstone_interface', ['TRB', 'SCS'], { T: 'minecraft:redstone_torch', R: 'securitycraft:portable_radar', B: 'minecraft:bowl', S: 'minecraft:smooth_stone', C: CIRCUIT })

  reshaped('securitycraft:laser_block', ['SGS', 'GRG', 'SGS'], { S: STONE, G: GLASS, R: '#c:storage_blocks/redstone' })

  reshaped('securitycraft:cage_trap', ['BBB', 'GMG', 'PPP'], { B: 'minecraft:iron_bars', G: '#c:ingots/gold', M: MOTOR, P: PLATING })
  event.remove({ id: 'securitycraft:floor_trap' })
  event.shaped('2x securitycraft:floor_trap', ['ILI', ' C ', 'IPI'], { I: IRON, L: 'minecraft:stone_pressure_plate', C: CIRCUIT, P: 'minecraft:piston' })
  reshaped('securitycraft:ims', ['BRB', ' P ', 'B B'], { B: 'securitycraft:bouncing_betty', R: 'securitycraft:portable_radar', P: PLATING })
  reshaped('securitycraft:trophy_system', [' T ', ' C ', 'P P'], { T: 'scguns:turret_platform', C: CIRCUIT, P: PLATING })
  reshaped('securitycraft:taser', ['BSI', 'L  '], { B: 'minecraft:bow', S: 'oritech:magnetic_coil', I: IRON, L: BATTERY })
  reshaped('securitycraft:protecto', ['ODO', 'OCO', 'OOO'], { O: 'minecraft:obsidian', D: 'minecraft:daylight_detector', C: COIL })
  reshaped('securitycraft:electrified_iron_fence', [' I ', 'IFI', ' C '], { I: IRON, F: '#c:fences/wooden', C: COIL })

  reshaped('securitycraft:projector', ['III', 'PLG', 'II '], { I: IRON, P: PLATING, L: 'minecraft:redstone_lamp', G: GLASS })
  reshaped('securitycraft:rift_stabilizer', ['GEG', 'CAC', 'PPP'], { G: '#c:ingots/gold', E: LENS, C: 'minecraft:chorus_fruit', A: ADV_CIRCUIT, P: PLATING })
  reshaped('securitycraft:display_case', ['III', 'IFG', 'III'], { I: IRON, F: 'minecraft:item_frame', G: GLASS })
  reshaped('securitycraft:glow_display_case', ['III', 'IFG', 'III'], { I: IRON, F: 'minecraft:glow_item_frame', G: GLASS })
  reshaped('securitycraft:secure_trading_station', ['GGG', 'GHG', 'PCP'], { G: GLASS, H: 'minecraft:hopper', P: PLATING, C: CIRCUIT })

  const modules = {
    whitelist_module: 'minecraft:paper',
    blacklist_module: 'minecraft:ink_sac',
    harming_module: '#minecraft:arrows',
    smart_module: '#c:ender_pearls',
    storage_module: 'securitycraft:keypad_chest',
    disguise_module: 'minecraft:painting',
    speed_module: 'minecraft:sugar',
    redstone_module: REDSTONE
  }
  Object.keys(modules).forEach(module => {
    reshaped(`securitycraft:${module}`, ['PPP', 'PCP', 'PXP'], { P: PLATING, C: CIRCUIT, X: modules[module] })
  })

  reshaped('securitycraft:universal_block_reinforcer_lvl2', [' PG', 'RCP', 'SR '], { P: PLATING, G: GLASS, R: REDSTONE, C: CIRCUIT, S: '#c:rods/wooden' })
})

ServerEvents.tags('item', event => {
  event.removeAllTagsFrom(removedSecurityCraft)
})
