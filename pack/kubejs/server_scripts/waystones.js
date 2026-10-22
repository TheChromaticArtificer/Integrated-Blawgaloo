ServerEvents.recipes(event => {
  event.remove({ output: 'waystones:warp_stone' })
  event.shaped('waystones:warp_stone', [
    'ADA',
    'DSD',
    'ADA'
  ], {
    A: 'minecraft:amethyst_shard',
    D: 'witchery:ender_dew',
    S: 'witchery:attuned_stone'
  }).id('kubejs:waystones/crafting/warp_stone')

  event.remove({ output: 'waystones:return_scroll' })
  event.shaped('3x waystones:return_scroll', [
    'WDW',
    'PPP'
  ], {
    W: 'witchery:whiff_of_magic',
    D: 'witchery:ender_dew',
    P: 'minecraft:paper'
  }).id('kubejs:waystones/crafting/return_scroll')

  event.remove({ output: 'waystones:warp_scroll' })
  event.shaped('3x waystones:warp_scroll', [
    'DSD',
    'PPP'
  ], {
    D: 'witchery:ender_dew',
    S: 'witchery:spirit_of_otherwhere',
    P: 'minecraft:paper'
  }).id('kubejs:waystones/crafting/warp_scroll')

  event.remove({ output: 'waystones:blank_scroll' })
  event.shaped('3x waystones:blank_scroll', [
    'WFW',
    'PPP'
  ], {
    W: 'witchery:whiff_of_magic',
    F: 'minecraft:feather',
    P: 'minecraft:paper'
  }).id('kubejs:waystones/crafting/blank_scroll')

  event.remove({ output: 'waystones:portal_scroll' })
  event.shaped('3x waystones:portal_scroll', [
    'ADA',
    'AWA',
    'PPP'
  ], {
    A: 'minecraft:amethyst_shard',
    D: 'witchery:ender_dew',
    W: 'witchery:whiff_of_magic',
    P: 'minecraft:paper'
  }).id('kubejs:waystones/crafting/portal_scroll')

  event.remove({ output: 'waystones:twinbound_feather' })
  event.shapeless('waystones:twinbound_feather', [
    'minecraft:feather',
    'minecraft:amethyst_shard',
    'witchery:ender_dew',
    'witchery:whiff_of_magic'
  ]).id('kubejs:waystones/crafting/twinbound_feather')
})
