RecipeViewerEvents.removeEntries('item', e => {
  [
    'mffs:infinite_power_card',
    'mffs:redstone_torch_off'
  ].forEach(item => e.remove(item))
})
