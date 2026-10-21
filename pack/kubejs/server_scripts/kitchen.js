const NATURES_SPIRIT_PIZZA = [
  'natures_spirit:whole_pizza',
  'natures_spirit:three_quarters_pizza',
  'natures_spirit:half_pizza',
  'natures_spirit:quarter_pizza'
]

const beverage = (variant, color) => ({
  type: 'neoforge:components',
  items: 'pastel:infused_beverage',
  strict: false,
  components: { 'pastel:infused_beverage': { variant: variant, color: color } }
})

ServerEvents.recipes(event => {
  const ing = i => typeof i === 'string' ? (i.startsWith('#') ? { tag: i.substring(1) } : { item: i }) : i
  const res = (id, count) => ({ id: id, count: count || 1 })

  const board = (name, stack, result, count) => {
    event.custom({
      type: 'refurbished_furniture:cutting_board_combining',
      ingredients: stack.map(ing),
      result: res(result, count)
    }).id(`kubejs:kitchen/board/${name}`)
  }
  const slice = (name, input, result, count) => {
    event.custom({
      type: 'refurbished_furniture:cutting_board_slicing',
      ingredient: ing(input),
      result: res(result, count)
    }).id(`kubejs:kitchen/slice/${name}`)
  }
  const station = (type, folder, time) => (name, input, result, count) => {
    event.custom({
      type: `refurbished_furniture:${type}`,
      category: 'food',
      ingredient: ing(input),
      result: res(result, count),
      time: time
    }).id(`kubejs:kitchen/${folder}/${name}`)
  }
  const pan = station('frying_pan_cooking', 'pan', 400)
  const oven = station('oven_baking', 'oven', 600)
  const toaster = station('toaster_heating', 'toaster', 300)
  const microwave = station('microwave_heating', 'microwave', 200)
  const campfire = (name, input, result) => {
    event.custom({
      type: 'minecraft:campfire_cooking',
      category: 'food',
      cookingtime: 600,
      experience: 0.35,
      ingredient: ing(input),
      result: res(result)
    }).id(`kubejs:kitchen/campfire/${name}`)
  }

  const DOUGH = 'refurbished_furniture:dough'
  const CHEESE = 'refurbished_furniture:cheese'
  const SLICE = 'refurbished_furniture:bread_slice'
  const SALT = 'refurbished_furniture:sea_salt'

  for (let id of [
    'antarchy:broodfruit_cobbler',
    'antarchy:peach_pie',
    'antarchy:cornbread',
    'abyssal_decor:bog_apple_pie_recipe',
    'abyssal_decor:cinnamon_roll_recipe',
    'abyssal_decor:clam_and_cheese_sandwich_recipe',
    'abyssal_decor:toasted_seeds_recipe',
    'alexscaves:deep_sea_sushi_roll',
    'alexscaves:serene_salad',
    'netherexp:nether_pizza',
    'natures_spirit:pizza'
  ]) {
    event.remove({ id: id })
  }
  NATURES_SPIRIT_PIZZA.forEach(item => event.remove({ output: item }))

  board('broodfruit_cobbler', [DOUGH, 'antarchy:broodfruit', 'antarchy:broodfruit', 'minecraft:sugar'], 'antarchy:broodfruit_cobbler', 2)
  board('peach_pie', [DOUGH, 'antarchy:peach', 'antarchy:peach', 'minecraft:sugar'], 'antarchy:peach_pie', 2)
  board('cornbread', [DOUGH, 'antarchy:corn', 'minecraft:egg', 'minecraft:honey_bottle'], 'antarchy:cornbread', 3)
  board('raw_corndog', ['minecraft:stick', '#antarchy:corndog_meats', 'antarchy:corn'], 'antarchy:raw_corndog', 2)
  board('stratoshark_fin_soup', ['minecraft:bowl', 'antarchy:stratoshark_fin', SALT], 'antarchy:stratoshark_fin_soup', 2)
  microwave('popcorn', 'antarchy:corn_seeds', 'antarchy:popcorn', 2)
  campfire('cooked_corndog', 'antarchy:raw_corndog', 'antarchy:cooked_corndog')
  campfire('cooked_venison', 'antarchy:raw_venison', 'antarchy:cooked_venison')
  campfire('cooked_bug_meat', 'antarchy:raw_bug_meat', 'antarchy:cooked_bug_meat')
  campfire('cooked_cheep', 'antarchy:cheep', 'antarchy:cooked_cheep')
  campfire('kraken_kalamari', 'antarchy:kraken_tentacle', 'antarchy:kraken_kalamari')

  for (let type of ['fire', 'ice', 'lightning']) {
    board(`cooked_rice_with_${type}_dragon_meat`,
      ['minecraft:bowl', 'antarchy:corn', `iceandfire:${type}_dragon_flesh`, 'minecraft:carrot', 'minecraft:potato'],
      `iceandfire:cooked_rice_with_${type}_dragon_meat`, 2)
  }
  board('ghost_cream', ['minecraft:glass_bottle', 'minecraft:milk_bucket', 'iceandfire:ectoplasm'], 'iceandfire:ghost_cream')
  board('pixie_dust_milky_tea', ['minecraft:glass_bottle', 'minecraft:milk_bucket', 'iceandfire:pixie_dust'], 'iceandfire:pixie_dust_milky_tea')

  board('bog_apple_pie', [DOUGH, 'abyssal_decor:bog_apple', 'abyssal_decor:bog_apple', 'minecraft:sugar'], 'abyssal_decor:bog_apple_pie', 2)
  board('cinnamon_roll', [DOUGH, 'abyssal_decor:cinnamon_stick', 'minecraft:sugar'], 'abyssal_decor:cinnamon_roll', 2)
  board('clam_and_cheese_sandwich', [SLICE, CHEESE, 'abyssal_decor:shucked_clam', SLICE], 'abyssal_decor:clam_and_cheese_sandwich', 2)
  toaster('toasted_seeds', 'pastel:amaranth_grains', 'abyssal_decor:toasted_seeds')
  campfire('cooked_muckroot', 'abyssal_decor:muckroot_item', 'abyssal_decor:cooked_muckroot')

  board('deep_sea_sushi_roll', ['minecraft:dried_kelp', 'alexscaves:lanternfish', 'alexscaves:tripodfish', 'alexscaves:sea_pig'], 'alexscaves:deep_sea_sushi_roll', 3)
  board('serene_salad', ['minecraft:bowl', 'alexscaves:fiddlehead', 'alexscaves:pine_nuts', 'alexscaves:tree_star'], 'alexscaves:serene_salad', 2)
  board('seething_stew', ['minecraft:bowl', 'alexscaves:cooked_dinosaur_chop', 'alexscaves:flytrap', 'alexscaves:heavy_bone'], 'alexscaves:seething_stew', 2)
  board('primordial_soup', ['minecraft:bowl', 'alexscaves:cooked_trilocaris_tail', 'alexscaves:tree_star'], 'alexscaves:primordial_soup', 2)
  board('vesper_stew', ['minecraft:bowl', 'minecraft:brown_mushroom', 'alexscaves:thornwood_branch', 'alexscaves:vesper_wing'], 'alexscaves:vesper_stew', 2)

  board('nether_pizza', [DOUGH, 'netherexp:glowcheese', '#netherexp:cooked_hogham', 'minecraft:nether_wart', 'netherexp:warped_wart'], 'netherexp:nether_pizza')
  slice('nether_pizza_slice', 'netherexp:nether_pizza', 'netherexp:nether_pizza_slice', 6)
  board('glowcheese', [CHEESE, 'netherexp:lightspores', 'netherexp:nightspores'], 'netherexp:glowcheese', 4)

  oven('bread', DOUGH, 'minecraft:bread')
  board('pumpkin_pie', [DOUGH, 'minecraft:pumpkin', 'minecraft:egg', 'minecraft:sugar'], 'minecraft:pumpkin_pie', 2)

  const A = 'pastel:amaranth_grains'
  const J = 'pastel:jaramel'
  const EGG = '#c:eggs'
  const MILK = '#c:buckets/milk'
  const CREAM = 'pastel:clotted_cream'
  const MYC = 'pastel:myceylon'
  const CHOC = 'pastel:fresh_chocolate'

  board('pastel/jaramel_tart', [A, J, EGG, MILK], 'pastel:jaramel_tart', 2)
  board('pastel/ashen_tart', [A, J, EGG, MILK, 'minecraft:sweet_berries'], 'pastel:ashen_tart', 2)
  board('pastel/weeping_tart', [A, J, EGG, MILK, 'minecraft:kelp'], 'pastel:weeping_tart', 2)
  board('pastel/whispy_tart', [A, J, EGG, MILK, 'pastel:nightdew_sprout'], 'pastel:whispy_tart', 2)
  board('pastel/puff_tart', [A, J, EGG, MILK, 'minecraft:dragon_breath'], 'pastel:puff_tart', 2)
  board('pastel/salted_jaramel_tart', [A, J, EGG, MILK, 'minecraft:ghast_tear'], 'pastel:salted_jaramel_tart', 2)
  board('pastel/jaramel_trifle', [A, J, 'minecraft:bone_meal', EGG], 'pastel:jaramel_trifle', 2)
  board('pastel/demon_trifle', [A, J, 'minecraft:bone_meal', EGG, 'pastel:bloodboil_syrup'], 'pastel:demon_trifle', 2)
  board('pastel/monster_trifle', [A, J, 'minecraft:bone_meal', EGG, 'alexscaves:uranium_shard'], 'pastel:monster_trifle', 2)
  board('pastel/salted_jaramel_trifle', [A, J, 'minecraft:bone_meal', EGG, 'minecraft:ghast_tear'], 'pastel:salted_jaramel_trifle', 2)
  board('pastel/myceylon_apple_pie', [A, MYC, MILK, 'minecraft:sugar', 'minecraft:apple'], 'pastel:myceylon_apple_pie', 2)
  board('pastel/myceylon_pumpkin_pie', [A, MYC, MILK, 'minecraft:sugar', 'minecraft:pumpkin'], 'pastel:myceylon_pumpkin_pie', 2)
  board('pastel/rabbit_cream_pie', [A, CREAM, 'pastel:jadeite_petals', 'pastel:jade_wine', MYC], 'pastel:rabbit_cream_pie', 4)
  board('pastel/honey_pastry', [A, EGG, 'minecraft:sugar', 'minecraft:honey_bottle'], 'pastel:honey_pastry', 2)
  board('pastel/cream_pastry', [A, EGG, CREAM, 'minecraft:honey_bottle'], 'pastel:cream_pastry', 10)
  board('pastel/scone', [A, EGG, CREAM, 'minecraft:sweet_berries'], 'pastel:scone', 4)
  board('pastel/berliner', [A, CHOC, CREAM, beverage('sawblade_holly_liquor', 13723654)], 'pastel:berliner', 2)
  board('pastel/lucky_roll', [A, MILK, 'minecraft:sugar', 'pastel:four_leaf_clover'], 'pastel:lucky_roll', 4)
  board('pastel/myceylon_cookie', [A, MYC], 'pastel:myceylon_cookie', 16)
  board('pastel/bodacious_berry_bar', [CHOC, CREAM, 'minecraft:sweet_berries', 'minecraft:honey_bottle', beverage('berry_liquor', 16729462)], 'pastel:bodacious_berry_bar', 8)
  board('pastel/slushslide', [CHOC, MYC, CREAM, beverage('sawblade_holly_liquor', 13723654)], 'pastel:slushslide', 4)
  board('pastel/meatloaf', ['pastel:lizard_meat', 'minecraft:beetroot', MYC, 'minecraft:honey_bottle', beverage('malt_beer', 8272724)], 'pastel:meatloaf', 2)
  board('pastel/hare_roast_beer', ['minecraft:cooked_rabbit', 'minecraft:potato', '#c:mushrooms', CREAM, beverage('beer', 16762703)], 'pastel:hare_roast', 2)
  board('pastel/hare_roast_malt', ['minecraft:cooked_rabbit', 'minecraft:potato', '#c:mushrooms', CREAM, beverage('malt_beer', 8272724)], 'pastel:hare_roast', 2)
  board('pastel/hare_roast_porter', ['minecraft:cooked_rabbit', 'minecraft:potato', '#c:mushrooms', CREAM, beverage('porter', 4857125)], 'pastel:hare_roast', 2)
  board('pastel/fishcake', ['#c:foods/raw_fish', 'pastel:koi', 'pastel:crawfish', MYC], 'pastel:fishcake', 6)
  board('pastel/crawfish_cocktail', ['pastel:crawfish', 'antarchy:peach', 'pastel:incandescent_essence', MYC], 'pastel:crawfish_cocktail', 6)
  board('pastel/chauve_souris_au_vin', ['pastel:lizard_meat', 'antarchy:peach', 'pastel:jadeite_petals', CHOC, 'pastel:jade_wine'], 'pastel:chauve_souris_au_vin', 2)
  board('pastel/bagnun', ['pastel:crawfish', '#c:mushrooms', CREAM, MYC, 'pastel:jade_wine'], 'pastel:bagnun', 2)
  board('pastel/banyash', ['pastel:crawfish', '#c:mushrooms', 'minecraft:sweet_berries', 'pastel:prickly_bayleaf', beverage('rum', 10505507)], 'pastel:banyash', 2)
  board('pastel/dragonbone_broth', ['minecraft:bowl', 'pastel:dragonbone_chunk', 'pastel:prickly_bayleaf', '#c:foods/fruit'], 'pastel:dragonbone_broth', 2)
  board('pastel/meatloaf_sandwich', [SLICE, 'pastel:meatloaf', CREAM, SLICE], 'pastel:meatloaf_sandwich', 4)
  pan('pastel/peach_jam', 'antarchy:peach', 'pastel:peach_jam')
})

ServerEvents.tags('item', event => {
  event.add('c:foods/dough', 'refurbished_furniture:dough')
  event.removeAllTagsFrom(NATURES_SPIRIT_PIZZA)
})
