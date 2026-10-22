ServerEvents.recipes(event => {
  event.shaped('antos:computer', ['AAC', 'BDE', 'AAA'], {
    A: '#c:ingots/iron',
    B: '#c:ingots/copper',
    C: 'minecraft:glass',
    D: 'minecraft:repeater',
    E: 'minecraft:redstone_torch'
  }).id('kubejs:antos/computer')
})
