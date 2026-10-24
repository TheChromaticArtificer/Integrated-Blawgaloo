ServerEvents.recipes(event => {
  const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
  colors.forEach(color => {
    event.remove({ output: `travelersbackpack:${color}_sleeping_bag` })
    event.shaped(`travelersbackpack:${color}_sleeping_bag`, ['##X'], {
      '#': `minecraft:${color}_wool_slab`,
      X: 'minecraft:white_wool'
    }).group('sleeping_bag').id(`kubejs:travelersbackpack/${color}_sleeping_bag`)
  })
})
