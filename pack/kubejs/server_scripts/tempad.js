ServerEvents.recipes(event => {
  event.remove({ output: 'tempad:time_steel' })
  event.recipes.oritech.atomic_forge()
    .itemInputs(['antarchy:uranium_ingot', 'minecraft:netherite_scrap'])
    .itemOutputs('4x tempad:time_steel')
    .time(100)
    .id('kubejs:tempad/atomic_forge/time_steel')

  event.shapeless('2x tempad:time_steel', [
    'antarchy:uranium_ingot',
    'minecraft:netherite_scrap'
  ]).id('kubejs:tempad/crafting/time_steel')

  event.remove({ output: 'tempad:tempad' })
  event.shaped('tempad:tempad', [
    'GGG',
    'QEP',
    'TBT'
  ], {
    G: 'minecraft:tinted_glass',
    Q: 'minecraft:quartz',
    E: 'minecraft:ender_pearl',
    P: 'oritech:processing_unit',
    T: 'tempad:time_steel',
    B: 'tempad:chronon_battery'
  }).id('kubejs:tempad/crafting/tempad')

  event.remove({ id: 'tempad:new_location_upgrade' })
  event.remove({ id: 'tempad:upgrades/new_location' })
})
