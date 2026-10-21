ServerEvents.recipes(event => {
  event.recipes.oritech.assembler()
    .itemInputs(['marvellegacy:syringe_empty', 'viltrumitecore:viltrumite_blood_sample', 'viltrumitecore:viltrumite_blood_sample', 'minecraft:nether_star'])
    .itemOutputs('integrated_superheroes:syringe_viltrumite_blood_omni_man')
    .time(200)
    .id('kubejs:oritech/assembler/syringe_viltrumite_blood_omni_man')

  event.remove({ id: 'viltrumitecore:scourge_culture' })
  event.shapeless('viltrumitecore:scourge_culture', [
    'viltrumitecore:viltrumite_blood_sample',
    'witchery:demons_blood',
    'minecraft:fermented_spider_eye'
  ]).id('kubejs:viltrumite/scourge_culture')

  event.remove({ id: 'viltrumitecore:infinity_gun' })
  event.custom({
    type: 'scguns:gun_bench',
    ingredients: {
      gun_top_internal_1: { item: 'oritech:prometheum_ingot' },
      gun_top_internal_2: { item: 'scguns:scorched_gun_frame' },
      gun_top_barrel_1: { item: 'minecraft:nether_star' },
      gun_top_barrel_2: { item: 'scguns:heavy_gun_barrel' },
      gun_internal_1: { item: 'scguns:rapid_firing_unit' },
      gun_internal_2: { item: 'alexscaves:fissile_core' },
      gun_barrel_1: { item: 'scguns:heavy_gun_barrel' },
      gun_barrel_2: { item: 'marvel:adamantium_ingot' },
      gun_grip: { item: 'scguns:gun_grip' },
      gun_magazine: { item: 'antarchy:titanium_ingot' }
    },
    result: { id: 'viltrumitecore:infinity_gun', count: 1 }
  }).id('kubejs:scguns/gun_bench/infinity_gun')
})
