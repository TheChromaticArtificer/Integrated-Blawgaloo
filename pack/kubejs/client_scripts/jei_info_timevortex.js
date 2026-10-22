RecipeViewerEvents.addInformation('item', event => {
  event.add('timevortex:tardis_matrix', ['Made in the Oritech Assembler from titanium, Time Steel, a Processing Unit and a Blood Crystal Shard. Fit it to your console.'])
  event.add('timevortex:fluid_link', ['Crafted complete using Time Steel, gold, glass and a Blood Crystal Shard. Fit it before charging the console.'])
  event.add('timevortex:artron_generator', ['Burns ordinary furnace fuels, including coal and charcoal, to make artron power.'])
  event.add('timevortex:rig_controller', ['Build the Architectural Reconfiguration Rig around your ship using a controller and four pylons. Charge it with artron to convert the ship into a police box.'])
})

RecipeViewerEvents.removeEntries('item', event => {
  event.remove(/^timevortex:(zeiton_ingot|raw_zeiton|zeiton_dust|zeiton_ore|deepslate_zeiton_ore|raw_zeiton_block|zeiton_block|cinnabar|cinnabar_ore|deepslate_cinnabar_ore|nether_cinnabar_ore|zeiton_steel_ingot|artronic_gold_ingot|dwarf_star_alloy_ingot|huon_dust|artron_crystal|small_artron_bud|medium_artron_bud|large_artron_bud|artron_crystal_cluster|basic_circuit|temporal_circuit|dimensional_circuit|fluid_link_casing|circuit_fabricator|temporal_grinder|alloy_smelter|mercury_distiller|artron_forge|forge_casing|matrix_assembler|matrix_frame|rift_collector|rift_jar|captured_rift)$/)
})
