ServerEvents.tags('item', event => {
  event.add('c:dusts/saltpeter', 'scguns:niter')
  event.add('c:dusts/phosphorus', 'alexscaves:sulfur_dust')
  event.remove('c:dusts/saltpeter', 'scguns:niter_dust')
  event.remove('c:dusts/niter', 'scguns:niter_dust')
  event.remove('c:dusts/phosphorus', 'scguns:phosphor_dust')
  event.remove('scguns:ammo', ['scguns:buckshot', 'scguns:nitro_buckshot', 'scguns:grapeshot'])
  event.remove('scguns:shotgun_ammo', ['scguns:buckshot', 'scguns:nitro_buckshot'])
  event.remove('scguns:special_ammo', 'scguns:grapeshot')
  event.remove('scguns:thermolith_ingredient', ['scguns:vehement_coal', 'scguns:plasma'])
  event.add('scguns:thermolith_ingredient', 'minecraft:blaze_rod')
  event.remove('create:blaze_burner_fuel/special', ['scguns:vehement_coal', 'scguns:vehement_coal_block'])
  event.remove('minecraft:beacon_payment_items', 'scguns:vehement_coal')
  event.remove('c:tools', 'scguns:anthralite_knife')
  event.remove('c:tools/knives', 'scguns:anthralite_knife')
  event.remove('c:ores', 'scguns:vehement_coal_ore')
  event.remove('c:storage_blocks', 'scguns:vehement_coal_block')
})

