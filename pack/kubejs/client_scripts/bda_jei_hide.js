RecipeViewerEvents.removeEntries('item', e => {
  e.remove('bda:chicken_spawn_egg')
  e.remove('bda:sheep_spawn_egg')

  e.remove(/^bda:hooligan_round_shield_\d+$/)

  e.remove('bda:tame_staff')
  e.remove('bda:hatch_stick')
})
