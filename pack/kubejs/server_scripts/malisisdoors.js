const removedMalisisDoors = [
  'malisisdoorsreborn:oak_door',
  'malisisdoorsreborn:oak_trapdoor',
  'malisisdoorsreborn:oak_fence_gate',
  'malisisdoorsreborn:spruce_door',
  'malisisdoorsreborn:spruce_trapdoor',
  'malisisdoorsreborn:spruce_fence_gate',
  'malisisdoorsreborn:birch_door',
  'malisisdoorsreborn:birch_trapdoor',
  'malisisdoorsreborn:birch_fence_gate',
  'malisisdoorsreborn:jungle_door',
  'malisisdoorsreborn:jungle_trapdoor',
  'malisisdoorsreborn:jungle_fence_gate',
  'malisisdoorsreborn:acacia_door',
  'malisisdoorsreborn:acacia_trapdoor',
  'malisisdoorsreborn:acacia_fence_gate',
  'malisisdoorsreborn:dark_oak_door',
  'malisisdoorsreborn:dark_oak_trapdoor',
  'malisisdoorsreborn:dark_oak_fence_gate',
  'malisisdoorsreborn:mangrove_door',
  'malisisdoorsreborn:mangrove_trapdoor',
  'malisisdoorsreborn:mangrove_fence_gate',
  'malisisdoorsreborn:cherry_door',
  'malisisdoorsreborn:cherry_trapdoor',
  'malisisdoorsreborn:cherry_fence_gate',
  'malisisdoorsreborn:bamboo_door',
  'malisisdoorsreborn:bamboo_trapdoor',
  'malisisdoorsreborn:bamboo_fence_gate',
  'malisisdoorsreborn:crimson_door',
  'malisisdoorsreborn:crimson_trapdoor',
  'malisisdoorsreborn:crimson_fence_gate',
  'malisisdoorsreborn:warped_door',
  'malisisdoorsreborn:warped_trapdoor',
  'malisisdoorsreborn:warped_fence_gate',
  'malisisdoorsreborn:iron_door',
  'malisisdoorsreborn:iron_trapdoor',
  'malisisdoorsreborn:copper_door',
  'malisisdoorsreborn:copper_trapdoor',
  'malisisdoorsreborn:exposed_copper_door',
  'malisisdoorsreborn:exposed_copper_trapdoor',
  'malisisdoorsreborn:weathered_copper_door',
  'malisisdoorsreborn:weathered_copper_trapdoor',
  'malisisdoorsreborn:oxidized_copper_door',
  'malisisdoorsreborn:oxidized_copper_trapdoor',
  'malisisdoorsreborn:waxed_copper_door',
  'malisisdoorsreborn:waxed_copper_trapdoor',
  'malisisdoorsreborn:waxed_exposed_copper_door',
  'malisisdoorsreborn:waxed_exposed_copper_trapdoor',
  'malisisdoorsreborn:waxed_weathered_copper_door',
  'malisisdoorsreborn:waxed_weathered_copper_trapdoor',
  'malisisdoorsreborn:waxed_oxidized_copper_door',
  'malisisdoorsreborn:waxed_oxidized_copper_trapdoor',
  'malisisdoorsreborn:carriage_door',
  'malisisdoorsreborn:medieval_door',
  'malisisdoorsreborn:large_rusty_double_door',
  'malisisdoorsreborn:access_card_01',
  'malisisdoorsreborn:access_card_02',
  'malisisdoorsreborn:access_card_03',
  'malisisdoorsreborn:access_card_04',
  'malisisdoorsreborn:access_card_05',
  'malisisdoorsreborn:access_card_admin',
  'malisisdoorsreborn:access_card_reader',
  'malisisdoorsreborn:hbm_screwdriver'
]

