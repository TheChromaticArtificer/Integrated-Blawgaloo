RecipeViewerEvents.addInformation('item', e => {
  const info = (ids, lines) => [].concat(ids).forEach(i => e.add(i.indexOf(':') >= 0 ? i : 'dimdoors:' + i, [].concat(lines)));
  const pocketDeath = 'Dying in a pocket sends you to Limbo instead of killing you.';

  info('item_ag_dim_minecraft_oak_door', 'Place under a rift to open it. Inside a pocket, it leads back out.');
  info('item_ag_dim_minecraft_oak_trapdoor', 'Open it and drop through to pass through its rift.');
  info('item_ag_dim_minecraft_iron_door', ['Opens a new public pocket to build in.', pocketDeath]);
  info('item_ag_dim_dimdoors_quartz_door', 'Leads to your private pocket, the same room every time.');
  info(['item_ag_dim_supplementaries_gold_door', 'item_ag_dim_dimdoors_stone_door', 'item_ag_dim_dimdoors_amalgam_door'], ['Opens a dungeon of trapped rooms and loot. Each door type has its own dungeons.', pocketDeath]);

  info('world_thread', 'Obtained by closing a rift with a Rift Remover. Rifts spawn naturally in the Overworld.');
  info('rift_remover', 'Closes nearby rifts. Each one drops World Thread.');
  info('rift_stabilizer', 'Stops a rift growing and rotting the blocks around it.');

  info('eternal_fluid_bucket', 'Step into it in Limbo to escape back to the Overworld.');
  info('unravelled_fabric', "Limbo's ground. Can drop Frayed Filament when mined.");
  info('frayed_filament', 'Obtained by mining Unravelled Fabric in Limbo or breaking Driftwood leaves.');
  info(['infrangible_fiber', 'solid_static'], 'Mine Solid Static. It generates in Limbo, and rifts rot bedrock into it.');
  info('driftwood_sapling', 'Driftwood trees grow in Limbo.');
  info('mask_shard', 'Dropped by Monoliths in Limbo.');

  info('reality_sponge', 'Slowly rots the blocks touching it, like a rift. Place by ores to farm Clod or Amalgam.');
  info(['clod', 'clod_ore', 'clod_block'], 'Obtained by mining Clod Ore. Rifts rot nearby coal and gem ores into it.');
  info(['amalgam_lump', 'amalgam_ore', 'amalgam_block'], 'Obtained by mining Amalgam Ore. Rifts rot nearby metal ores into it.');
});
