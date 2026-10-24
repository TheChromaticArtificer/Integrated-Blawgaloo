const removedRefurbished = [
  'refurbished_furniture:light_electricity_generator',
  'refurbished_furniture:dark_electricity_generator',
  'refurbished_furniture:computer',
  'refurbished_furniture:television',
  'refurbished_furniture:television_remote'
]

ServerEvents.recipes(event => {
  removedRefurbished.forEach(item => event.remove({ output: item }))
  event.remove({ id: 'refurbished_furniture:constructing/computer' })

  const MOTOR = 'oritech:motor'
  const COIL = 'oritech:magnetic_coil'

  event.remove({ id: 'refurbished_furniture:workbench' })
  event.shaped('refurbished_furniture:workbench', ['SBS', 'PMP', 'PIP'], {
    S: '#minecraft:wooden_slabs',
    B: 'minecraft:stonecutter',
    P: '#minecraft:planks',
    M: MOTOR,
    I: '#c:ingots/iron'
  }).id('kubejs:refurbished_furniture/workbench')

  const construct = (name, materials) => {
    event.remove({ id: `refurbished_furniture:constructing/${name}` })
    event.custom({
      type: 'refurbished_furniture:workbench_constructing',
      materials: materials.map(([count, item]) => ({ count: count, ingredient: { item: item } })),
      result: { id: `refurbished_furniture:${name}`, count: 1 }
    }).id(`kubejs:refurbished_furniture/constructing/${name}`)
  }

  construct('light_fridge', [[9, 'minecraft:iron_ingot'], [3, 'minecraft:copper_ingot'], [1, MOTOR]])
  construct('recycle_bin', [[8, 'minecraft:iron_ingot'], [1, 'minecraft:piston'], [1, MOTOR]])
  construct('light_stove', [[12, 'minecraft:iron_ingot'], [1, 'minecraft:glass'], [2, COIL]])
  construct('light_microwave', [[6, 'minecraft:iron_ingot'], [1, 'minecraft:glass'], [1, COIL]])
  construct('light_toaster', [[4, 'minecraft:iron_ingot'], [1, COIL]])
  construct('light_ceiling_light', [[2, 'minecraft:iron_ingot'], [1, COIL], [4, 'minecraft:glowstone_dust']])
  construct('light_lightswitch', [[2, 'minecraft:iron_ingot'], [1, COIL]])
  construct('doorbell', [[2, 'minecraft:iron_ingot'], [1, COIL], [1, 'minecraft:gold_ingot']])

})

ServerEvents.tags('item', event => {
  event.removeAllTagsFrom(removedRefurbished)
})