ServerEvents.recipes(event => {
  event.remove({ input: 'scguns:scorched_blend' })
  const processorTypes = [
    'scguns:mechanical_pressing',
    'scguns:powered_mechanical_pressing',
    'scguns:macerating',
    'scguns:powered_macerating',
    'scguns:lightning_battery'
  ]
  processorTypes.forEach(type => event.remove({ type: type }))

  event.remove({ id: 'scguns:gunpowder_from_gunpowder_dust' })
  event.remove({ id: 'scguns:peal_from_peal_dust' })
  event.remove({ id: 'scguns:sheol_from_sheol_dust' })
  event.remove({ id: 'scguns:fire_charge_from_sheol' })
  event.remove({ id: 'scguns:firework_rocket_simple' })
  event.remove({ id: 'scguns:nitro_powder_from_nitro_powder_dust' })
  event.remove({ id: 'scguns:powder_and_ball' })
  const consolidated = ['scguns:buckshot', 'scguns:nitro_buckshot', 'scguns:grapeshot', 'scguns:vehement_coal', 'scguns:vehement_coal_block', 'scguns:vehement_coal_ore']
  consolidated.forEach(item => {
    event.remove({ output: item })
    event.remove({ input: item })
  })
  event.remove({ id: 'scguns:vicious_acid' })

  const recipes = [
    ['scguns:compact_copper_round', ['minecraft:copper_ingot', 'minecraft:gunpowder', 'minecraft:iron_nugget'], 7, 14],
    ['scguns:standard_copper_round', ['minecraft:copper_ingot', 'minecraft:gunpowder', 'minecraft:iron_nugget', 'minecraft:iron_nugget'], 5, 10],
    ['scguns:shotgun_shell', ['minecraft:copper_ingot', 'minecraft:paper', 'minecraft:gunpowder', 'oritech:nickel_nugget'], 7, 14],
    ['scguns:microjet', ['minecraft:iron_ingot', 'minecraft:gunpowder', 'minecraft:iron_nugget'], 7, 14],
    ['scguns:compact_advanced_round', ['minecraft:iron_ingot', 'minecraft:gunpowder', 'oritech:nickel_nugget'], 7, 14],
    ['scguns:advanced_round', ['minecraft:iron_ingot', 'minecraft:gunpowder', 'oritech:nickel_nugget', 'oritech:nickel_nugget'], 5, 10],
    ['scguns:frog_dart', ['minecraft:iron_ingot', 'minecraft:gunpowder', 'scguns:needle'], 7, 14],
    ['scguns:hog_round', ['minecraft:iron_ingot', 'minecraft:blaze_powder', 'minecraft:gold_nugget'], 7, 14],
    ['scguns:ramrod_round', ['minecraft:iron_ingot', 'scguns:peal', 'oritech:nickel_nugget'], 7, 14],
    ['scguns:shatter_round', ['minecraft:iron_ingot', 'minecraft:gunpowder', 'scguns:flechette'], 5, 10],
    ['scguns:bearpack_shell', ['minecraft:iron_ingot', 'minecraft:paper', 'scguns:nitro_powder', 'oritech:nickel_nugget'], 5, 10],
    ['scguns:he_grenade_round', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:gunpowder', 'oritech:nickel_nugget'], 3, 6],
    ['scguns:rocket', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:blaze_powder', 'oritech:nickel_ingot'], 3, 6],
    ['scguns:fire_grenade_round', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:blaze_powder', 'oritech:nickel_nugget'], 3, 6],
    ['scguns:gas_grenade_round', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'alexscaves:sulfur_dust', 'oritech:nickel_nugget'], 3, 6],
    ['scguns:bouncy_grenade_round', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:blaze_powder', 'minecraft:slime_ball'], 3, 6],
    ['scguns:krahg_round', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'scguns:nitro_powder', 'oritech:nickel_nugget'], 3, 6],
    ['scguns:osborne_slug', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'scguns:nitro_powder', 'pastel:stardust'], 2, 4],
    ['scguns:antique_flare', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:gunpowder', 'scguns:pebbles'], 3, 6],
    ['scguns:copper_flare', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:gunpowder', 'minecraft:copper_ingot'], 3, 6],
    ['scguns:iron_flare', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:gunpowder', 'minecraft:iron_ingot'], 3, 6],
    ['scguns:gold_flare', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:gunpowder', 'minecraft:gold_ingot'], 3, 6],
    ['scguns:frontier_flare', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:gunpowder', 'minecraft:iron_nugget'], 3, 6],
    ['scguns:ocean_flare', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:gunpowder', 'minecraft:prismarine_shard'], 3, 6],
    ['scguns:diamond_steel_flare', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:gunpowder', 'antarchy:titanium_ingot'], 3, 6],
    ['scguns:treated_brass_flare', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:gunpowder', 'abyssal_decor:seabrass_ingot'], 3, 6],
    ['scguns:wrecker_flare', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:gunpowder', 'alexscaves:sulfur_dust'], 3, 6],
    ['scguns:sculk_flare', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:gunpowder', 'scguns:sculk_cell'], 3, 6],
    ['scguns:beowulf_round', ['antarchy:titanium_ingot', 'scguns:nitro_powder', 'oritech:nickel_nugget'], 7, 14],
    ['scguns:gibbs_round', ['antarchy:titanium_ingot', 'minecraft:gunpowder', 'oritech:nickel_nugget', 'oritech:nickel_nugget'], 5, 10],
    ['scguns:shulkshot', ['minecraft:shulker_shell', 'minecraft:gunpowder', 'oritech:nickel_nugget'], 6, 12],
    ['minecraft:gunpowder', ['alexscaves:sulfur_dust', '#c:dusts/saltpeter', 'minecraft:charcoal', 'minecraft:flint'], 3, 6],
    ['scguns:peal', ['alexscaves:sulfur_dust', 'alexscaves:sulfur_dust', 'minecraft:charcoal', 'minecraft:sculk'], 5, 10],
    ['scguns:energy_cell', ['minecraft:iron_ingot', 'antarchy:flytrap_goo', 'minecraft:iron_nugget'], 4, 8],
    ['scguns:sculk_cell', ['minecraft:iron_ingot', 'scguns:peal', 'minecraft:iron_nugget'], 4, 8],
    ['scguns:shock_cell', ['minecraft:iron_ingot', 'minecraft:redstone', 'minecraft:iron_nugget'], 4, 8],
    ['scguns:exo_suit_core', ['scguns:energy_cell', 'antarchy:flytrap_goo', 'abyssal_decor:seabrass_ingot'], 1, 0],
    ['scguns:powder_and_ball', ['minecraft:gunpowder', 'scguns:pebbles', 'minecraft:paper'], 6, 12]
  ]
  recipes.forEach(([output, inputs, craftCount, assemblerCount]) => {
    const name = output.split(':')[1]
    event.shapeless(`${craftCount}x ${output}`, inputs).id(`kubejs:scguns/crafting/${name}`)
    if (assemblerCount == 0) return
    const assemblerInputs = inputs.length == 4 ? inputs : [inputs[0], inputs[1], inputs[1]].concat(inputs.slice(2))
    event.recipes.oritech.assembler().itemInputs(assemblerInputs).itemOutputs(`${assemblerCount}x ${output}`)
      .time(60).id(`kubejs:scguns/assembler/${name}`)
  })

  const discs = [
    ['minecraft:music_disc_11', 'minecraft:blackstone'],
    ['minecraft:music_disc_13', 'minecraft:gold_ingot'],
    ['minecraft:music_disc_5', 'scguns:peal'],
    ['minecraft:music_disc_blocks', 'minecraft:redstone'],
    ['minecraft:music_disc_cat', 'minecraft:string'],
    ['minecraft:music_disc_chirp', 'minecraft:feather'],
    ['minecraft:music_disc_far', 'minecraft:ender_pearl'],
    ['minecraft:music_disc_mall', 'minecraft:emerald'],
    ['scguns:music_disc_mass_destruction', 'minecraft:blaze_rod'],
    ['scguns:music_disc_mass_production', 'oritech:nickel_ingot'],
    ['minecraft:music_disc_mellohi', 'minecraft:note_block'],
    ['minecraft:music_disc_otherside', 'minecraft:prismarine_shard'],
    ['minecraft:music_disc_pigstep', 'minecraft:porkchop'],
    ['minecraft:music_disc_relic', 'minecraft:netherite_scrap'],
    ['minecraft:music_disc_stal', 'minecraft:coal'],
    ['minecraft:music_disc_strad', 'minecraft:tropical_fish'],
    ['minecraft:music_disc_wait', 'minecraft:clock'],
    ['minecraft:music_disc_ward', 'minecraft:nether_wart']
  ]
  discs.forEach(([disc, special]) => {
    event.recipes.oritech.assembler().itemInputs(['minecraft:slime_ball', 'minecraft:charcoal', 'minecraft:charcoal', special])
      .itemOutputs(disc).time(100).id(`kubejs:scguns/assembler/${disc.split(':')[1]}`)
  })
  event.recipes.oritech.assembler()
    .itemInputs(['scguns:music_disc_mass_destruction', 'minecraft:netherite_scrap', 'minecraft:slime_ball', 'minecraft:charcoal'])
    .itemOutputs('scguns:music_disc_mass_destruction_extended').time(100)
    .id('kubejs:scguns/assembler/music_disc_mass_destruction_extended')

  event.shaped('scguns:grenade', [' Q ', 'QXQ', ' # '], { Q: 'minecraft:iron_nugget', X: 'minecraft:flower_pot', '#': 'minecraft:stick' })
    .id('kubejs:scguns/crafting/grenade')
  event.shaped('2x scguns:powder_keg', ['QXQ', 'PRP', 'QLQ'], { Q: '#minecraft:wooden_slabs', X: '#c:dusts/phosphorus', P: 'minecraft:iron_nugget', R: 'minecraft:tnt', L: '#c:dusts/saltpeter' })
    .id('kubejs:scguns/crafting/powder_keg')
  event.shapeless('scguns:nitro_keg', ['scguns:powder_keg', 'scguns:nitro_powder', 'scguns:nitro_powder'])
    .id('kubejs:scguns/crafting/nitro_keg')
  event.shaped('scguns:thermolith', ['QXQ', 'XMX', 'QXQ'], { Q: 'oritech:nickel_ingot', X: 'minecraft:iron_bars', M: 'minecraft:blaze_rod' })
    .id('kubejs:scguns/crafting/thermolith')

  event.shaped('scguns:energy_core', [
    'SBS',
    ' R '
  ], {
    S: 'minecraft:iron_ingot',
    B: 'antarchy:blood_crystal_shard',
    R: 'minecraft:redstone_block'
  }).id('kubejs:scguns/crafting/energy_core')
  event.recipes.oritech.assembler()
    .itemInputs(['scguns:depleted_energy_core', 'minecraft:redstone_block', 'minecraft:redstone', 'minecraft:redstone'])
    .itemOutputs('scguns:energy_core').time(100).id('kubejs:scguns/assembler/energy_core_recharge')
  event.recipes.oritech.assembler()
    .itemInputs(['scguns:energy_core', 'antarchy:flytrap_goo', 'antarchy:flytrap_goo', 'antarchy:blood_crystal_shard'])
    .itemOutputs('scguns:plasma_core').time(200).id('kubejs:scguns/assembler/plasma_core')

  event.recipes.oritech.atomic_forge()
    .itemInputs(['marvel:adamantium_ingot', 'alexscaves:tectonic_shard', 'iceandfire:fire_dragon_blood'])
    .itemOutputs('2x scguns:scorched_ingot').time(200).id('kubejs:scguns/atomic_forge/scorched_ingot')

  const turretRecipes = [
    ['scguns:turret_platform', 'scguns:turret_platform', ['QRQ', '#X#'], { '#': 'oritech:nickel_ingot', 'Q': 'minecraft:iron_ingot', 'R': 'oritech:processing_unit', 'X': 'oritech:motor' }],
    ['scguns:basic_turret', 'scguns:basic_turret', [' X ', 'LRL', 'MQM'], { 'X': 'scguns:m3_carabine', 'L': 'minecraft:iron_ingot', 'R': 'oritech:processing_unit', 'M': 'oritech:nickel_ingot', 'Q': 'oritech:motor' }],
    ['scguns:auto_turret', 'scguns:auto_turret', [' X ', 'LRL', 'MQM'], { 'X': 'scguns:greaser_smg', 'L': 'minecraft:iron_ingot', 'R': 'oritech:processing_unit', 'M': 'oritech:nickel_ingot', 'Q': 'oritech:motor' }],
    ['scguns:shotgun_turret', 'scguns:shotgun_turret', [' X ', 'LRL', 'MQM'], { 'X': 'scguns:combat_shotgun', 'L': 'minecraft:iron_ingot', 'R': 'oritech:processing_unit', 'M': 'oritech:nickel_ingot', 'Q': 'oritech:motor' }],
    ['scguns:sniper_turret', 'scguns:sniper_turret', [' X ', 'LRL', 'MQM'], { 'X': 'scguns:iron_spear', 'L': 'minecraft:iron_ingot', 'R': 'oritech:processing_unit', 'M': 'oritech:nickel_ingot', 'Q': 'oritech:motor' }],
    ['scguns:turret_targeting_module', 'scguns:turret_targeting_module', [' # ', '#X#', 'Q#Q'], { '#': 'oritech:nickel_ingot', 'Q': 'minecraft:iron_ingot', 'X': 'oritech:processing_unit' }],
    ['scguns:hostile_turret_targeting_module', 'scguns:hostile_turret_targeting_module', [' # ', '#X#', 'Q#Q'], { '#': 'oritech:nickel_ingot', 'Q': 'minecraft:iron_ingot', 'X': 'oritech:target_designator' }],
    ['scguns:player_turret_targeting_module', 'scguns:player_turret_targeting_module', [' # ', '#X#', 'Q#Q'], { '#': 'oritech:nickel_ingot', 'Q': 'minecraft:iron_ingot', 'X': 'oritech:advanced_computing_engine' }],
    ['scguns:damage_turret_module', 'scguns:damage_turret_module', [' # ', '#M#', 'Q#Q'], { '#': 'oritech:nickel_ingot', 'Q': 'minecraft:iron_ingot', 'M': 'oritech:magnetic_coil' }],
    ['scguns:fire_rate_turret_module', 'scguns:fire_rate_turret_module', [' # ', '#X#', 'QXQ'], { '#': 'oritech:nickel_ingot', 'Q': 'minecraft:iron_ingot', 'X': 'oritech:motor' }],
    ['scguns:range_turret_module', 'scguns:range_turret_module', [' X ', '#Q#', 'Q#Q'], { '#': 'oritech:nickel_ingot', 'Q': 'minecraft:iron_ingot', 'X': 'oritech:enderic_lens' }],
    ['scguns:ammo_turret_module', 'scguns:ammo_turret_module', ['   ', 'XMX', 'Q#Q'], { '#': 'oritech:nickel_ingot', 'Q': 'minecraft:iron_ingot', 'M': 'minecraft:barrel', 'X': 'alexscaves:polymer_plate' }],
    ['scguns:shell_catcher_turret_module', 'scguns:shell_catcher_turret_module', [' # ', '#X#', 'Q#Q'], { '#': 'oritech:nickel_ingot', 'Q': 'alexscaves:polymer_plate', 'X': 'minecraft:hopper' }]
  ]
  turretRecipes.forEach(([id, output, pattern, key]) => {
    event.remove({ id: id })
    event.shaped(output, pattern, key).id(`kubejs:${id.replace(':', '/')}`)
  })

  event.remove({ id: 'scguns:treated_brass_gun_frame' })
  event.shaped('scguns:treated_brass_gun_frame', [' Q ', 'Q Q', 'QQQ'], { Q: 'antarchy:uranium_ingot' })
    .id('kubejs:scguns/treated_brass_gun_frame')

  const gunBench = [
    ['scguns:guns/arc_worker_from_gun_bench', 'scguns:arc_worker', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'scguns:copper_gun_frame', gun_top_internal_2: 'scguns:copper_gun_frame', gun_barrel_2: 'oritech:nickel_ingot', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'minecraft:copper_ingot', gun_top_barrel_1: 'minecraft:redstone', gun_magazine: 'abyssal_decor:seabrass_ingot' }],
    ['scguns:guns/astella_from_gun_bench', 'scguns:astella', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'iceandfire:dragonsteel_lightning_ingot', gun_top_internal_1: 'scguns:scorched_ingot', gun_top_internal_2: 'scguns:scorched_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'minecraft:nether_star', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/auto_turret_from_gun_bench', 'scguns:auto_turret', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_grip: 'scguns:turret_platform', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'scguns:heavy_gun_barrel', gun_barrel_2: 'scguns:gun_barrel', gun_top_barrel_2: 'scguns:gun_barrel', gun_magazine: 'minecraft:iron_ingot' }],
    ['scguns:guns/auvtomag_from_gun_bench', 'scguns:auvtomag', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'minecraft:iron_ingot', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'minecraft:iron_ingot', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/basic_turret_from_gun_bench', 'scguns:basic_turret', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_grip: 'scguns:turret_platform', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'oritech:nickel_ingot', gun_barrel_2: 'scguns:gun_barrel', gun_magazine: 'minecraft:iron_ingot' }],
    ['scguns:guns/basker_from_gun_bench', 'scguns:basker', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'minecraft:flint_and_steel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:gun_barrel', gun_magazine: 'scguns:empty_tank' }],
    ['scguns:guns/big_bore_from_gun_bench', 'scguns:big_bore', { gun_internal_1: 'minecraft:iron_ingot', gun_internal_2: 'scguns:heavy_gun_barrel', gun_top_internal_1: 'scguns:firing_unit', gun_top_internal_2: 'scguns:heavy_gun_barrel', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_top_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'scguns:heavy_gun_barrel', gun_magazine: 'alexscaves:heavy_bone' }],
    ['scguns:guns/birdfeeder_from_gun_bench', 'scguns:birdfeeder', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:copper_ingot', gun_top_internal_2: 'scguns:copper_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: '#minecraft:planks', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/blooper_from_gun_bench', 'scguns:blooper', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:copper_gun_frame', gun_top_internal_1: 'minecraft:copper_ingot', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/blunderbuss_from_gun_bench', 'scguns:blunderbuss', { gun_internal_1: 'minecraft:flint', gun_internal_2: 'minecraft:cobblestone', gun_top_barrel_1: 'minecraft:stone', gun_barrel_1: 'scguns:stone_gun_barrel', gun_barrel_2: 'scguns:stone_gun_barrel', gun_grip: '#minecraft:planks', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/bomb_lance_from_gun_bench', 'scguns:bomb_lance', { gun_internal_1: 'scguns:iron_gun_frame', gun_internal_2: '#minecraft:planks', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: '#minecraft:planks', gun_barrel_1: 'scguns:firing_unit', gun_top_barrel_1: 'scguns:iron_bayonet', gun_top_barrel_2: 'scguns:iron_bayonet', gun_magazine: 'iceandfire:sea_serpent_fang' }],
    ['scguns:guns/boomstick_from_gun_bench', 'scguns:boomstick', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'minecraft:copper_ingot', gun_top_internal_1: 'minecraft:copper_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/brawler_from_gun_bench', 'scguns:brawler', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'minecraft:iron_ingot', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip' }],
    ['scguns:guns/bruiser_from_gun_bench', 'scguns:bruiser', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'minecraft:copper_ingot', gun_top_internal_1: 'minecraft:copper_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/callwell_from_gun_bench', 'scguns:callwell', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_barrel_2: 'scguns:gun_barrel', gun_barrel_1: 'scguns:gun_barrel', gun_top_internal_1: '#minecraft:planks', gun_top_internal_2: 'minecraft:iron_ingot', gun_top_barrel_2: 'scguns:gun_barrel', gun_top_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/callwell_conversion_from_gun_bench', 'scguns:callwell_conversion', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_internal_1: '#minecraft:planks', gun_top_internal_2: '#minecraft:planks', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/callwell_terminal_from_gun_bench', 'scguns:callwell_terminal', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_barrel_2: 'scguns:gun_barrel', gun_top_internal_1: '#minecraft:planks', gun_top_internal_2: 'minecraft:iron_ingot', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/carapice_from_gun_bench', 'scguns:carapice', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'scguns:diamond_steel_gun_frame', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'minecraft:shulker_shell', gun_magazine: 'minecraft:shulker_shell' }],
    ['scguns:guns/cogloader_from_gun_bench', 'scguns:cogloader', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:uranium_ingot', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'scguns:gun_magazine', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/combat_shotgun_from_gun_bench', 'scguns:combat_shotgun', { gun_internal_1: '#minecraft:planks', gun_internal_2: 'scguns:firing_unit', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'oritech:nickel_ingot', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/cr4k_mining_laser_from_gun_bench', 'scguns:cr4k_mining_laser', { gun_internal_1: 'scguns:energy_core', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'scguns:gun_grip', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'oritech:nickel_ingot', gun_grip: 'scguns:treated_brass_gun_frame' }],
    ['scguns:guns/crusader_from_gun_bench', 'scguns:crusader', { gun_internal_1: 'minecraft:crossbow', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_grip: 'scguns:gun_grip', gun_barrel_1: '#minecraft:planks' }],
    ['scguns:guns/cyclone_from_gun_bench', 'scguns:cyclone', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'scguns:gun_grip', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:diamond_steel_gun_frame', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_magazine: 'antarchy:vortex_charge' }],
    ['scguns:guns/dark_matter_from_gun_bench', 'scguns:dark_matter', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'scguns:gun_magazine', gun_top_internal_1: 'minecraft:shulker_shell', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: '#minecraft:planks', gun_magazine: 'minecraft:shulker_shell' }],
    ['scguns:guns/defender_pistol_from_gun_bench', 'scguns:defender_pistol', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'minecraft:iron_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: '#minecraft:planks', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/doublet_from_gun_bench', 'scguns:doublet', { gun_internal_1: 'minecraft:flint', gun_internal_2: 'minecraft:cobblestone', gun_barrel_1: 'minecraft:stone', gun_barrel_2: 'scguns:stone_gun_barrel', gun_top_barrel_1: 'minecraft:stone', gun_top_barrel_2: 'scguns:stone_gun_barrel', gun_grip: '#minecraft:planks', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/dozier_rl_from_gun_bench', 'scguns:dozier_rl', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'scguns:gun_magazine', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_top_internal_1: 'scguns:treated_brass_gun_frame', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'antarchy:uranium_ingot', gun_grip: 'scguns:gun_grip', gun_magazine: 'minecraft:iron_ingot' }],
    ['scguns:guns/drill_from_gun_bench', 'scguns:drill', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_top_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'scguns:gun_barrel', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/drill_conversion_from_gun_bench', 'scguns:drill_conversion', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'scguns:gun_barrel', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/earths_corpse_from_gun_bench', 'scguns:earths_corpse', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'antarchy:primordial_scute', gun_top_internal_1: 'scguns:scorched_ingot', gun_top_internal_2: 'scguns:scorched_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'alexscaves:tectonic_shard', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/echoes_2_from_gun_bench', 'scguns:echoes_2', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:sculk_sensor', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_top_internal_1: 'minecraft:echo_shard', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'scguns:heavy_gun_barrel', gun_barrel_2: 'scguns:gun_barrel', gun_top_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/empty_blasphemy_from_gun_bench', 'scguns:empty_blasphemy', { gun_internal_1: '#minecraft:wool', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'oritech:nickel_ingot', gun_barrel_1: 'oritech:nickel_ingot', gun_barrel_2: 'scguns:gun_barrel', gun_top_barrel_1: 'minecraft:iron_ingot' }],
    ['scguns:guns/exo_suit_boots_from_gun_bench', 'scguns:exo_suit_boots', { gun_internal_1: 'oritech:nickel_ingot', gun_barrel_1: 'oritech:nickel_ingot', gun_grip: 'oritech:nickel_ingot', gun_magazine: 'oritech:nickel_ingot' }],
    ['scguns:guns/exo_suit_chestplate_from_gun_bench', 'scguns:exo_suit_chestplate', { gun_internal_1: 'oritech:nickel_ingot', gun_top_internal_1: 'oritech:nickel_ingot', gun_barrel_1: 'oritech:nickel_ingot', gun_top_barrel_1: 'oritech:nickel_ingot', gun_internal_2: 'oritech:nickel_ingot', gun_grip: 'oritech:nickel_ingot', gun_magazine: 'oritech:nickel_ingot' }],
    ['scguns:guns/exo_suit_helmet_from_gun_bench', 'scguns:exo_suit_helmet', { gun_internal_1: 'oritech:nickel_ingot', gun_top_internal_1: 'oritech:nickel_ingot', gun_top_internal_2: 'oritech:nickel_ingot', gun_barrel_1: 'oritech:nickel_ingot', gun_top_barrel_1: 'oritech:nickel_ingot' }],
    ['scguns:guns/exo_suit_leggings_from_gun_bench', 'scguns:exo_suit_leggings', { gun_internal_1: 'oritech:nickel_ingot', gun_top_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'oritech:nickel_ingot', gun_barrel_1: 'oritech:nickel_ingot', gun_top_barrel_1: 'oritech:nickel_ingot', gun_grip: 'oritech:nickel_ingot', gun_magazine: 'oritech:nickel_ingot' }],
    ['scguns:guns/fencer_carabine_from_gun_bench', 'scguns:fencer_carabine', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_barrel_2: 'scguns:stone_gun_barrel', gun_barrel_1: 'scguns:stone_gun_barrel', gun_grip: 'scguns:wooden_stock', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/fencer_thumper_from_gun_bench', 'scguns:fencer_thumper', { gun_internal_1: 'scguns:firing_unit', gun_top_internal_1: 'oritech:nickel_ingot', gun_internal_2: 'scguns:gun_magazine', gun_barrel_1: 'scguns:stone_gun_barrel', gun_barrel_2: 'scguns:stone_gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/flayed_god_from_gun_bench', 'scguns:flayed_god', { gun_internal_1: 'scguns:energy_core', gun_internal_2: 'antarchy:king_scale', gun_top_internal_1: 'scguns:gun_grip', gun_top_internal_2: 'scguns:scorched_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:scorched_ingot', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'iceandfire:wither_shard', gun_magazine: 'scguns:scorched_ingot' }],
    ['scguns:guns/flintlock_pistol_from_gun_bench', 'scguns:flintlock_pistol', { gun_internal_1: 'minecraft:flint', gun_internal_2: 'minecraft:cobblestone', gun_barrel_1: 'scguns:stone_gun_barrel', gun_grip: '#minecraft:planks', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/floundergat_from_gun_bench', 'scguns:floundergat', { gun_internal_1: 'minecraft:heart_of_the_sea', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'oritech:nickel_ingot', gun_top_barrel_1: 'scguns:heavy_gun_barrel', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_2: 'scguns:heavy_gun_barrel', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/forlorn_hope_from_gun_bench', 'scguns:forlorn_hope', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:sculk_sensor', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_top_internal_1: 'minecraft:echo_shard', gun_barrel_1: 'scguns:gun_barrel', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/freyr_from_gun_bench', 'scguns:freyr', { gun_internal_1: 'minecraft:blaze_rod', gun_top_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'oritech:nickel_ingot', gun_barrel_1: 'minecraft:crimson_planks', gun_barrel_2: 'scguns:gun_barrel', gun_top_barrel_1: 'scguns:gun_magazine', gun_grip: 'scguns:gun_grip', gun_magazine: 'minecraft:crimson_planks' }],
    ['scguns:guns/gale_from_gun_bench', 'scguns:gale', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'antarchy:stratoshark_fin', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:gun_barrel', gun_magazine: 'scguns:empty_tank' }],
    ['scguns:guns/gattaler_from_gun_bench', 'scguns:gattaler', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'scguns:gun_grip', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_2: 'scguns:gun_barrel', gun_top_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:treated_brass_gun_frame', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/gauss_rifle_from_gun_bench', 'scguns:gauss_rifle', { gun_internal_1: 'scguns:plasma_core', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:uranium_ingot', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'alexscaves:scarlet_neodymium_ingot', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/grandle_from_gun_bench', 'scguns:grandle', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'antarchy:uranium_ingot', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: '#minecraft:planks', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/grandle_og_from_gun_bench', 'scguns:grandle_og', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'antarchy:uranium_ingot', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:gun_barrel', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/greaser_smg_from_gun_bench', 'scguns:greaser_smg', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: '#minecraft:planks', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/gyrojet_pistol_from_gun_bench', 'scguns:gyrojet_pistol', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'minecraft:iron_ingot', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: '#minecraft:planks', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/hammer_gl_from_gun_bench', 'scguns:hammer_gl', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:uranium_ingot', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'minecraft:iron_ingot', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/handcannon_from_gun_bench', 'scguns:handcannon', { gun_internal_1: 'minecraft:flint', gun_internal_2: 'minecraft:cobblestone', gun_top_barrel_1: 'minecraft:stone', gun_barrel_1: 'scguns:stone_gun_barrel', gun_grip: '#minecraft:planks', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/homemaker_from_gun_bench', 'scguns:homemaker', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/howler_from_gun_bench', 'scguns:howler', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:uranium_ingot', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'antarchy:uranium_ingot', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/howler_conversion_from_gun_bench', 'scguns:howler_conversion', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:uranium_ingot', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'antarchy:uranium_ingot', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/hullbreaker_from_gun_bench', 'scguns:hullbreaker', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'scguns:gun_grip', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'minecraft:iron_block', gun_barrel_1: 'minecraft:iron_block', gun_magazine: 'minecraft:iron_ingot', gun_grip: 'scguns:iron_gun_frame' }],
    ['scguns:guns/hyperbaria_from_gun_bench', 'scguns:hyperbaria', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'abyssal_decor:seabrass_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'scguns:gun_magazine', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/inertial_from_gun_bench', 'scguns:inertial', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/inquisitor_from_gun_bench', 'scguns:inquisitor', { gun_internal_1: 'scguns:empty_tank', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/iron_javeline_from_gun_bench', 'scguns:iron_javelin', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: '#minecraft:planks', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/iron_spear_from_gun_bench', 'scguns:iron_spear', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: '#minecraft:planks', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/jackhammer_from_gun_bench', 'scguns:jackhammer', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:uranium_ingot', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: '#minecraft:planks', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/jr_wristbreaker_from_gun_bench', 'scguns:jr_wristbreaker', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:uranium_ingot', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/kalaskah_from_gun_bench', 'scguns:kalaskah', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_magazine', gun_barrel_1: '#minecraft:planks', gun_magazine: 'scguns:gun_grip' }],
    ['scguns:guns/killer_23_from_gun_bench', 'scguns:killer_23', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/krauser_from_gun_bench', 'scguns:krauser', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'antarchy:titanium_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/laser_musket_from_gun_bench', 'scguns:laser_musket', { gun_internal_1: 'scguns:energy_core', gun_internal_2: 'minecraft:smooth_stone', gun_barrel_2: 'scguns:stone_gun_barrel', gun_barrel_1: 'scguns:stone_gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/libertas_from_gun_bench', 'scguns:libertas', { gun_internal_1: 'scguns:plasma_core', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:uranium_ingot', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:plasma_core', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_top_barrel_1: '#minecraft:planks', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/llr_director_from_gun_bench', 'scguns:llr_director', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:copper_ingot', gun_top_internal_2: 'scguns:copper_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: '#minecraft:planks', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/lockewood_from_gun_bench', 'scguns:lockewood', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: '#minecraft:planks', gun_top_barrel_1: 'antarchy:titanium_ingot', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/locust_from_gun_bench', 'scguns:locust', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'antarchy:hercules_horn', gun_top_internal_1: 'scguns:scorched_ingot', gun_top_internal_2: 'scguns:scorched_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/lone_wonder_from_gun_bench', 'scguns:lone_wonder', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'scguns:treated_brass_gun_frame', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_barrel_2: 'oritech:nickel_ingot', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'iceandfire:lightning_dragon_blood', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/longarm_from_gun_bench', 'scguns:longarm', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'scguns:gun_magazine', gun_top_internal_2: 'oritech:nickel_ingot', gun_barrel_1: 'scguns:stone_gun_barrel', gun_grip: 'scguns:gun_grip' }],
    ['scguns:guns/m22_waltz_from_gun_bench', 'scguns:m22_waltz', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'antarchy:uranium_ingot', gun_top_internal_1: 'antarchy:uranium_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/m3_carabine_from_gun_bench', 'scguns:m3_carabine', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: '#minecraft:planks', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/m3_marksman_from_gun_bench', 'scguns:m3_marksman', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: '#minecraft:planks', gun_top_barrel_1: 'minecraft:iron_ingot', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/mak_mkii_from_gun_bench', 'scguns:mak_mkii', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:gun_barrel', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/makeshift_rifle_from_gun_bench', 'scguns:makeshift_rifle', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:copper_ingot', gun_top_internal_2: 'scguns:copper_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: '#minecraft:planks', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/mangalitsa_from_gun_bench', 'scguns:mangalitsa', { gun_internal_1: 'alexscaves:tectonic_shard', gun_top_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'oritech:nickel_ingot', gun_barrel_1: 'minecraft:crimson_planks', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'scguns:gun_magazine', gun_grip: 'scguns:gun_grip', gun_magazine: 'minecraft:crimson_planks' }],
    ['scguns:guns/marlin_from_gun_bench', 'scguns:marlin', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:heart_of_the_sea', gun_top_internal_1: 'abyssal_decor:seabrass_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: '#minecraft:planks', gun_magazine: 'minecraft:prismarine_shard' }],
    ['scguns:guns/mas_55_from_gun_bench', 'scguns:mas_55', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: '#minecraft:planks', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/mas_peddler_from_gun_bench', 'scguns:mas_peddler', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'scguns:gun_magazine', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/micina_from_gun_bench', 'scguns:micina', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'scguns:gun_magazine', gun_top_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'antarchy:titanium_ingot' }],
    ['scguns:guns/minksy_from_gun_bench', 'scguns:minksy', { gun_internal_1: 'scguns:energy_core', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'antarchy:titanium_ingot', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/mk43_rifle', 'scguns:mk43_rifle', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: '#minecraft:planks', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/mokova_from_gun_bench', 'scguns:mokova', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'minecraft:iron_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_barrel_2: '#minecraft:wool', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/musket_from_gun_bench', 'scguns:musket', { gun_internal_1: 'minecraft:flint', gun_internal_2: 'minecraft:cobblestone', gun_barrel_2: 'scguns:stone_gun_barrel', gun_barrel_1: 'scguns:stone_gun_barrel', gun_grip: '#minecraft:planks', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/nailer_from_gun_bench', 'scguns:nailer', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'antarchy:titanium_ingot', gun_top_internal_1: 'scguns:empty_tank', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'alexscaves:metal_rebar', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/nervepinch_from_gun_bench', 'scguns:nervepinch', { gun_internal_1: 'iceandfire:dragonsteel_fire_ingot', gun_internal_2: 'antarchy:nightmare_scale', gun_top_internal_1: 'scguns:scorched_ingot', gun_top_internal_2: 'scguns:scorched_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/newborn_cyst_from_gun_bench', 'scguns:newborn_cyst', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'scguns:gun_magazine', gun_top_internal_2: 'scguns:scorched_ingot', gun_top_internal_1: 'scguns:scorched_gun_frame', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'antarchy:jerry_nucleus' }],
    ['scguns:guns/niami_from_gun_bench', 'scguns:niami', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'antarchy:uranium_ingot', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'iceandfire:stymphalian_bird_feather', gun_magazine: 'scguns:empty_tank' }],
    ['scguns:guns/osgood_50_from_gun_bench', 'scguns:osgood_50', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'scguns:gun_magazine', gun_top_internal_2: 'antarchy:uranium_ingot', gun_top_internal_1: 'antarchy:uranium_ingot', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'minecraft:iron_ingot' }],
    ['scguns:guns/pax_from_gun_bench', 'scguns:pax', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'scguns:gun_magazine', gun_top_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/plasgun_from_gun_bench', 'scguns:plasgun', { gun_internal_1: 'scguns:plasma_core', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: '#minecraft:planks', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/plasmabuss_from_gun_bench', 'scguns:plasmabuss', { gun_internal_1: 'scguns:plasma_core', gun_internal_2: 'minecraft:smooth_stone', gun_barrel_2: 'scguns:stone_gun_barrel', gun_barrel_1: 'scguns:stone_gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/prima_materia_from_gun_bench', 'scguns:prima_materia', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'scguns:scorched_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'scguns:scorched_ingot', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/prush_gun_from_gun_bench', 'scguns:prush_gun', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: '#minecraft:planks', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/pulsar_from_gun_bench', 'scguns:pulsar', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'minecraft:redstone', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: '#minecraft:planks', gun_grip: 'scguns:gun_grip' }],
    ['scguns:guns/pyroclastic_flow_from_gun_bench', 'scguns:pyroclastic_flow', { gun_internal_1: 'alexscaves:tectonic_shard', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'oritech:nickel_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'alexscaves:tectonic_shard', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/railworker_from_gun_bench', 'scguns:railworker', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'alexscaves:rusty_rebar', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'scguns:gun_magazine', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:empty_tank' }],
    ['scguns:guns/rat_king_and_queen_from_gun_bench', 'scguns:rat_king_and_queen', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'antarchy:queen_scale', gun_top_internal_2: 'scguns:scorched_gun_frame', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'antarchy:king_scale', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/ray_gun_from_gun_bench', 'scguns:raygun', { gun_internal_1: 'scguns:plasma_core', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'oritech:nickel_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip' }],
    ['scguns:guns/red_raydar_from_gun_bench', 'scguns:red_raydar', { gun_internal_1: 'scguns:empty_tank', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: '#minecraft:planks', gun_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/repeating_musket_from_gun_bench', 'scguns:repeating_musket', { gun_internal_1: 'minecraft:flint', gun_internal_2: 'minecraft:cobblestone', gun_top_internal_1: 'scguns:firing_unit', gun_top_internal_2: 'oritech:nickel_ingot', gun_barrel_2: 'scguns:stone_gun_barrel', gun_barrel_1: 'scguns:stone_gun_barrel', gun_grip: '#minecraft:planks', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/rg_jigsaw_from_gun_bench', 'scguns:rg_jigsaw', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_magazine', gun_barrel_1: '#minecraft:planks', gun_magazine: 'scguns:gun_grip' }],
    ['scguns:guns/rocket_rifle_from_gun_bench', 'scguns:rocket_rifle', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/rusty_gnat_from_gun_bench', 'scguns:rusty_gnat', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:copper_ingot', gun_top_internal_2: 'scguns:copper_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: '#minecraft:planks', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/saketini_from_gun_bench', 'scguns:saketini', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: '#minecraft:planks', gun_barrel_2: 'scguns:gun_barrel', gun_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/saketini_ironport_from_gun_bench', 'scguns:saketini_ironport', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: '#minecraft:planks', gun_barrel_2: 'scguns:gun_barrel', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'scguns:gun_magazine', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/scrap_sidearm_from_gun_bench', 'scguns:scrapper', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'minecraft:copper_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'scguns:gun_magazine', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/scratches_from_gun_bench', 'scguns:scratches', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'scguns:treated_brass_gun_frame', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_2: 'scguns:gun_barrel', gun_top_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:empty_tank' }],
    ['scguns:guns/sculk_resonator_from_gun_bench', 'scguns:sculk_resonator', { gun_internal_1: 'scguns:plasma_core', gun_internal_2: 'minecraft:sculk_sensor', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_top_internal_1: 'minecraft:echo_shard', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/sequoia_from_gun_bench', 'scguns:sequoia', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'scguns:gun_magazine', gun_top_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'abyssal_decor:seabrass_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'antarchy:kraken_tooth' }],
    ['scguns:guns/shard_culler_from_gun_bench', 'scguns:shard_culler', { gun_internal_1: 'scguns:energy_core', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'scguns:gun_grip', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:diamond_steel_gun_frame', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_1: 'antarchy:blood_crystal_shard', gun_magazine: 'scguns:diamond_steel_gun_frame' }],
    ['scguns:guns/shellurker_from_gun_bench', 'scguns:shellurker', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'scguns:diamond_steel_gun_frame', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'minecraft:shulker_shell', gun_top_barrel_2: 'minecraft:shulker_shell', gun_magazine: 'minecraft:shulker_shell' }],
    ['scguns:guns/shotgun_turret_from_gun_bench', 'scguns:shotgun_turret', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_grip: 'scguns:turret_platform', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'oritech:nickel_ingot', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_magazine: 'minecraft:iron_ingot' }],
    ['scguns:guns/sniper_turret_from_gun_bench', 'scguns:sniper_turret', { gun_internal_1: 'scguns:firing_unit', gun_top_internal_1: 'minecraft:iron_ingot', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_grip: 'scguns:turret_platform', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'oritech:nickel_ingot', gun_barrel_2: 'scguns:gun_barrel', gun_magazine: 'minecraft:iron_ingot' }],
    ['scguns:guns/soul_drummer_from_gun_bench', 'scguns:soul_drummer', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'antarchy:titanium_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/spirulida_from_gun_bench', 'scguns:spirulida', { gun_internal_1: 'minecraft:heart_of_the_sea', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'abyssal_decor:seabrass_ingot', gun_top_barrel_1: 'scguns:gun_barrel', gun_barrel_1: 'scguns:gun_barrel', gun_top_barrel_2: 'scguns:gun_barrel', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/spitfire_from_gun_bench', 'scguns:spitfire', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'scguns:gun_grip', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:treated_brass_gun_frame', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_magazine: 'scguns:empty_tank' }],
    ['scguns:guns/sterilizer_from_gun_bench', 'scguns:sterilizer', { gun_internal_1: 'scguns:plasma_core', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'scguns:scorched_ingot', gun_top_internal_2: 'scguns:scorched_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_magazine', gun_barrel_1: 'alexscaves:fissile_core', gun_magazine: 'scguns:gun_grip' }],
    ['scguns:guns/stigg_from_gun_bench', 'scguns:stigg', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: '#minecraft:planks', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/stiletto_from_gun_bench', 'scguns:stiletto', { gun_internal_1: 'minecraft:iron_ingot', gun_internal_2: 'scguns:firing_unit', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_barrel_1: 'minecraft:iron_ingot', gun_magazine: 'scguns:gun_grip' }],
    ['scguns:guns/terra_incognita_from_gun_bench', 'scguns:terra_incognita', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'scguns:scorched_ingot', gun_top_internal_2: 'scguns:scorched_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_2: 'scguns:heavy_gun_barrel', gun_magazine: 'antarchy:manticore_wing' }],
    ['scguns:guns/teslock_rifle_from_gun_bench', 'scguns:teslock_rifle', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:smooth_stone', gun_top_internal_2: 'minecraft:iron_ingot', gun_barrel_2: 'oritech:nickel_ingot', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'minecraft:copper_ingot', gun_top_barrel_1: 'minecraft:redstone', gun_magazine: 'abyssal_decor:seabrass_ingot' }],
    ['scguns:guns/thunderhead_from_gun_bench', 'scguns:thunderhead', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'scguns:gun_grip', gun_top_internal_2: 'scguns:treated_brass_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_2: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:treated_brass_gun_frame', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/tl_runner_from_gun_bench', 'scguns:tl_runner', { gun_internal_1: 'scguns:plasma_core', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'minecraft:iron_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/trenchur_from_gun_bench', 'scguns:trenchur', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'scguns:gun_magazine', gun_top_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'minecraft:iron_ingot' }],
    ['scguns:guns/triquetra_from_gun_bench', 'scguns:triquetra', { gun_internal_1: '#minecraft:planks', gun_internal_2: 'scguns:firing_unit', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'minecraft:iron_ingot', gun_magazine: 'scguns:empty_tank' }],
    ['scguns:guns/trotters_from_gun_bench', 'scguns:trotters', { gun_internal_1: 'alexscaves:tectonic_shard', gun_top_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'oritech:nickel_ingot', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_barrel_2: 'scguns:gun_barrel', gun_top_barrel_1: 'minecraft:gold_ingot', gun_grip: 'scguns:gun_grip', gun_magazine: 'minecraft:crimson_planks' }],
    ['scguns:guns/truant_from_gun_bench', 'scguns:truant', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'scguns:gun_magazine', gun_top_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'scguns:diamond_steel_gun_frame', gun_grip: 'scguns:gun_grip', gun_magazine: 'antarchy:titanium_ingot' }],
    ['scguns:guns/turnpike_from_gun_bench', 'scguns:turnpike', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/ultra_knight_hawk_from_gun_bench', 'scguns:ultra_knight_hawk', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'iceandfire:silver_ingot', gun_top_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_barrel_1: 'iceandfire:silver_ingot', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip' }],
    ['scguns:guns/umax_pistol_from_gun_bench', 'scguns:umax_pistol', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_2: 'minecraft:copper_ingot', gun_top_internal_1: 'minecraft:copper_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:empty_tank' }],
    ['scguns:guns/uppercut_from_gun_bench', 'scguns:uppercut', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_top_internal_1: 'antarchy:titanium_ingot', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/valora_from_gun_bench', 'scguns:valora', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'antarchy:titanium_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_barrel_1: 'scguns:advanced_silencer', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/venturi_from_gun_bench', 'scguns:venturi', { gun_internal_1: '#minecraft:planks', gun_internal_2: 'scguns:firing_unit', gun_top_internal_1: 'minecraft:iron_ingot', gun_top_internal_2: 'scguns:iron_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'oritech:nickel_ingot', gun_magazine: 'scguns:empty_tank' }],
    ['scguns:guns/vulcanic_repeater_from_gun_bench', 'scguns:vulcanic_repeater', { gun_internal_1: 'minecraft:blaze_rod', gun_top_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'oritech:nickel_ingot', gun_barrel_1: 'scguns:gun_barrel', gun_barrel_2: 'scguns:gun_barrel', gun_top_barrel_1: 'minecraft:crimson_planks', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/waltz_conversion_from_gun_bench', 'scguns:waltz_conversion', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_2: 'antarchy:uranium_ingot', gun_top_internal_1: 'antarchy:uranium_ingot', gun_barrel_2: 'scguns:gun_barrel', gun_barrel_1: 'scguns:energy_core', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/weevil_from_gun_bench', 'scguns:weevil', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'scguns:gun_grip', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:diamond_steel_gun_frame', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: 'minecraft:shulker_shell', gun_top_barrel_2: 'minecraft:shulker_shell', gun_magazine: 'minecraft:shulker_shell' }],
    ['scguns:guns/whispers_from_gun_bench', 'scguns:whispers', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'alexscaves:shadow_silk', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_top_internal_1: 'minecraft:echo_shard', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'scguns:gun_magazine' }],
    ['scguns:guns/whistler_from_gun_bench', 'scguns:whistler', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'minecraft:copper_ingot', gun_top_internal_2: 'scguns:copper_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_top_barrel_1: '#minecraft:planks', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/whizzbanger_from_gun_bench', 'scguns:whizzbanger', { gun_internal_1: 'minecraft:stick', gun_top_internal_1: 'minecraft:iron_ingot', gun_internal_2: 'scguns:firing_unit', gun_barrel_1: 'minecraft:iron_ingot', gun_magazine: 'scguns:vertical_grip' }],
    ['scguns:guns/winnie_from_gun_bench', 'scguns:winnie', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: '#minecraft:planks', gun_barrel_2: 'scguns:gun_barrel', gun_barrel_1: 'minecraft:iron_ingot', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/winnie_millend_from_gun_bench', 'scguns:winnie_millend', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'oritech:nickel_ingot', gun_top_internal_1: '#minecraft:planks', gun_barrel_2: 'scguns:gun_barrel', gun_barrel_1: 'scguns:gun_barrel', gun_top_internal_2: 'minecraft:iron_ingot', gun_grip: 'scguns:gun_grip', gun_magazine: '#minecraft:planks' }],
    ['scguns:guns/zilk_45_from_gun_bench', 'scguns:zilk_45', { gun_internal_1: 'scguns:rapid_firing_unit', gun_internal_2: 'minecraft:iron_ingot', gun_top_internal_1: 'antarchy:titanium_ingot', gun_top_internal_2: 'scguns:diamond_steel_gun_frame', gun_barrel_2: 'scguns:gun_barrel', gun_grip: 'scguns:gun_grip', gun_barrel_1: 'minecraft:iron_ingot', gun_top_barrel_1: 'antarchy:titanium_ingot', gun_magazine: 'scguns:gun_magazine' }],
    ['netherexp:pump_charge_shotgun', 'netherexp:pump_charge_shotgun', { gun_internal_1: 'scguns:firing_unit', gun_internal_2: 'minecraft:netherite_ingot', gun_top_internal_1: 'minecraft:blaze_rod', gun_top_internal_2: 'scguns:scorched_gun_frame', gun_barrel_1: 'scguns:heavy_gun_barrel', gun_barrel_2: 'scguns:heavy_gun_barrel', gun_grip: 'scguns:gun_grip', gun_magazine: 'netherexp:wraithing_flesh' }],
    ['orbital_railgun:orbital_railgun', 'orbital_railgun:orbital_railgun', {
      gun_top_internal_1: 'marvel:adamantium_ingot',
      gun_top_internal_2: 'alexscaves:fissile_core',
      gun_top_barrel_1: 'antarchy:blood_crystal_shard',
      gun_top_barrel_2: 'antarchy:blood_crystal_shard',
      gun_internal_1: 'oritech:prometheum_ingot',
      gun_internal_2: 'alexscaves:uranium_rod',
      gun_barrel_1: 'antarchy:nightmare_scale',
      gun_barrel_2: 'oritech:prometheum_ingot',
      gun_grip: 'marvel:adamantium_ingot',
      gun_magazine: 'marvel:adamantium_ingot'
    }]
  ]
  gunBench.forEach(([id, result, slots]) => {
    event.remove({ id: id })
    const ingredients = {}
    Object.keys(slots).forEach(slot => {
      const item = slots[slot]
      ingredients[slot] = item.startsWith('#') ? { tag: item.substring(1) } : { item: item }
    })
    event.custom({ type: 'scguns:gun_bench', ingredients: ingredients, result: { id: result, count: 1 } })
      .id(`kubejs:scguns/gun_bench/${result.split(':')[1]}`)
  })
})

const $ScgunsMobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')
const $ScgunsBuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
const $ScgunsResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

const scgunsGunUsed = source => {
  const shooter = source.actual
  const bullet = source.immediate
  if (!shooter || !bullet || bullet == shooter || !shooter.isPlayer()) return null
  return String(shooter.mainHandItem.id)
}

const scgunsSourcedEffect = (target, effectId, ticks, source) => {
  const holder = $ScgunsBuiltInRegistries.MOB_EFFECT.getHolder($ScgunsResourceLocation.parse(effectId)).orElse(null)
  if (holder) target.addEffect(new $ScgunsMobEffectInstance(holder, ticks, 0), source)
}

EntityEvents.beforeHurt(event => {
  if (scgunsGunUsed(event.source) == 'scguns:ultra_knight_hawk' && event.entity.isInvertedHealAndHarm()) {
    event.setDamage(event.damage * 1.5)
  }
})

EntityEvents.afterHurt(event => {
  const gun = scgunsGunUsed(event.source)
  if (!gun) return
  const target = event.entity
  const shooter = event.source.actual
  if (gun == 'scguns:rat_king_and_queen') {
    const roll = Math.random()
    if (roll < 0.08) scgunsSourcedEffect(target, 'antarchy:commanded', 300, shooter)
    else if (roll < 0.16) scgunsSourcedEffect(target, 'anthology:dilated', 60, shooter)
  } else if (gun == 'scguns:astella') {
    if (Math.random() < 0.15) {
      const bolt = target.level.createEntity('minecraft:lightning_bolt')
      bolt.setPosition(target.x, target.y, target.z)
      bolt.spawn()
    }
  } else if (gun == 'scguns:locust') {
    shooter.heal(event.damage * 0.1)
  }
})

EntityEvents.death(event => {
  if (scgunsGunUsed(event.source) != 'scguns:newborn_cyst' || Math.random() >= 0.2) return
  const dead = event.entity
  const jerry = dead.level.createEntity('antarchy:jerry')
  jerry.setPosition(dead.x, dead.y, dead.z)
  jerry.spawn()
  scgunsSourcedEffect(jerry, 'antarchy:commanded', 600, event.source.actual)
  dead.server.scheduleInTicks(600, () => {
    if (jerry.isAlive()) jerry.discard()
  })
})
