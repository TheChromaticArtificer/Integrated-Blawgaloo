RecipeViewerEvents.addInformation('item', e => {
  const furniturePower = ['Also powers Refurbished furniture: link furniture to it with the Wrench.', 'Uses 2 RF/t for each linked device, and nothing while none are linked.']
  ;[
    'oritech:basic_generator_block',
    'oritech:bio_generator_block',
    'oritech:fuel_generator_block',
    'oritech:lava_generator_block',
    'oritech:steam_engine_block',
    'oritech:big_solar_panel_block',
    'oritech:small_storage_block',
    'oritech:large_storage_block'
  ].forEach(id => e.add(id, furniturePower))
  e.add('refurbished_furniture:workbench', ['Needs power: link it to an Oritech generator or energy storage block with the Wrench.'])
  e.add('vista:television', ['Needs power: link it to an Oritech generator or energy storage block with the Wrench.'])
  e.add('oritech:wrench', ['Sneak-scroll while looking at a Malisis door to change mode, then sneak-right-click the door to apply it.'])
})
