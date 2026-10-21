RecipeViewerEvents.removeEntries('item', e => {
  e.remove(/^dimdoors:item_ag_dim_(?!(minecraft_(oak|iron)_door|minecraft_oak_trapdoor|supplementaries_gold_door|dimdoors_(quartz|stone|amalgam)_door)$)/);

  e.remove(/^dimdoors:(?!driftwood_|amalgam_).+_(button|fence|gate|slab|stairs|wall)(_dyed|_smelting)?$/);

  e.remove(/^dimdoors:.+_ancient_fabric$/);
  [
    'dimdoors:monolith_spawner',
    'dimdoors:rift_configuration_tool',
    'dimdoors:dimensional_portal'
  ].forEach(id => e.remove(new RegExp('^' + id + '$')));
});

RecipeViewerEvents.addEntries('item', e => {
  e.add('dimdoors:item_ag_dim_minecraft_oak_trapdoor');
});
