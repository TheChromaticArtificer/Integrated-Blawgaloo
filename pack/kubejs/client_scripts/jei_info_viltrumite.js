RecipeViewerEvents.removeEntries('item', e => {
  e.remove([
    'viltrumitecore:infinity_gun_base',
    'viltrumitecore:infinity_gun_handle',
    'viltrumitecore:infinity_gun_barrel'
  ])
})

RecipeViewerEvents.addInformation('item', e => {
  e.add('viltrumitecore:viltrumite_blood_sample', ['Obtained by defeating Viltrumites, or by bottling their blood off the ground before it dries.'])
  e.add('integrated_superheroes:syringe_viltrumite_blood_omni_man', ['Hold use to inject. You can only carry one power at a time, so extract the old one with an empty Syringe first.', 'The Scourge Virus is the one thing that can take it away. Die while infected and the power is gone for good.'])
  e.add('viltrumitecore:scourge_culture', ['Brew it into a potion. It poisons Viltrumites and keeps knocking them out of their powers until it wears off.'])
  e.add('viltrumitecore:infinity_gun', ['Sneak and left-click with Nether Stars in your inventory to charge it. Each star gives five shots.'])
})
