ServerEvents.recipes(event => {
  const value = (id, matter) => event.custom(Replication.matterValueForItem(id, matter))

  value('minecraft:amethyst_cluster', { earth: 4, precious: 16 })
  value('minecraft:small_amethyst_bud', { earth: 1, precious: 4 })
  value('minecraft:medium_amethyst_bud', { earth: 2, precious: 8 })
  value('minecraft:large_amethyst_bud', { earth: 4, precious: 16 })
  value('minecraft:cinnabar', { earth: 2, metallic: 2 })
  value('minecraft:sulfur_spike', { earth: 1, nether: 1 })
  value('minecraft:resin_clump', { organic: 1 })
  value('minecraft:pale_moss_block', { earth: 2, organic: 2 })
  value('minecraft:cactus_flower', { organic: 1 })
  value('minecraft:wildflowers', { organic: 1 })
  value('minecraft:red_shrub', { organic: 1 })
  value('minecraft:shelf_mushroom', { organic: 1 })
  value('minecraft:copper_golem_statue', { metallic: 18, precious: 18 })
  value('minecraft:copper_horse_armor', { metallic: 14, precious: 14 })
  value('minecraft:copper_nautilus_armor', { metallic: 14, precious: 14 })
  value('minecraft:iron_nautilus_armor', { metallic: 63 })
  value('minecraft:golden_nautilus_armor', { metallic: 63, precious: 63 })
  value('minecraft:diamond_nautilus_armor', { precious: 252 })
  value('minecraft:breeze_rod', { living: 2, quantum: 2 })
  value('minecraft:experience_bottle', { living: 4 })
  value('minecraft:gilded_blackstone', { earth: 2, nether: 2, metallic: 4, precious: 4 })
  value('minecraft:shroomlight', { earth: 8, organic: 8, nether: 12, precious: 12 })

  value('pastel:moonstone_shard', { earth: 1, precious: 4, quantum: 4 })
  value('pastel:moonstone_cluster', { earth: 4, precious: 16, quantum: 16 })
  value('pastel:citrine_shard', { earth: 1, precious: 4 })
  value('pastel:onyx_shard', { earth: 1, precious: 4 })
  value('pastel:topaz_shard', { earth: 1, precious: 4 })
  value('pastel:citrine_cluster', { earth: 1, precious: 4 })
  value('pastel:onyx_cluster', { earth: 1, precious: 4 })
  value('pastel:topaz_cluster', { earth: 1, precious: 4 })
  value('pastel:small_moonstone_bud', { earth: 2, precious: 8, quantum: 8 })
  value('pastel:medium_moonstone_bud', { earth: 3, precious: 12, quantum: 12 })
  value('pastel:large_moonstone_bud', { earth: 4, precious: 16, quantum: 16 })
  value('pastel:bismuth_crystal', { metallic: 5, quantum: 5, precious: 9 })
  value('pastel:bismuth_flake', { metallic: 1.25, quantum: 1.25, precious: 2.25 })
  value('pastel:bismuth_cluster', { metallic: 20, quantum: 20, precious: 36 })
  value('pastel:small_bismuth_bud', { metallic: 1.25, quantum: 1.25, precious: 2.25 })
  value('pastel:large_bismuth_bud', { metallic: 1.25, quantum: 1.25, precious: 2.25 })
  value('pastel:large_citrine_bud', { earth: 4, precious: 16 })
  value('pastel:medium_citrine_bud', { earth: 3, precious: 12 })
  value('pastel:small_citrine_bud', { earth: 2, precious: 8 })
  value('pastel:large_onyx_bud', { earth: 4, precious: 16 })
  value('pastel:medium_onyx_bud', { earth: 3, precious: 12 })
  value('pastel:small_onyx_bud', { earth: 2, precious: 8 })
  value('pastel:large_topaz_bud', { earth: 4, precious: 16 })
  value('pastel:medium_topaz_bud', { earth: 3, precious: 12 })
  value('pastel:small_topaz_bud', { earth: 2, precious: 8 })

  const pastelGemOres = [
    'amethyst_ore', 'deepslate_amethyst_ore', 'blackslag_amethyst_ore',
    'citrine_ore', 'deepslate_citrine_ore', 'blackslag_citrine_ore',
    'moonstone_ore', 'deepslate_moonstone_ore', 'blackslag_moonstone_ore',
    'onyx_ore', 'deepslate_onyx_ore', 'blackslag_onyx_ore',
    'topaz_ore', 'deepslate_topaz_ore', 'blackslag_topaz_ore'
  ]
  pastelGemOres.forEach(id => {
    if (id.includes('amethyst')) value(`pastel:${id}`, { earth: 1, precious: 4 })
    else if (id.includes('moonstone')) value(`pastel:${id}`, { earth: 1, precious: 4, quantum: 4 })
    else value(`pastel:${id}`, { earth: 1, precious: 4 })
  })
  ;[
    'aloe_leaf', 'blood_orchid_petal', 'four_leaf_clover',
    'hibernating_jade_vine_bulb', 'jadeite_lotus_flower', 'prickly_bayleaf',
    'sawblade_holly_berry'
  ].forEach(id => value(`pastel:${id}`, { organic: 1 }))

  const commonPastelHeads = [
    'allay', 'armadillo', 'bat', 'bee', 'bogged', 'camel', 'cat', 'chicken',
    'cow', 'dolphin', 'donkey', 'drowned', 'endermite', 'frog_cold',
    'frog_temperate', 'frog_warm', 'goat', 'horse', 'lizard_black',
    'lizard_blue', 'lizard_brown', 'lizard_cyan', 'lizard_gray', 'lizard_green',
    'lizard_light_blue', 'lizard_light_gray', 'lizard_lime', 'lizard_magenta',
    'lizard_orange', 'lizard_pink', 'lizard_purple', 'lizard_red', 'lizard_white',
    'lizard_yellow', 'llama', 'ocelot', 'panda', 'pig', 'pufferfish', 'rabbit',
    'salmon', 'sheep', 'silverfish', 'sniffer', 'spider', 'squid', 'tadpole',
    'tropical_fish', 'turtle', 'villager', 'wandering_trader', 'wolf'
  ]
  commonPastelHeads.forEach(mob => value(`pastel:${mob}_head`, { living: 2 }))

  const rarePastelHeads = [
    'blaze', 'breeze', 'cave_spider', 'elder_guardian', 'enderman', 'evoker',
    'guardian', 'hoglin', 'iron_golem', 'kindling', 'piglin_brute', 'pillager',
    'polar_bear', 'ravager', 'shulker', 'slime', 'vex', 'vindicator'
  ]
  rarePastelHeads.forEach(mob => value(`pastel:${mob}_head`, { living: 9 }))

  const bossPastelHeads = ['warden', 'wither']
  bossPastelHeads.forEach(mob => value(`pastel:${mob}_head`, { living: 18 }))

  const seedMany = (ids, matter) => ids.forEach(id => value(`antarchy:${id}`, matter))

  seedMany(['dream_sand'], { earth: 4, ender: 4 })
  seedMany(['nyxite_spike'], { earth: 4, ender: 4 })
  seedMany(['shellstone'], { earth: 1 })
  seedMany(['amber_moss_block', 'blush_moss_block', 'umbral_moss_block'],
    { earth: 2, organic: 4, living: 2 })
  seedMany(['biomite'], { organic: 4, living: 4, quantum: 4 })
  seedMany(['biowart'], { organic: 4, nether: 4 })
  seedMany(['typhonite'], { earth: 1 })
  seedMany([
    'amber_lichen', 'camellia', 'duskbell', 'glimmering_reed', 'glowcap_mushroom',
    'pink_milkweed', 'orange_milkweed', 'lotus', 'verdant_roots', 'whirlflower', 'peach', 'broodfruit',
    'corn', 'corn_seeds', 'nadir_fern', 'nadir_roots', 'spiraling_vines', 'hanging_creeproots',
    'royal_leaves', 'royal_flowering_leaves', 'star_coral',
    'dead_star_coral', 'star_coral_fan', 'dead_star_coral_fan', 'giant_lily_pad',
    'biowart_tendrils'
  ], { organic: 1 })
  seedMany(['creepvine', 'gorevine', 'hushweed', 'molting_vines'], { organic: 4, nether: 4 })
  seedMany(['black_truffalo_tuft', 'blue_truffalo_tuft',
    'brown_truffalo_tuft', 'cyan_truffalo_tuft', 'gray_truffalo_tuft',
    'green_truffalo_tuft', 'light_blue_truffalo_tuft', 'light_gray_truffalo_tuft',
    'lime_truffalo_tuft', 'magenta_truffalo_tuft', 'orange_truffalo_tuft',
    'pink_truffalo_tuft', 'purple_truffalo_tuft', 'red_truffalo_tuft',
    'white_truffalo_tuft', 'yellow_truffalo_tuft'], { organic: 2 })
  value('antarchy:lumen_froglight', { living: 9, organic: 9, quantum: 18 })

  const rareAntarchyDrop = { living: 36, organic: 18, precious: 18 }
  seedMany([
    'basilisk_fang', 'hercules_horn', 'jerry_nucleus', 'lucid_eye',
    'manticore_wing', 'primordial_scute', 'stratoshark_fin',
    'chitin_spike', 'cornea_ear', 'molevore_nose', 'worm_tooth', 'mantis_claw',
    'springbug_leg'
  ], rareAntarchyDrop)
  value('antarchy:nightmare_scale', { living: 1000, organic: 500, precious: 500, quantum: 500 })
  value('antarchy:kraken_tooth', { living: 72, organic: 36, precious: 36, quantum: 18 })
  value('antarchy:kraken_tentacle', { living: 72, organic: 36, precious: 36, quantum: 18 })
  value('antarchy:emperor_scorpion_stinger', { living: 72, organic: 36, precious: 36, nether: 18 })
  value('antarchy:king_scale', { living: 100000, precious: 100000 })
  value('antarchy:queen_scale', { quantum: 100000, precious: 100000 })
  seedMany(['brutalfly_wing', 'flytrap_goo', 'raw_bug_meat', 'cooked_bug_meat',
    'raw_venison', 'chitin'], { living: 2, organic: 4 })
  value('antarchy:eye_of_the_storm', { living: 72, organic: 36, precious: 36, quantum: 18 })
  value('antarchy:lucid_pearl', { living: 18, precious: 18, quantum: 9 })

  const titaniumValue = { metallic: 72, precious: 72, earth: 36, organic: 36 }
  const titaniumNuggetValue = { metallic: 8, precious: 8, earth: 4, organic: 4 }
  value('antarchy:titanium_nugget', titaniumNuggetValue)
  value('antarchy:titanium_ingot', titaniumValue)
  value('antarchy:raw_titanium', titaniumValue)

  const uraniumValue = { metallic: 72, quantum: 72, nether: 72 }
  const uraniumNuggetValue = { metallic: 8, quantum: 8, nether: 8 }
  value('antarchy:uranium_nugget', uraniumNuggetValue)
  value('antarchy:uranium_ingot', uraniumValue)
  value('antarchy:raw_uranium', uraniumValue)

  value('antarchy:antimetal', { metallic: 9, quantum: 9 })
  value('antarchy:polished_antimetal', { metallic: 9, quantum: 9 })

  value('replication:replica_ingot', { metallic: 15, quantum: 15 })
  value('antarchy:blood_crystal_shard', { precious: 4, living: 4 })
  value('antarchy:blood_crystal_cluster', { precious: 16, living: 16 })
  value('antarchy:bluestone', { quantum: 4 })
  value('antarchy:rainbow_sugar', { quantum: 4, precious: 4 })
  value('antarchy:high_fructose_corn_syrup', { organic: 4 })
  value('antarchy:tigers_eye', { precious: 9, quantum: 9 })

  value('alexscaves:amber_curiosity', { earth: 4, precious: 4 })
  value('alexscaves:charred_remnant', { earth: 4, nether: 4 })
  value('alexscaves:acid_bucket', { earth: 4, nether: 4 })
  value('alexscaves:bioluminesscence', { organic: 4, living: 4 })
  value('alexscaves:corrodent_teeth', { living: 9, organic: 4, precious: 4 })
  value('alexscaves:abyssmarine', { earth: 2 })
  value('alexscaves:heavyweight', { earth: 4, metallic: 4 })
  value('alexscaves:immortal_embryo', {
    living: 1000, organic: 500, precious: 500, quantum: 500
  })
  value('alexscaves:heart_of_iron', { metallic: 36, quantum: 36, living: 18 })
  value('alexscaves:enigmatic_engine', { metallic: 1000, quantum: 1000, precious: 500 })
  value('alexscaves:telecore', { quantum: 18, metallic: 9 })
  value('alexscaves:notor_gizmo', { metallic: 4, quantum: 4 })
  value('alexscaves:radon_bottle', { nether: 9, quantum: 9 })
  value('alexscaves:cave_tablet', { earth: 4, precious: 4 })
  value('alexscaves:sea_glass_shards', { earth: 0.25 })
  value('alexscaves:scrap_metal', { earth: 1, metallic: 4 })
  value('alexscaves:ferrouslime_ball', { living: 2, metallic: 4 })
  value('alexscaves:flood_basalt', { earth: 1, nether: 1 })
  value('alexscaves:limestone', { earth: 1 })
  value('alexscaves:pewen_sap', { organic: 1 })
  value('alexscaves:galena', { earth: 1 })
  value('alexscaves:raw_azure_neodymium', { metallic: 3, quantum: 3 })
  value('alexscaves:raw_scarlet_neodymium', { metallic: 3, quantum: 3 })
  value('alexscaves:galena_iron_ore', { earth: 1, metallic: 9 })
  value('alexscaves:coprolith_coal_ore', { earth: 1, nether: 1 })
  value('alexscaves:guanostone_redstone_ore', { earth: 1, quantum: 1 })
  value('alexscaves:radrock_uranium_ore', { metallic: 8, quantum: 8, nether: 8 })
  value('alexscaves:rusty_scrap_metal', { earth: 1, metallic: 4 })
  value('alexscaves:rusty_rebar', { earth: 1, metallic: 4 })
  value('alexscaves:sulfur_dust', { earth: 1, nether: 1 })
  value('alexscaves:uranium_shard', { metallic: 8, quantum: 8, nether: 8 })
  value('alexscaves:uranium', uraniumValue)
  value('alexscaves:marine_snow', { organic: 1 })
  value('alexscaves:gazing_pearl', { precious: 4 })

  const alexOrganicPlants = [
    'archaic_vine', 'curly_fern', 'cycad', 'dusk_anemone', 'fiddlehead',
    'flytrap', 'frostmint', 'giant_sweetberry', 'licoroot', 'licoroot_sprout',
    'licoroot_vine', 'pine_nuts', 'tree_star', 'twilight_anemone', 'underweed',
    'pewen_branch', 'thornwood_branch'
  ]
  alexOrganicPlants.forEach(id => value(`alexscaves:${id}`, { organic: 1 }))
  const alexCommonFood = [
    'dinosaur_chop', 'lanternfish', 'mussel', 'radgill', 'sea_pig',
    'trilocaris_tail', 'tripodfish', 'sweetish_fish_blue', 'sweetish_fish_green',
    'sweetish_fish_pink', 'sweetish_fish_red', 'sweetish_fish_yellow'
  ]
  alexCommonFood.forEach(id => value(`alexscaves:${id}`, { living: 2, organic: 4 }))
  const alexDinosaurEggs = [
    'atlatitan_egg', 'grottoceratops_egg', 'relicheirus_egg',
    'subterranodon_egg', 'vallumraptor_egg'
  ]
  alexDinosaurEggs.forEach(id => value(`alexscaves:${id}`, { living: 9, organic: 9 }))
  value('alexscaves:tremorsaurus_egg', { living: 18, organic: 18, precious: 9 })
  value('alexscaves:dinosaur_pottery_sherd', { earth: 1, precious: 1 })
  value('alexscaves:footprint_pottery_sherd', { earth: 1, precious: 1 })
  value('alexscaves:guardian_pottery_sherd', { earth: 1, precious: 1 })
  value('alexscaves:hero_pottery_sherd', { earth: 1, precious: 1 })
  value('alexscaves:disc_fragment_fusion', { precious: 1 })
  value('alexscaves:disc_fragment_tasty', { precious: 1 })
  const alexRarePhysicalDrops = ['baleen_bone', 'heavy_bone', 'tough_hide', 'vesper_wing']
  alexRarePhysicalDrops.forEach(id => value(`alexscaves:${id}`, {
    living: 9, organic: 4, precious: 4
  }))

  value('alexscaves:guano', { organic: 2 })
  value('alexscaves:dark_tatters', { living: 2, organic: 4 })
  value('alexscaves:moth_dust', { living: 2, organic: 2 })
  value('alexscaves:pure_darkness', { nether: 9, quantum: 9 })
  value('alexscaves:occult_gem', { nether: 9, quantum: 9 })

  value('alexscaves:radiant_essence', { precious: 9, quantum: 9 })
  value('alexscaves:sweet_tooth', { living: 9, organic: 4, precious: 4 })
  value('alexscaves:carmine_froglight', { living: 4, organic: 4, nether: 4 })
  value('alexscaves:toxic_paste', { living: 2, organic: 4, nether: 4 })
  value('alexscaves:fissile_core', { living: 36, organic: 18, precious: 18, quantum: 18 })
  value('alexscaves:tectonic_shard', { living: 72, organic: 36, precious: 36, nether: 18 })

  value('kubejs:attuned_topaz', { earth: 9, precious: 18, quantum: 9 })

  const witcherySeedsAndPlants = [
    'belladonna_seeds', 'mandrake_seeds', 'snowbell_seeds',
    'water_artichoke_seeds', 'wolfsbane_seeds', 'wormwood_seeds',
    'spanish_moss', 'wispy_cotton'
  ]
  witcherySeedsAndPlants.forEach(id => value(`witchery:${id}`, { organic: 1 }))
  value('witchery:rowan_berries', { organic: 2 })
  value('witchery:disturbed_cotton', { organic: 2, living: 1 })
  value('witchery:glintweed', { organic: 1, quantum: 1 })
  value('witchery:ender_bramble', { organic: 1, ender: 1 })
  value('witchery:ember_moss', { organic: 1, nether: 1 })
  value('witchery:wild_bramble', { organic: 1, living: 1 })
  value('witchery:icy_needle', { earth: 1, organic: 1 })
  value('witchery:gypsum', { earth: 4 })
  value('witchery:koboldite_dust', { metallic: 4, precious: 4 })

  value('witchery:ent_twig', { living: 9, organic: 4, precious: 4 })
  value('witchery:owlets_wing', { living: 9, organic: 4, ender: 4 })
  value('witchery:tongue_of_dog', { living: 4, organic: 4 })
  value('witchery:parasitic_louse', { living: 2, organic: 4 })
  value('witchery:mellifluous_hunger', { living: 4, organic: 4, ender: 4 })
  value('witchery:bottle_of_blood', { living: 4, organic: 4 })
  value('witchery:blood_stained_wool', { living: 4, organic: 4 })
  value('witchery:demon_heart', { living: 36, nether: 18, precious: 18 })
  value('witchery:demons_blood', { living: 18, nether: 9, precious: 9 })
  value('witchery:phantom_vapor', { living: 4, ender: 4 })
  value('witchery:condensed_fear', { living: 9, ender: 9, nether: 4 })
  value('witchery:necromantic_stone', { living: 9, ender: 9, precious: 4 })
  value('witchery:oil_of_vitriol', { earth: 4, nether: 4 })
  value('witchery:focused_will', { living: 9, ender: 4 })

  value('witchery:wood_ash', { earth: 1, organic: 2 })
  value('witchery:foul_fume', { organic: 2, nether: 2 })
  value('witchery:breath_of_the_goddess', { organic: 2, precious: 4 })
  value('witchery:exhale_of_the_horned_one', { organic: 2, nether: 4 })
  value('witchery:hint_of_rebirth', { organic: 2, living: 4 })
  value('witchery:odor_of_purity', { organic: 2, precious: 4 })
  value('witchery:reek_of_misfortune', { organic: 2, nether: 4 })
  value('witchery:whiff_of_magic', { organic: 2, quantum: 4 })

  value('witchery:mutandis', { organic: 4, quantum: 4 })
  value('witchery:mutandis_extremis', { organic: 9, quantum: 9, living: 4 })
  value('witchery:drop_of_luck', { living: 4, ender: 4, precious: 4 })
  value('witchery:fanciful_thread', { organic: 4, precious: 4 })
  value('witchery:golden_thread', { organic: 4, precious: 4 })
  value('witchery:impregnated_fabric', { organic: 4, living: 4, ender: 4 })
  value('witchery:tormented_twine', { organic: 4, living: 4, nether: 4 })
  value('witchery:tear_of_the_goddess', { living: 4, precious: 4, quantum: 4 })
  value('witchery:palevine_ink', { organic: 4, ender: 4 })
  value('witchery:spirit_of_otherwhere', { living: 4, ender: 9, quantum: 4 })
  value('witchery:ender_dew', { ender: 1.5 })
  value('witchery:redstone_soup', { living: 20, organic: 8, ender: 4, precious: 4, metallic: 1 })

  const witcheryBrews = {
    brew_of_erosion: { earth: 4, nether: 4 },
    brew_of_flowing_spirit: { living: 4, organic: 4, ender: 4 },
    brew_of_frost: { earth: 4, nether: 2 },
    brew_of_hollow_tears: { living: 4, ender: 4, quantum: 2 },
    brew_of_ink: { organic: 4, precious: 4, ender: 2 },
    brew_of_last_stand: { living: 9, metallic: 4 },
    brew_of_love: { living: 4, organic: 2, precious: 4 },
    brew_of_oblivion: { ender: 9, quantum: 4 },
    brew_of_raising: { living: 4, quantum: 4 },
    brew_of_revealing: { precious: 4, quantum: 4 },
    brew_of_sleeping: { living: 2, organic: 4, ender: 4 },
    brew_of_the_depths: { earth: 4, ender: 4 },
    brew_of_the_grotesque: { living: 4, nether: 4 },
    brew_of_verdant_foul: { organic: 4, nether: 4 },
    brew_of_wasting: { living: 4, nether: 4 },
    brew_of_webs: { living: 4, organic: 4 }
  }
  Object.keys(witcheryBrews).forEach(id => value(`witchery:${id}`, witcheryBrews[id]))

  value('iceandfire:ectoplasm', { living: 4, quantum: 1 })
  value('iceandfire:dread_shard', { precious: 9, living: 9 })
  const dragonAspects = {
    fire: 'nether',
    ice: 'earth',
    lightning: 'quantum'
  }
  Object.keys(dragonAspects).forEach(type => {
    const aspect = dragonAspects[type]
    const fleshValues = { living: 1000, organic: 500 }
    fleshValues[aspect] = 1000
    value(`iceandfire:${type}_dragon_flesh`, fleshValues)
    const heartValues = { living: 5000, organic: 1000, precious: 1000 }
    heartValues[aspect] = 5000
    value(`iceandfire:${type}_dragon_heart`, heartValues)
    const bloodValues = { living: 2500, organic: 1000, precious: 1000 }
    bloodValues[aspect] = 2500
    value(`iceandfire:${type}_dragon_blood`, bloodValues)
    const dragonsteelValues = { metallic: 9, living: 2500, organic: 1000, precious: 1000 }
    dragonsteelValues[aspect] = 2500
    value(`iceandfire:dragonsteel_${type}_ingot`, dragonsteelValues)
  })
  value('iceandfire:dragonbone', { living: 10, organic: 5, precious: 5 })
  const dragonScaleColors = [
    'amethyst', 'black', 'blue', 'bronze', 'copper', 'electric', 'gray',
    'green', 'red', 'sapphire', 'silver', 'white'
  ]
  dragonScaleColors.forEach(color =>
    value(`iceandfire:dragonscales_${color}`, { living: 100, organic: 50, precious: 50 })
  )
  const serpentScaleColors = ['blue', 'bronze', 'deepblue', 'green', 'purple', 'red', 'teal']
  serpentScaleColors.forEach(color =>
    value(`iceandfire:sea_serpent_scales_${color}`, { living: 100, organic: 50, precious: 50 })
  )
  value('iceandfire:shiny_scales', { living: 250, organic: 100, precious: 100 })
  value('iceandfire:ghost_ingot', { living: 2500, precious: 2500, quantum: 2500 })
  value('iceandfire:deathworm_chitin_red', { living: 100, organic: 50, precious: 50 })
  value('iceandfire:deathworm_chitin_white', { living: 100, organic: 50, precious: 50 })
  value('iceandfire:deathworm_chitin_yellow', { living: 100, organic: 50, precious: 50 })
  value('iceandfire:deathworm_tounge', { living: 1000, organic: 500, precious: 500 })
  value('iceandfire:deathworm_egg', { living: 1000, organic: 500, precious: 500 })
  value('iceandfire:deathworm_egg_giant', { living: 2500, organic: 1000, precious: 1000 })
  value('iceandfire:dragon_skull_fire', { living: 1000, organic: 500, precious: 500, nether: 500 })
  value('iceandfire:dragon_skull_ice', { living: 1000, organic: 500, precious: 500, earth: 500 })
  value('iceandfire:dragon_skull_lightning', { living: 1000, organic: 500, precious: 500, quantum: 500 })
  value('iceandfire:amphithere_feather', { living: 2, organic: 4 })
  value('iceandfire:cockatrice_eye', { living: 500, organic: 250, precious: 250 })
  value('iceandfire:cyclops_eye', { living: 1000, organic: 500, precious: 500 })
  value('iceandfire:gorgon_head', { living: 1500, organic: 750, precious: 750 })
  value('iceandfire:hippocampus_fin', { living: 1000, organic: 500, precious: 500 })
  value('iceandfire:hippogryph_skull', { living: 500, organic: 250, precious: 250 })
  value('iceandfire:hippogryph_talon', { living: 250, organic: 100, precious: 100 })
  value('iceandfire:hydra_fang', { living: 250, organic: 100, precious: 100 })
  value('iceandfire:hydra_heart', { living: 5000, organic: 2500, precious: 2500, quantum: 2500 })
  value('iceandfire:hydra_skull', { living: 2000, organic: 1000, precious: 1000 })
  value('iceandfire:pixie_dust', { living: 2, quantum: 1 })
  value('iceandfire:pixie_wings', { living: 500, organic: 250, precious: 250 })
  value('iceandfire:sea_serpent_fang', { living: 500, organic: 250, precious: 250 })
  value('iceandfire:siren_tear', { living: 2000, organic: 1000, precious: 1000, quantum: 500 })
  value('iceandfire:stymphalian_bird_feather', { living: 100, organic: 50, precious: 50 })
  value('iceandfire:troll_leather_forest', { living: 250, organic: 100, precious: 100 })
  value('iceandfire:troll_leather_frost', { living: 250, organic: 100, precious: 100, earth: 100 })
  value('iceandfire:troll_leather_mountain', { living: 250, organic: 100, precious: 100, earth: 100 })
  value('iceandfire:troll_tusk', { living: 250, organic: 100, precious: 100 })

  const dragonEggColors = {
    amethyst: 'earth', black: 'quantum', blue: 'earth', bronze: 'nether',
    copper: 'quantum', electric: 'quantum', gray: 'nether', green: 'nether',
    red: 'nether', sapphire: 'earth', silver: 'quantum', white: 'earth'
  }
  Object.keys(dragonEggColors).forEach(color => {
    const eggValues = { living: 10000, organic: 5000, precious: 5000 }
    eggValues[dragonEggColors[color]] = 5000
    value(`iceandfire:dragonegg_${color}`, eggValues)
  })
  const rareTrophySkulls = ['amphithere', 'cockatrice', 'hippogryph', 'stymphalian', 'troll']
  rareTrophySkulls.forEach(mob =>
    value(`iceandfire:${mob}_skull`, { living: 500, organic: 250, precious: 250 })
  )
  value('iceandfire:cyclops_skull', { living: 1000, organic: 500, precious: 500 })
  value('iceandfire:seaserpent_skull', { living: 1000, organic: 500, precious: 500 })

  value('netherexp:warped_wart', { organic: 4, nether: 4 })
  value('netherexp:fossil_fuel', { organic: 2, nether: 2 })
  value('netherexp:banshee_rod', { living: 9, nether: 4 })
  value('scguns:aureous_slag', { metallic: 9, precious: 9 })
  value('scguns:bat_guano', { living: 2, organic: 4 })
  value('scguns:niter', { earth: 1, nether: 1 })

  value('oritech:coal_dust', { earth: 2, organic: 0.25, precious: 0.25 })
  value('oritech:raw_nickel', { metallic: 12 })
  value('oritech:nickel_ore', { metallic: 24 })
  value('oritech:deepslate_nickel_ore', { metallic: 24 })
  value('oritech:nickel_dust', { metallic: 9 })
  value('oritech:nickel_gem', { metallic: 9 })
  value('oritech:small_nickel_dust', { metallic: 1 })
  value('oritech:raw_biopolymer', { earth: 8, organic: 8 })
  value('oritech:biosteel_ingot', { earth: 8, organic: 8, metallic: 9 })
  value('oritech:biosteel_dust', { earth: 8, organic: 8, metallic: 9 })
  value('oritech:enderic_compound', { organic: 0.5, nether: 0.25, quantum: 0.125 })
  value('oritech:plutonium_dust', { metallic: 288, quantum: 288, nether: 288 })

  const vibraniumValue = { metallic: 54, quantum: 54, precious: 54, ender: 54 }
  value('marvel:vibranium_ore', vibraniumValue)
  value('marvel:deepslate_vibranium_ore', vibraniumValue)
  value('marvel:vibranium', vibraniumValue)
  value('marvel:vibranium_ingot', vibraniumValue)
  value('marvel:pym_particle', { metallic: 4, quantum: 4 })
  value('marvel:villager_blood_sample', { living: 2 })
  value('marvel:x_genes', { living: 2 })

})
