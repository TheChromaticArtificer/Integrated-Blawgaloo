MoreJS.registerPotionBrewing(event => {
  event.removeCustomBrewing({ output: 'marvel:pym_particle' })

  event.removePotionBrewing({
    ingredient: 'antarchy:uranium_nugget',
    input: 'minecraft:awkward',
    output: 'antarchy:shrinking'
  })
  event.removePotionBrewing({
    ingredient: 'antarchy:titanium_nugget',
    input: 'minecraft:awkward',
    output: 'antarchy:growing'
  })

  event.addCustomBrewing(
    Ingredient.of('antarchy:uranium_nugget'),
    Ingredient.of('minecraft:potion[potion_contents={potion:"minecraft:water"}]'),
    Item.of('marvel:pym_particle', 1)
  )
  console.info('Registered custom brewing: Water Bottle + Antarchy Uranium Nugget -> Marvel Pym Particle')
  event.addPotionBrewing('marvel:pym_particle', 'minecraft:awkward', 'antarchy:shrinking')
  event.addPotionBrewing('minecraft:fermented_spider_eye', 'antarchy:shrinking', 'antarchy:growing')
})
