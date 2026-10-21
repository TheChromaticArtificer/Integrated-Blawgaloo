RecipeViewerEvents.removeEntries('item', e => {
  const colors = '(white|orange|magenta|light_blue|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)';
  e.remove(/^pastel:.+_head$/);
  e.remove(new RegExp('^pastel:' + colors + '_(button|fence|fence_gate|pressure_plate|wood|glowblock|lamp|spore_blossom)$'));
  e.remove(new RegExp('^pastel:stripped_' + colors + '_(log|wood)$'));
  e.remove(/^pastel:\w+_noxwood_(button|door|fence|fence_gate|pressure_plate|trapdoor|pillar|lamp|lantern|light)$/);
  e.remove(/^pastel:\w+_noxcap_(gills|hyphae)$/);
  e.remove(/^pastel:(?!.*(basalt|calcite)).+_(slab|stairs|wall)$/);
  e.remove(/^pastel:\w+_node_crystal$/);
});
