ServerEvents.recipes(event => {
  event.remove({ output: 'mts:mtsofficialpack.headlight' })
  event.shaped('2x mts:mtsofficialpack.headlight', [
    ' CG',
    'SL ',
    ' C '
  ], {
    C: 'minecraft:copper_nugget',
    G: 'minecraft:glass_pane',
    S: 'minecraft:iron_ingot',
    L: 'minecraft:redstone_lamp'
  }).id('kubejs:mts/headlight')

  event.remove({ output: 'mts:mtsofficialpack.irsensor' })
  event.shaped('mts:mtsofficialpack.irsensor', [
    'GCG',
    'EPR',
    ' F '
  ], {
    G: 'minecraft:glass_pane',
    C: 'minecraft:copper_nugget',
    E: 'minecraft:ender_eye',
    P: 'oritech:processing_unit',
    R: 'minecraft:redstone',
    F: 'oritech:fluid_pipe'
  }).id('kubejs:mts/irsensor')

  const removeAndAdd = (output, id, callback) => {
    event.remove({ output: output })
    callback().id(id)
  }

  removeAndAdd('mts:mts.key', 'kubejs:mts/key', () => event.shaped('mts:mts.key', [
    ' N ',
    ' N ',
    ' C '
  ], { N: 'minecraft:iron_nugget', C: 'minecraft:clay_ball' }))
  event.shapeless('mts:mts.key', ['mts:mts.key']).id('kubejs:mts/key_reset')

  removeAndAdd('mts:mts.jumpercable', 'kubejs:mts/jumpercable', () => event.shaped('mts:mts.jumpercable', [
    'C C',
    'PRP',
    ' P '
  ], { C: 'minecraft:copper_nugget', P: 'oritech:fluid_pipe', R: 'minecraft:redstone' }))

  removeAndAdd('mts:mts.jumperpack', 'kubejs:mts/jumperpack', () => event.shaped('mts:mts.jumperpack', [
    'SSS',
    'BCS',
    'PRP'
  ], {
    S: 'minecraft:iron_ingot', B: 'mts:mts.jumpercable', C: 'minecraft:copper_block',
    P: 'oritech:processing_unit', R: 'minecraft:redstone'
  }))

  removeAndAdd('mts:mts.fuelhose', 'kubejs:mts/fuelhose', () => event.shaped('mts:mts.fuelhose', [
    ' P ',
    'LLL',
    ' P '
  ], { P: 'oritech:fluid_pipe', L: 'minecraft:leather' }))

  removeAndAdd('mts:mts.jerrycan', 'kubejs:mts/jerrycan', () => event.shaped('mts:mts.jerrycan', [
    'SSS',
    'SBS',
    'SSS'
  ], { S: 'minecraft:iron_ingot', B: 'minecraft:bucket' }))

  removeAndAdd('mts:mts.wrench', 'kubejs:mts/wrench', () => event.shaped('mts:mts.wrench', [
    ' SS',
    ' S ',
    'S  '
  ], { S: 'minecraft:iron_ingot' }))

  removeAndAdd('mts:mts.partscanner', 'kubejs:mts/partscanner', () => event.shaped('mts:mts.partscanner', [
    'CPC',
    'GRG',
    ' I '
  ], {
    C: 'minecraft:copper_nugget', P: 'oritech:processing_unit', G: 'minecraft:glass_pane',
    R: 'minecraft:redstone', I: 'minecraft:iron_ingot'
  }))

  removeAndAdd('mts:mts.charger', 'kubejs:mts/charger', () => event.shaped('mts:mts.charger', [
    'ICI',
    'PRP',
    'ICI'
  ], {
    I: 'minecraft:iron_ingot', C: 'minecraft:copper_block', P: 'oritech:fluid_pipe',
    R: 'oritech:processing_unit'
  }))

  removeAndAdd('mts:mts.fuelpump', 'kubejs:mts/fuelpump', () => event.shaped('mts:mts.fuelpump', [
    ' G ',
    'SBS',
    'P P'
  ], {
    G: 'minecraft:glass_pane', S: 'minecraft:iron_ingot', B: 'minecraft:bucket',
    P: 'oritech:fluid_pipe'
  }))

  event.remove({ output: 'scguns:tension_spring' })
  event.shaped('scguns:tension_spring', [
    'SX ',
    'XS ',
    ' SX'
  ], {
    S: 'minecraft:iron_nugget',
    X: 'minecraft:iron_ingot'
  }).id('kubejs:scguns/tension_spring')

  event.remove({ output: 'mts:mts.paintgun' })

  const slotNames = [
    'gun_internal_1', 'gun_internal_2',
    'gun_top_internal_1', 'gun_top_internal_2',
    'gun_barrel_1', 'gun_barrel_2',
    'gun_top_barrel_1', 'gun_top_barrel_2',
    'gun_grip', 'gun_magazine'
  ]

  const recipes = [
    ['aa_turret_37', 'mts:mtsofficialpack.aa_turret_37', [
      'scguns:rapid_firing_unit', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'minecraft:lever',
      'scguns:heavy_gun_barrel', 'scguns:heavy_gun_barrel', 'minecraft:piston', 'scguns:tension_spring',
      'oritech:fluid_pipe'
    ]],
    ['aa_turret_762', 'mts:mtsofficialpack.aa_turret_762', [
      'scguns:rapid_firing_unit', 'minecraft:iron_ingot', '#c:ingots/iron', 'minecraft:lever',
      'scguns:gun_barrel', 'scguns:gun_barrel', 'minecraft:piston', 'scguns:tension_spring',
      'mts:mtsofficialpack.gunm1919'
    ]],
    ['basicbomb_hardpoint', 'mts:mtsofficialpack.basicbomb_hardpoint', [
      '#c:ingots/iron', '#c:ingots/iron', 'minecraft:iron_nugget', 'scguns:tension_spring'
    ]],
    ['bomblet_bombrack', 'mts:mtsofficialpack.bomblet_bombrack', [
      '#c:ingots/iron', '#c:ingots/iron', 'minecraft:iron_ingot', 'minecraft:iron_ingot',
      'minecraft:iron_ingot', 'minecraft:iron_nugget', 'minecraft:iron_nugget',
      'minecraft:iron_nugget', 'scguns:tension_spring'
    ]],
    ['double_bombrack', 'mts:mtsofficialpack.double_bombrack', [
      '#c:ingots/iron', '#c:ingots/iron', 'minecraft:iron_ingot', 'minecraft:iron_nugget',
      'minecraft:iron_nugget', 'scguns:tension_spring', 'minecraft:tripwire_hook'
    ]],
    ['heavy_bombrack', 'mts:mtsofficialpack.heavy_bombrack', [
      '#c:ingots/iron', '#c:ingots/iron', 'minecraft:iron_ingot', 'minecraft:iron_ingot',
      'minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:stone_button',
      'scguns:tension_spring', 'minecraft:tripwire_hook'
    ]],
    ['camera_vulcanair', 'mts:mtsofficialpack.camera_vulcanair', [
      'minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_ingot', 'minecraft:iron_ingot',
      'minecraft:copper_nugget', 'minecraft:copper_nugget', 'oritech:processing_unit',
      'mts:mtsofficialpack.irsensor', 'minecraft:glass', 'minecraft:glass'
    ]],
    ['spotlight', 'mts:mtsofficialpack.spotlight', [
      '#c:ingots/iron', '#c:ingots/iron', 'minecraft:iron_nugget', 'minecraft:iron_nugget',
      'minecraft:lever', 'minecraft:iron_trapdoor', 'minecraft:glass', 'minecraft:glass',
      'minecraft:redstone', 'mts:mtsofficialpack.headlight'
    ]],
    ['spotlight_bell206', 'mts:mtsofficialpack.spotlight_bell206', [
      'minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_ingot',
      'minecraft:copper_nugget', 'minecraft:copper_nugget', 'mts:mtsofficialpack.headlight',
      'minecraft:glass'
    ]],
    ['watercannon', 'mts:mtsofficialpack.watercannon', [
      'mts:mtsofficialpack.barrel', 'oritech:fluid_pipe', 'oritech:fluid_pipe',
      'minecraft:iron_nugget', 'minecraft:iron_nugget', '#c:ingots/iron',
      'minecraft:lever', 'minecraft:redstone'
    ]],
    ['gunconfetti', 'mts:mtsofficialpack.gunconfetti', [
      'oritech:fluid_pipe', 'minecraft:paper', 'minecraft:paper', 'minecraft:shears',
      'minecraft:red_dye', 'minecraft:green_dye', 'minecraft:yellow_dye', 'minecraft:blue_dye'
    ]],
    ['gunfireextinguisher', 'mts:mtsofficialpack.gunfireextinguisher', [
      'minecraft:lever', 'minecraft:iron_nugget', 'oritech:fluid_pipe', 'oritech:fluid_pipe',
      'minecraft:sand', 'minecraft:sand', 'minecraft:water_bucket'
    ]],
    ['gunflaregun', 'mts:mtsofficialpack.gunflaregun', [
      'oritech:fluid_pipe', 'minecraft:iron_nugget', 'minecraft:iron_nugget',
      'alexscaves:polymer_plate', 'minecraft:red_dye'
    ]],
    ['gunft17turret', 'mts:mtsofficialpack.gunft17turret', [
      '#c:ingots/iron', 'minecraft:iron_ingot', 'minecraft:iron_ingot',
      'scguns:tension_spring', 'oritech:fluid_pipe', 'minecraft:glass_pane',
      'minecraft:glass_pane', 'minecraft:lever', 'minecraft:iron_trapdoor'
    ]],
    ['gunm1919', 'mts:mtsofficialpack.gunm1919', [
      'oritech:fluid_pipe', '#c:ingots/iron', '#c:ingots/iron', 'scguns:tension_spring',
      'minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:flint', 'minecraft:lever'
    ]],
    ['gunobserver', 'mts:mtsofficialpack.gunobserver', [
      'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:lever',
      'minecraft:tripwire_hook', 'mts:mtsofficialpack.gunm1919'
    ]],
    ['gunrocketlauncher', 'mts:mtsofficialpack.gunrocketlauncher', [
      'mts:mtsofficialpack.bulletrocket', 'oritech:fluid_pipe', 'oritech:fluid_pipe',
      'minecraft:lever', 'minecraft:iron_nugget', 'minecraft:iron_nugget'
    ]],
    ['gunrocketpod', 'mts:mtsofficialpack.gunrocketpod', [
      'oritech:fluid_pipe', 'oritech:fluid_pipe', 'minecraft:dispenser',
      'oritech:processing_unit', 'minecraft:iron_nugget', 'minecraft:iron_nugget',
      'minecraft:iron_ingot'
    ]],

    ['spraycan_black', 'mts:mtsofficialpack.spraycan_black', [
      'alexscaves:polymer_plate', 'oritech:fluid_pipe', 'minecraft:black_dye',
      'minecraft:black_dye', 'minecraft:black_dye'
    ]],
    ['spraycan_blue', 'mts:mtsofficialpack.spraycan_blue', [
      'alexscaves:polymer_plate', 'oritech:fluid_pipe', 'minecraft:blue_dye',
      'minecraft:blue_dye', 'minecraft:blue_dye'
    ]],
    ['spraycan_glow', 'mts:mtsofficialpack.spraycan_glow', [
      'alexscaves:polymer_plate', 'oritech:fluid_pipe', 'minecraft:cyan_dye',
      'minecraft:cyan_dye', 'minecraft:cyan_dye', 'minecraft:glowstone_dust', 'minecraft:glowstone_dust'
    ]],
    ['spraycan_red', 'mts:mtsofficialpack.spraycan_red', [
      'alexscaves:polymer_plate', 'oritech:fluid_pipe', 'minecraft:red_dye',
      'minecraft:red_dye', 'minecraft:red_dye'
    ]],
    ['spraycan_yellow', 'mts:mtsofficialpack.spraycan_yellow', [
      'alexscaves:polymer_plate', 'oritech:fluid_pipe', 'minecraft:yellow_dye',
      'minecraft:yellow_dye', 'minecraft:yellow_dye'
    ]],

    ['basicbomb', 'mts:mtsofficialpack.basicbomb', [
      'scguns:he_grenade_round', 'minecraft:tnt', 'minecraft:iron_ingot', 'minecraft:iron_ingot'
    ]],
    ['bomblet', 'mts:mtsofficialpack.bomblet', [
      'minecraft:gunpowder', 'oritech:fluid_pipe', 'minecraft:iron_ingot'
    ]],
    ['bullet3700he', 'mts:mtsofficialpack.bullet3700he', [
      'scguns:he_grenade_round', 'minecraft:gunpowder', 'minecraft:iron_ingot'
    ]],
    ['bullet3700he_mag', 'mts:mtsofficialpack.bullet3700he_mag', [
      'mts:mtsofficialpack.bullet3700he', 'mts:mtsofficialpack.bullet3700he',
      'minecraft:iron_ingot'
    ]],
    ['bullet3700proxy', 'mts:mtsofficialpack.bullet3700proxy', [
      'scguns:rocket', 'minecraft:gravel', 'minecraft:gunpowder', 'minecraft:iron_ingot'
    ]],
    ['bullet3700proxy_mag', 'mts:mtsofficialpack.bullet3700proxy_mag', [
      'mts:mtsofficialpack.bullet3700proxy', 'mts:mtsofficialpack.bullet3700proxy',
      'minecraft:iron_ingot'
    ]],
    ['bullet3700solid', 'mts:mtsofficialpack.bullet3700solid', [
      'scguns:osborne_slug', '#c:ingots/iron', 'minecraft:gunpowder'
    ]],
    ['bullet3700solid_mag', 'mts:mtsofficialpack.bullet3700solid_mag', [
      'mts:mtsofficialpack.bullet3700solid', 'mts:mtsofficialpack.bullet3700solid',
      'minecraft:iron_ingot'
    ]],
    ['bullet762', 'mts:mtsofficialpack.bullet762', [
      'scguns:advanced_round', 'scguns:advanced_round', 'scguns:advanced_round',
      'scguns:advanced_round', 'minecraft:iron_block', 'minecraft:iron_block',
      'minecraft:gunpowder', 'minecraft:gunpowder'
    ]],
    ['bulletflare_blue', 'mts:mtsofficialpack.bulletflare_blue', [
      'minecraft:soul_sand', 'minecraft:glowstone_dust', 'minecraft:gunpowder', 'oritech:fluid_pipe'
    ]],
    ['bulletflare_green', 'mts:mtsofficialpack.bulletflare_green', [
      'minecraft:copper_nugget', 'minecraft:glowstone_dust', 'minecraft:gunpowder', 'oritech:fluid_pipe'
    ]],
    ['bulletflare_rainbow', 'mts:mtsofficialpack.bulletflare_rainbow', [
      'minecraft:magma_cream', 'minecraft:gunpowder', 'scguns:antique_flare'
    ]],
    ['bulletflare_red', 'mts:mtsofficialpack.bulletflare_red', [
      'minecraft:redstone', 'minecraft:glowstone_dust', 'minecraft:gunpowder', 'oritech:fluid_pipe'
    ]],
    ['bulletflare_white', 'mts:mtsofficialpack.bulletflare_white', [
      'minecraft:white_dye', 'minecraft:glowstone_dust', 'minecraft:glowstone_dust',
      'minecraft:gunpowder', 'oritech:fluid_pipe'
    ]],
    ['bulletflare_yellow', 'mts:mtsofficialpack.bulletflare_yellow', [
      'minecraft:glowstone_dust', 'minecraft:gunpowder', 'oritech:fluid_pipe'
    ]],
    ['bulletrocket', 'mts:mtsofficialpack.bulletrocket', [
      'scguns:rocket', 'oritech:fluid_pipe', 'oritech:solid_biofuel'
    ]],
    ['heavy_bomb', 'mts:mtsofficialpack.heavy_bomb', [
      'minecraft:tnt', 'minecraft:tnt', 'supplementaries:bomb', 'supplementaries:bomb',
      'minecraft:iron_ingot', 'minecraft:iron_ingot', 'alexscaves:uranium_rod'
    ]],

    ['paintgun', 'mts:mts.paintgun', [
      'minecraft:dispenser', 'minecraft:bucket', 'oritech:fluid_pipe',
      'scguns:gun_grip', 'alexscaves:polymer_plate'
    ]]
  ]

  recipes.forEach(([name, result, items]) => {
    let recipeIngredientMap = {}
    items.forEach((ingredient, index) => {
      recipeIngredientMap[slotNames[index]] = ingredient.startsWith('#')
        ? { tag: ingredient.substring(1) }
        : { item: ingredient }
    })
    event.custom({
      type: 'scguns:gun_bench',
      ingredients: recipeIngredientMap,
      result: { id: result, count: 1 }
    }).id(`kubejs:mts_scorched/${name}`)
  })
})
