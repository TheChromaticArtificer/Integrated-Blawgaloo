ServerEvents.recipes(event => {
  event.remove({ id: 'miners_dream:miners_dream' })
  event.shaped('miners_dream:miners_dream', [
    'GGG',
    'RDR',
    'TTT'
  ], {
    G: 'minecraft:slime_ball',
    R: 'minecraft:redstone_block',
    D: 'minecraft:diamond_pickaxe',
    T: 'minecraft:tnt'
  }).id('miners_dream:miners_dream')
})
