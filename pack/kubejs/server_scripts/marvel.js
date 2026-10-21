ServerEvents.recipes(event => {

  event.remove('marvel:palladium_arc_reactor')
  event.remove('marvel:diamond_arc_reactor')
  event.remove('marvel:uru_ingot')
  event.remove({ input: 'infinity_gauntlet:uru_star' })

  event.recipes.oritech.foundry().itemInputs(['antarchy:uranium_ingot', 'pastel:stardust']).itemOutputs('marvel:uru_ingot').time(200).id('kubejs:oritech/foundry/uru_ingot')

  event.remove({ output: 'marvel:veronica_satellite' })
  event.remove({ output: 'marvel:veronica_repair_module_mark_1' })
  event.remove({ output: 'marvel:veronica_repair_module_mark_2' })
  event.remove({ output: 'marvel:veronica_remote' })

  event.shaped('marvel:veronica_satellite', [
    ' T ',
    'IPE',
    ' S '
  ], {
    T: 'oritech:big_solar_panel_block',
    I: 'antarchy:titanium_ingot',
    P: 'oritech:processing_unit',
    E: 'minecraft:ender_eye',
    S: 'minecraft:iron_ingot'
  })

  event.shaped('marvel:veronica_repair_module_mark_1', [
    ' I ',
    'B P',
    ' I '
  ], {
    I: 'minecraft:iron_ingot',
    B: 'oritech:basic_battery',
    P: 'oritech:processing_unit'
  })

  event.shaped('marvel:veronica_repair_module_mark_2', [
    ' A ',
    'TMC',
    ' A '
  ], {
    A: 'oritech:advanced_battery',
    T: 'antarchy:titanium_ingot',
    M: 'marvel:veronica_repair_module_mark_1',
    C: 'oritech:advanced_computing_engine'
  })

  event.shaped('marvel:veronica_remote', [
    ' G ',
    'EPE',
    ' I '
  ], {
    G: 'minecraft:gold_ingot',
    E: 'minecraft:ender_eye',
    P: 'oritech:processing_unit',
    I: 'minecraft:iron_ingot'
  })

  event.replaceInput({}, 'marvel:proto_adamantium_block', 'marvel:adamantium_block')
  event.replaceInput({}, 'marvel:proto_adamantium_ingot', 'marvel:adamantium_ingot')
  event.replaceInput({}, 'marvel:proto_adamantium_nugget', 'marvel:adamantium_nugget')
  event.replaceOutput({}, 'marvel:proto_adamantium_block', 'marvel:adamantium_block')
  event.replaceOutput({}, 'marvel:proto_adamantium_ingot', 'marvel:adamantium_ingot')
  event.replaceOutput({}, 'marvel:proto_adamantium_nugget', 'marvel:adamantium_nugget')

  event.remove({ output: 'infinity_gauntlet:soul_block' })
  event.remove({ output: 'infinity_gauntlet:reality_block' })
  event.remove({ output: 'infinity_gauntlet:infinity_stone_case' })
  event.remove({ output: 'infinity_gauntlet:the_sceptre' })
  event.remove({ output: 'infinity_gauntlet:cosmi_rod' })
  event.remove({ output: 'infinity_gauntlet:netherite_stick' })
  event.remove({ output: 'infinity_gauntlet:smithinggauntlet' })
  event.remove({ output: 'infinity_gauntlet:uru_ore' })
  ;['power', 'space', 'reality', 'soul', 'time', 'mind'].forEach(stone =>
    event.remove({ id: `integrated_superheroes:${stone}_stone` }))
  event.remove({ output: 'marvel:tesseract' })

  event.replaceInput({}, 'marvel:tesseract_shard', 'antarchy:high_fructose_corn_syrup')

  event.replaceInput(
      { input: 'infinity_gauntlet:uru_ingot' },
      'infinity_gauntlet:uru_ingot',
      'marvel:uru_ingot'
  )

  const uruRecipeIds = [
    'infinity_gauntlet:uru_helmet',
    'infinity_gauntlet:uru_chestplate',
    'infinity_gauntlet:uru_leggings',
    'infinity_gauntlet:uru_boots',
    'infinity_gauntlet:uru_s',
    'infinity_gauntlet:uru_d'
  ]
  uruRecipeIds.forEach(id => event.remove({ id: id }))


  event.replaceInput(
    { input: "marvel:palladium_ingot" },
    'marvel:palladium_ingot',
    'minecraft:netherite_ingot'
  )
  event.replaceInput(
    { input: "marvel:palladium_block" },
    'marvel:palladium_block',
    'minecraft:netherite_block'
  )

  event.replaceInput(
    { output: "marvel:suit_table" },
    "minecraft:anvil",
    "oritech:assembler_block"
  )
  event.remove({ id: 'integrated_superheroes:adamantium_ingot' })
  event.shapeless('marvel:adamantium_ingot', ['antarchy:titanium_ingot', 'minecraft:netherite_ingot', 'marvel:vibranium_ingot'])
    .id('kubejs:marvel/adamantium_ingot')

  event.remove('marvel:vibranium_sword')
  event.remove('marvel:vibranium_shovel')
  event.remove('marvel:vibranium_axe')
  event.remove('marvel:vibranium_pickaxe')
  event.remove('marvel:vibranium_hoe')
  event.remove('marvel:vibranium_helmet')
  event.remove('marvel:vibranium_chestplate')
  event.remove('marvel:vibranium_leggings')
  event.remove('marvel:vibranium_boots')

  event.remove('marvel:raw_palladium')
  event.remove('marvel:raw_palladium_block')
  event.remove('marvel:palladium_block')
  event.remove('marvel:palladium_nugget')
  event.remove('marvel:palladium_ingot_from_blasting_deepslate_palladium_ore')
  event.remove('marvel:palladium_ingot_from_blasting_palladium_ore')
  event.remove('marvel:palladium_ingot_from_blasting_raw_palladium')
  event.remove('marvel:palladium_ingot_from_nuggets')
  event.remove('marvel:palladium_ingot_from_palladium_block')
  event.remove('marvel:palladium_ingot_from_smelting_deepslate_palladium_ore')
  event.remove('marvel:palladium_ingot_from_smelting_palladium_ore')
  event.remove('marvel:palladium_ingot_from_smelting_raw_palladium')

  event.remove('marvel:gray_hydra_brick_slab')
  event.remove('marvel:gray_hydra_brick_stairs')
  event.remove('marvel:gray_hydra_brick_wall')
  event.remove('marvel:gray_hydra_brick_slab_from_gray_hydra_bricks_stonecutting')
  event.remove('marvel:gray_hydra_brick_stairs_from_gray_hydra_bricks_stonecutting')
  event.remove('marvel:gray_hydra_brick_wall_from_gray_hydra_bricks_stonecutting')

  event.remove('marvel:light_gray_hydra_brick_slab')
  event.remove('marvel:light_gray_hydra_brick_stairs')
  event.remove('marvel:light_gray_hydra_brick_wall')
  event.remove('marvel:light_gray_hydra_brick_slab_from_light_gray_hydra_bricks_stonecutting')
  event.remove('marvel:light_gray_hydra_brick_stairs_from_light_gray_hydra_bricks_stonecutting')
  event.remove('marvel:light_gray_hydra_brick_wall_from_light_gray_hydra_bricks_stonecutting')

  event.remove('marvel:green_hydra_brick_slab')
  event.remove('marvel:green_hydra_brick_stairs')
  event.remove('marvel:green_hydra_brick_wall')
  event.remove('marvel:green_hydra_brick_slab_from_green_hydra_bricks_stonecutting')
  event.remove('marvel:green_hydra_brick_stairs_from_green_hydra_bricks_stonecutting')
  event.remove('marvel:green_hydra_brick_wall_from_green_hydra_bricks_stonecutting')

  event.remove('marvel:yellow_hydra_brick_slab')
  event.remove('marvel:yellow_hydra_brick_stairs')
  event.remove('marvel:yellow_hydra_brick_wall')
  event.remove('marvel:yellow_hydra_brick_slab_from_yellow_hydra_bricks_stonecutting')
  event.remove('marvel:yellow_hydra_brick_stairs_from_yellow_hydra_bricks_stonecutting')
  event.remove('marvel:yellow_hydra_brick_wall_from_yellow_hydra_bricks_stonecutting')

  event.shaped(
    Item.of('marvel:palladium_arc_reactor'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'minecraft:copper_ingot',
      B: 'minecraft:glowstone_dust',
      C: 'minecraft:redstone_block'
    }
  )

  event.shaped(
    Item.of('marvel:diamond_arc_reactor'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'antarchy:titanium_ingot',
      B: 'alexscaves:radon_lamp_light_blue',
      C: 'marvel:palladium_arc_reactor'
    }
  )
}
)

