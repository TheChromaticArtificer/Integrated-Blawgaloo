MoreJS.registerPotionBrewing(event => {
  event.addCustomBrewing(
    Ingredient.of('antarchy:rainbow_sugar'),
    Ingredient.of('minecraft:potion[potion_contents={potion:"minecraft:awkward"}]'),
    Item.of('infinity:chromatic_potion', 1)
  )
})
