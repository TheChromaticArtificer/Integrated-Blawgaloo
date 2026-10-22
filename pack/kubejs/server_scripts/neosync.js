ServerEvents.recipes(event => {
  event.remove({ id: 'neosync:sync_core' })
  event.shaped('neosync:sync_core', [
    'PWP',
    'EBE',
    'PRP'
  ], {
    P: 'oritech:processing_unit',
    W: 'witchery:spirit_of_otherwhere',
    E: 'minecraft:ender_pearl',
    B: 'createcybernetics:bodypart_brain',
    R: 'minecraft:redstone_block'
  }).id('kubejs:neosync/crafting/sync_core')

  event.remove({ id: 'neosync:shell_constructor' })
  event.shaped('neosync:shell_constructor', [
    'ASA',
    'GHG',
    'MUM'
  ], {
    A: 'alexscaves:polymer_plate',
    S: 'neosync:sync_core',
    G: 'minecraft:glass_pane',
    H: 'createcybernetics:bodypart_heart',
    M: 'oritech:machine_core_3',
    U: 'witchery:mutandis'
  }).id('kubejs:neosync/crafting/shell_constructor')

  event.remove({ id: 'neosync:shell_storage' })
  event.shaped('neosync:shell_storage', [
    'ASA',
    'BGB',
    'TPT'
  ], {
    A: 'alexscaves:polymer_plate',
    S: 'neosync:sync_core',
    B: 'antarchy:blood_crystal_shard',
    G: 'minecraft:glass',
    T: 'antarchy:titanium_bars',
    P: 'minecraft:heavy_weighted_pressure_plate'
  }).id('kubejs:neosync/crafting/shell_storage')

  event.remove({ id: 'neosync:zero_point_shell_constructor' })
  event.shapeless('neosync:zero_point_shell_constructor', [
    'neosync:shell_constructor',
    'oritech:superconductor',
    'pastel:bedrock_dust'
  ]).id('kubejs:neosync/crafting/zero_point_shell_constructor')

  event.remove({ id: 'neosync:zero_point_shell_storage' })
  event.shapeless('neosync:zero_point_shell_storage', [
    'neosync:shell_storage',
    'oritech:superconductor',
    'pastel:bedrock_dust'
  ]).id('kubejs:neosync/crafting/zero_point_shell_storage')
})