const COSTUME_COLORS = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
const COSTUME_SLOTS = ['helmet', 'chestplate', 'leggings', 'boots']

function cloth(color) {
  return 'marvellegacy:cloth_' + color
}

const COSTUME_KEY = {
  R: cloth('red'),
  B: cloth('blue'),
  K: cloth('black'),
  W: cloth('white'),
  Y: cloth('yellow'),
  L: cloth('light_blue'),
  C: cloth('cyan'),
  N: cloth('brown'),
  G: cloth('gray'),
  V: 'antarchy:blood_crystal_shard',
  S: 'minecraft:iron_ingot'
}

const COSTUME_RECIPES = {
  'marvel:deadpool_helmet': ['RKR', 'R R'],
  'marvel:deadpool_chestplate': ['R R', 'KRK', 'RRR'],
  'marvel:deadpool_leggings': ['RKR', 'R R', 'R R'],
  'marvel:deadpool_boots': ['K K', 'K K'],
  'marvel:cyclops_helmet': ['BVB', 'B B'],
  'marvel:cyclops_chestplate': ['B B', 'YBY', 'BBB'],
  'marvel:cyclops_leggings': ['YYY', 'B B', 'B B'],
  'marvel:cyclops_boots': ['Y Y', 'B B'],
  'marvel:quicksilver_chestplate': ['L L', 'WLW', 'LLL'],
  'marvel:quicksilver_leggings': ['WWW', 'C C', 'C C'],
  'marvel:quicksilver_boots': ['W W', 'W W'],
  'marvel:captain_america_helmet': ['BWB', 'B B'],
  'marvel:captain_america_chestplate': ['B B', 'BWB', 'RWR'],
  'marvel:captain_america_leggings': ['NNN', 'B B', 'B B'],
  'marvel:captain_america_boots': ['N N', 'N N'],
  'marvel:captain_marvel_helmet': ['YRY', 'R R'],
  'marvel:captain_marvel_chestplate': ['B B', 'RYR', 'BRB'],
  'marvel:captain_marvel_leggings': ['RYR', 'B B', 'B B'],
  'marvel:captain_marvel_boots': ['R R', 'Y Y'],
  'marvel:winter_soldier_chestplate': ['K K', 'SKG', 'KGK'],
  'marvel:winter_soldier_leggings': ['KKK', 'K K', 'G G'],
  'marvel:winter_soldier_boots': ['N N', 'K K']
}

