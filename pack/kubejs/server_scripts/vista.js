const removedVista = [
  'vista:wave_gate'
]

ServerEvents.recipes(event => {
  removedVista.forEach(item => event.remove({ output: item }))

  event.remove({ id: 'vista:mirror' })
  event.shaped('vista:mirror', ['GGG', 'GCG', 'GGG'], {
    G: 'minecraft:glass',
    C: Ingredient.of([
      'pastel:topaz_shard',
      'pastel:citrine_shard',
      'pastel:onyx_shard',
      'pastel:moonstone_shard'
    ])
  }).id('kubejs:vista/mirror')

  event.remove({ id: 'vista:television' })
  event.shaped('vista:television', ['GPP', 'GCR', 'GPP'], {
    G: 'minecraft:tinted_glass',
    P: '#minecraft:planks',
    C: 'oritech:magnetic_coil',
    R: '#c:dusts/redstone'
  }).id('kubejs:vista/television')

  event.remove({ id: 'vista:viewfinder' })
  event.shaped('vista:viewfinder', ['NNN', 'NSN', 'PPP'], {
    N: '#c:ingots/nickel',
    S: 'minecraft:spyglass',
    P: '#minecraft:planks'
  }).id('kubejs:vista/viewfinder')
})

ServerEvents.tags('item', event => {
  event.removeAllTagsFrom(removedVista)
})
