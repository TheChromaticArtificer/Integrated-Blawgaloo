RecipeViewerEvents.addInformation('item', e => {
  e.add('witchery:hawthorn_log', ['Hawthorn trees generate naturally. Saplings can also come from Mutandis or Hawthorn Leaves.']);
  e.add('witchery:hawthorn_sapling', ['Use Mutandis on plants, or break Hawthorn Leaves, to get more.']);
  e.add('witchery:hawthorn_leaves', ['May drop Hawthorn Saplings.']);
  e.add('iceandfire:silver_ingot', ['Leash a Hobgoblin miner and give it a pickaxe to find Koboldite Dust. Trade Dust for Nuggets, then Nuggets for Silver Ingots. Some Hobgoblins ask for gold or emeralds.']);
  e.add('iceandfire:ectoplasm', ['Dropped by Ghosts, Spectres, Banshees, Poltergeists and Spectral Familiars. In a Witchery brew it reflects damage back at attackers.']);
});

RecipeViewerEvents.removeEntries('item', e => {
  e.remove('witchery:spectral_dust');
});