function costumeKey(pattern) {
  let key = {}
  pattern.join('').split('').forEach(letter => {
    if (letter != ' ') key[letter] = COSTUME_KEY[letter]
  })
  return key
}

const REPLACED_MARVEL_COSTUME_HEROES = ['spider_man', 'wolverine', 'deadpool', 'cyclops', 'captain_america', 'captain_marvel']

ServerEvents.recipes(event => {
  event.remove({ id: 'marvellegacy:web_shooters' })
  event.remove({ id: 'marvellegacy:syringe_spider_powers_peter_parker' })
  event.remove({ id: 'marvellegacy:syringe_weapon_x_logan' })
  event.remove({ id: /^integrated_superheroes:syringe_/ })
  event.remove({ id: 'marvel:syringe' })
  event.replaceInput({}, 'marvel:syringe', 'marvellegacy:syringe_empty')
  event.remove({ id: 'marvel:web_fluid' })
  REPLACED_MARVEL_COSTUME_HEROES.forEach(hero => {
    COSTUME_SLOTS.forEach(slot => {
      event.remove({ id: 'marvel:' + hero + '_' + slot })
      event.remove({ id: 'marvel:' + hero + '_' + slot + '_repairing' })
    })
  })
  ;['chestplate', 'leggings', 'boots'].forEach(slot => event.remove({ id: 'marvel:quicksilver_' + slot + '_repairing' }))
  ;['chestplate', 'leggings', 'boots'].forEach(slot => event.remove({ id: 'marvel:quicksilver_' + slot }))

  COSTUME_COLORS.forEach(color => {
    witcherySpinningWheel(event, '6x ' + cloth(color), 5, 100, ['minecraft:' + color + '_wool'])
    witcherySpinningWheel(event, '6x ' + cloth(color), 5, 100, ['antarchy:' + color + '_truffalo_tuft'])
  })

  Object.keys(COSTUME_RECIPES).forEach(result => {
    event.shaped(result, COSTUME_RECIPES[result], costumeKey(COSTUME_RECIPES[result]))
      .id('kubejs:costume/' + result.replace(':', '/'))
  })

  event.replaceInput({ id: 'integrated_superheroes:costume/spiderman_classic_helmet' }, 'minecraft:glass_pane', 'oritech:industrial_glass_block')

  event.shaped(Item.of('marvellegacy:web_shooters[damage=2500]'), [
    ' M ',
    'TKT',
    'S S'
  ], {
    M: 'oritech:motor',
    T: 'antarchy:titanium_ingot',
    K: 'oritech:small_tank_block',
    S: 'minecraft:iron_ingot'
  }).id('kubejs:marvellegacy/web_shooters')
  event.replaceInput({ id: 'marvellegacy:web_cartridge' }, 'minecraft:copper_ingot', 'minecraft:iron_ingot')

  const WEB_FLUID_INPUTS = [
    { item: 'marvellegacy:vial_water' },
    { item: 'minecraft:string' },
    [{ item: 'minecraft:slime_ball' }, { item: 'antarchy:flytrap_goo' }],
    { item: 'oritech:nickel_nugget' }
  ]
  event.remove({ id: 'marvel:reinforced_leather' })
  witcherySpinningWheel(event, '4x marvel:vibranium_weave', 5, 100, ['marvel:vibranium', 'minecraft:string'])

  event.remove({ id: 'marvellegacy:vial_web_fluid' })
  event.custom({
    type: 'minecraft:crafting_shapeless',
    category: 'misc',
    ingredients: WEB_FLUID_INPUTS,
    result: { id: 'marvellegacy:vial_web_fluid', count: 1 }
  }).id('kubejs:marvellegacy/vial_web_fluid')
  event.shapeless('marvellegacy:vial_web_fluid', [
    'witchery:brew_of_webs',
    'marvellegacy:vial_water'
  ]).id('kubejs:marvellegacy/vial_web_fluid_from_brew_of_webs')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:vial_water', 'minecraft:string', Ingredient.of(['minecraft:slime_ball', 'antarchy:flytrap_goo']), 'oritech:nickel_nugget'])
    .itemOutputs('marvellegacy:vial_web_fluid')
    .time(100)
    .id('kubejs:oritech/assembler/vial_web_fluid')

  event.recipes.oritech.centrifuge()
    .itemInputs('marvel:villager_blood_sample')
    .itemOutputs('marvel:x_genes')
    .time(200)
    .id('kubejs:oritech/centrifuge/x_genes')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'minecraft:fermented_spider_eye', 'antarchy:uranium_ingot', 'alexscaves:uranium'])
    .itemOutputs('marvellegacy:syringe_spider_powers_peter_parker')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_spider_powers_peter_parker')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'marvel:x_genes', 'marvel:adamantium_ingot', 'marvel:adamantium_ingot'])
    .itemOutputs('marvellegacy:syringe_weapon_x_logan')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_weapon_x_logan')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'marvel:villager_blood_sample', 'antarchy:uranium_nugget', 'minecraft:golden_apple'])
    .itemOutputs('integrated_superheroes:syringe_super_soldier_steve_rogers')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_super_soldier_steve_rogers')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'iceandfire:lightning_dragon_heart', 'witchery:mandrake_root', 'witchery:wolfsbane'])
    .itemOutputs('integrated_superheroes:syringe_heart_shaped_herb_tchalla')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_heart_shaped_herb_tchalla')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'marvel:x_genes', 'minecraft:totem_of_undying', 'antarchy:cooked_corndog'])
    .itemOutputs('integrated_superheroes:syringe_weapon_x_wade_wilson')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_weapon_x_wade_wilson')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'marvel:x_genes', 'antarchy:blood_crystal_shard', 'antarchy:lucid_eye'])
    .itemOutputs('integrated_superheroes:syringe_optic_blasts_scott_summers')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_optic_blasts_scott_summers')
  event.custom({
    type: 'oritech:assembler',
    ingredients: [
      { item: 'marvellegacy:syringe_empty' },
      { item: 'marvel:x_genes' },
      { type: 'neoforge:components', items: 'minecraft:potion', components: { 'minecraft:potion_contents': { potion: 'antarchy:long_time_contraction' } } },
      { item: 'antarchy:rainbow_sugar' }
    ],
    results: [{ id: 'integrated_superheroes:syringe_super_speed_pietro_maximoff', count: 1 }],
    time: 200
  }).id('kubejs:oritech/assembler/syringe_super_speed_pietro_maximoff')
  event.custom({
    type: 'oritech:particle_collision',
    ingredients: [
      { item: 'marvellegacy:syringe_empty' },
      { item: 'pastel:star_fragment' }
    ],
    results: [{ count: 1, id: 'integrated_superheroes:syringe_binary_carol_danvers' }],
    time: 10000
  }).id('kubejs:oritech/particle_collision/syringe_binary_carol_danvers')
  event.custom({
    type: 'oritech:assembler',
    ingredients: [
      { item: 'marvellegacy:syringe_empty' },
      { type: 'neoforge:components', items: 'minecraft:potion', components: { 'minecraft:potion_contents': { potion: 'mutantmonsters:chemical_x' } } },
      { item: 'alexscaves:nuclear_bomb' },
      { item: 'marvel:villager_blood_sample' }
    ],
    results: [{ id: 'integrated_superheroes:syringe_gamma_mutation_bruce_banner', count: 1 }],
    time: 200
  }).id('kubejs:oritech/assembler/syringe_gamma_mutation_bruce_banner')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'marvel:x_genes', 'alexscaves:scarlet_neodymium_ingot', 'alexscaves:azure_neodymium_ingot'])
    .itemOutputs('integrated_superheroes:syringe_magnetism_erik_lehnsherr')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_magnetism_erik_lehnsherr')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'marvel:x_genes', 'antarchy:eye_of_the_storm', 'iceandfire:lightning_dragon_blood'])
    .itemOutputs('integrated_superheroes:syringe_weather_manipulation_ororo_munroe')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_weather_manipulation_ororo_munroe')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'marvel:x_genes', 'minecraft:blue_ice', 'iceandfire:frost_lily'])
    .itemOutputs('integrated_superheroes:syringe_cryokinesis_bobby_drake')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_cryokinesis_bobby_drake')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'marvel:x_genes', 'witchery:happenstance_oil', 'pastel:midnight_aberration'])
    .itemOutputs('integrated_superheroes:syringe_chaos_magic_wanda_maximoff')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_chaos_magic_wanda_maximoff')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'marvel:x_genes', 'antarchy:titanium_block', 'minecraft:iron_block'])
    .itemOutputs('integrated_superheroes:syringe_organic_steel_piotr_rasputin')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_organic_steel_piotr_rasputin')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'minecraft:echo_shard', 'witchery:demon_heart', 'antarchy:uranium_ingot'])
    .itemOutputs('integrated_superheroes:syringe_radar_sense_matt_murdock')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_radar_sense_matt_murdock')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'marvel:x_genes', 'iceandfire:ectoplasm', 'dimdoors:world_thread'])
    .itemOutputs('integrated_superheroes:syringe_phasing_kitty_pryde')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_phasing_kitty_pryde')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'antarchy:ouranwood_acorn', 'witchery:tongue_of_dog', 'minecraft:rabbit_foot'])
    .itemOutputs('integrated_superheroes:syringe_squirrel_powers_doreen_green')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_squirrel_powers_doreen_green')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'pastel:star_fragment', 'iceandfire:fire_dragon_blood', 'minecraft:blaze_rod'])
    .itemOutputs('integrated_superheroes:syringe_flame_on_johnny_storm')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_flame_on_johnny_storm')
  event.custom({
    type: 'oritech:assembler',
    ingredients: [
      { item: 'marvellegacy:syringe_empty' },
      { item: 'pastel:star_fragment' },
      { item: 'malisisdoorsreborn:forcefield_panel' },
      { type: 'neoforge:components', items: 'minecraft:potion', components: { 'minecraft:potion_contents': { potion: 'minecraft:invisibility' } } }
    ],
    results: [{ id: 'integrated_superheroes:syringe_invisibility_sue_storm', count: 1 }],
    time: 200
  }).id('kubejs:oritech/assembler/syringe_invisibility_sue_storm')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'pastel:star_fragment', 'witchery:tongue_of_dog', 'alexscaves:ferrouslime_ball'])
    .itemOutputs('integrated_superheroes:syringe_elasticity_reed_richards')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_elasticity_reed_richards')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'pastel:star_fragment', 'minecraft:tuff', 'alexscaves:heavyweight'])
    .itemOutputs('integrated_superheroes:syringe_rock_hide_ben_grimm')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_rock_hide_ben_grimm')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'marvel:x_genes', 'minecraft:firework_star', 'pastel:pink_pigment'])
    .itemOutputs('integrated_superheroes:syringe_pyrotechnics_jubilation_lee')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_pyrotechnics_jubilation_lee')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'marvel:x_genes', 'witchery:drop_of_luck', 'mutantmonsters:creeper_shard'])
    .itemOutputs('integrated_superheroes:syringe_kinetic_charge_remy_lebeau')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_kinetic_charge_remy_lebeau')
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'marvel:x_genes', 'witchery:bottle_of_blood', 'witchery:brew_of_oblivion'])
    .itemOutputs('integrated_superheroes:syringe_absorption_anna_marie')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_absorption_anna_marie')
})