ServerEvents.recipes(event => {
  removedMalisisDoors.forEach(item => event.remove({ output: item }))
  event.remove({ output: 'malisisdoorsreborn:large_pale_oak_double_door' })
  event.shaped('malisisdoorsreborn:large_pale_oak_double_door', [
    'DD',
    'DD'
  ], { D: 'minecraft:pale_oak_door' })

  const PLATING = '#oritech:plating'
  const MOTOR = 'oritech:motor'
  const COIL = 'oritech:magnetic_coil'

  const reshaped = (name, pattern, key, count) => {
    event.remove({ output: `malisisdoorsreborn:${name}` })
    event.shaped(`${count || 1}x malisisdoorsreborn:${name}`, pattern, key).id(`kubejs:malisisdoors/${name}`)
  }

  reshaped('door_factory', ['PDP', 'MWM', 'PSP'], {
    P: 'oritech:machine_plating_block',
    D: 'minecraft:iron_door',
    M: MOTOR,
    W: 'refurbished_furniture:workbench',
    S: 'minecraft:sticky_piston'
  })

  reshaped('hbm_fire_door', ['IMI', 'BPB', 'IMI'], { I: PLATING, M: MOTOR, B: 'minecraft:iron_bars', P: 'minecraft:piston' })
  reshaped('hbm_qe_containment_door', ['IPI', 'CMC', 'IOI'], { I: PLATING, P: 'minecraft:piston', C: COIL, M: MOTOR, O: 'minecraft:obsidian' })
  reshaped('hbm_qe_sliding_door', ['IGI', 'PCP', 'IBI'], { I: '#c:ingots/iron', G: 'minecraft:glass', P: 'minecraft:piston', C: COIL, B: PLATING })
  reshaped('hbm_round_airlock_door', ['MIM', 'PCP', 'MIM'], { M: MOTOR, I: PLATING, P: 'minecraft:piston', C: COIL })
  reshaped('hbm_secure_access_door', ['OPO', 'CMC', 'IPI'], { O: 'minecraft:obsidian', P: 'minecraft:piston', C: COIL, M: MOTOR, I: PLATING })
  reshaped('hbm_sliding_blast_door', ['IGI', 'POP', 'ICI'], { I: PLATING, G: 'minecraft:glass', P: 'minecraft:piston', O: 'minecraft:obsidian', C: COIL })
  reshaped('hbm_sliding_seal_door', ['IPI', 'BCB', 'III'], { I: '#c:ingots/iron', P: 'minecraft:piston', B: PLATING, C: COIL })
  reshaped('hbm_vault_door', ['SMS', 'PNP', 'SMS'], { S: PLATING, M: MOTOR, P: 'minecraft:piston', N: '#c:ingots/netherite' })
  reshaped('hbm_vehicle_door', ['IMI', 'CMC', 'IMI'], { I: PLATING, M: MOTOR, C: COIL })
  reshaped('hbm_water_door', ['IBI', 'KMK', 'IBI'], { I: PLATING, B: 'minecraft:iron_bars', K: 'minecraft:copper_block', M: MOTOR })

  reshaped('forcefield_panel', ['GRG', 'RER', 'GRG'], { G: 'minecraft:glass_pane', R: '#c:dusts/redstone', E: 'oritech:enderic_compound' }, 2)
  reshaped('forcefield_linker', [' IE', ' RI', 'I  '], { I: '#c:ingots/iron', R: '#c:dusts/redstone', E: 'oritech:enderic_compound' })
})

ServerEvents.tags('item', event => {
  const tagged = [
    'minecraft:doors',
    'minecraft:wooden_doors',
    'minecraft:trapdoors',
    'minecraft:wooden_trapdoors',
    'minecraft:fence_gates',
    'malisisdoorsreborn:acacia_doors',
    'malisisdoorsreborn:acacia_fence_gates',
    'malisisdoorsreborn:acacia_trapdoors',
    'malisisdoorsreborn:bamboo_doors',
    'malisisdoorsreborn:bamboo_fence_gates',
    'malisisdoorsreborn:bamboo_trapdoors',
    'malisisdoorsreborn:birch_doors',
    'malisisdoorsreborn:birch_fence_gates',
    'malisisdoorsreborn:birch_trapdoors',
    'malisisdoorsreborn:cherry_doors',
    'malisisdoorsreborn:cherry_fence_gates',
    'malisisdoorsreborn:cherry_trapdoors',
    'malisisdoorsreborn:crimson_doors',
    'malisisdoorsreborn:crimson_fence_gates',
    'malisisdoorsreborn:crimson_trapdoors',
    'malisisdoorsreborn:dark_oak_doors',
    'malisisdoorsreborn:dark_oak_fence_gates',
    'malisisdoorsreborn:dark_oak_trapdoors',
    'malisisdoorsreborn:iron_doors',
    'malisisdoorsreborn:jungle_doors',
    'malisisdoorsreborn:jungle_fence_gates',
    'malisisdoorsreborn:jungle_trapdoors',
    'malisisdoorsreborn:mangrove_doors',
    'malisisdoorsreborn:mangrove_fence_gates',
    'malisisdoorsreborn:mangrove_trapdoors',
    'malisisdoorsreborn:oak_doors',
    'malisisdoorsreborn:oak_fence_gates',
    'malisisdoorsreborn:oak_trapdoors',
    'malisisdoorsreborn:spruce_doors',
    'malisisdoorsreborn:spruce_fence_gates',
    'malisisdoorsreborn:spruce_trapdoors',
    'malisisdoorsreborn:warped_doors',
    'malisisdoorsreborn:warped_fence_gates',
    'malisisdoorsreborn:warped_trapdoors'
  ]
  tagged.forEach(tag => event.remove(tag, removedMalisisDoors))
})
