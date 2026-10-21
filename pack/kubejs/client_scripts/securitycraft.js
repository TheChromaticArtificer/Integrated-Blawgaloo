RecipeViewerEvents.removeEntries('item', e => {
  e.remove(/^securitycraft:reinforced_(?!(stone|cobblestone|deepslate|cobbled_deepslate|iron_block|glass|glass_pane|obsidian|iron_trapdoor|iron_bars)$).+$/)
})
