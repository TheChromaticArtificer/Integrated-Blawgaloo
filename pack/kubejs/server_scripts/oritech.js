ServerEvents.recipes(event => {
  event.remove({ output: 'oritech:adamant_ingot' })
  event.remove({ output: 'oritech:uranium_dust_block' })
  event.remove({ output: 'oritech:overcharged_crystal' })
  event.remove({ output: 'oritech:plutonium_dust', type: 'oritech:laser' })
  event.remove({ input: 'oritech:uranium_crystal' })
  event.remove({ output: 'oritech:uranium_crystal' })
  event.remove({ input: 'oritech:resource_node_uranium', type: 'oritech:deep_drill' })
  event.remove({ output: 'abyssal_decor:moonsilver_ingot' })
  event.remove({ output: 'abyssal_decor:moonsilver_nugget' })
  event.remove({ output: 'iceandfire:silver_block' })
  event.replaceInput({}, 'abyssal_decor:moonsilver_ingot', 'iceandfire:silver_ingot')
  event.replaceInput({}, 'abyssal_decor:moonsilver_nugget', 'iceandfire:silver_nugget')
  event.replaceOutput({}, 'oritech:copper_nugget', 'minecraft:copper_nugget')
  event.replaceInput({}, 'oritech:copper_nugget', 'minecraft:copper_nugget')
  const removedBrassBlocks = [
    'scguns:ancient_brass_block',
    'scguns:treated_brass_block',
    'scguns:chiseled_treated_brass_block',
    'scguns:cut_treated_brass',
    'scguns:cut_treated_brass_slab',
    'scguns:cut_treated_brass_stairs',
    'scguns:treated_brass_grate',
    'scguns:treated_brass_grate_pane',
    'scguns:treated_brass_lamp',
    'scguns:treated_brass_plates',
    'scguns:treated_brass_tiles',
    'scguns:treated_brass_tiles_slab',
    'scguns:treated_brass_tiles_stairs'
  ]
  removedBrassBlocks.forEach(block => event.remove({ output: block }))
  event.remove({ output: 'scguns:treated_brass_blend' })
  event.remove({ id: 'scguns:cog_knight_helmet' })
  event.shaped('scguns:cog_knight_helmet', [
    'XXX',
    'X X'
  ], { X: 'abyssal_decor:seabrass_block' })
  event.remove({ id: 'scguns:cog_knight_chestplate' })
  event.shaped('scguns:cog_knight_chestplate', [
    'X X',
    'XXX',
    'XXX'
  ], { X: 'abyssal_decor:seabrass_block' })
  event.remove({ id: 'scguns:cog_knight_leggings' })
  event.shaped('scguns:cog_knight_leggings', [
    'XXX',
    'X X',
    'X X'
  ], { X: 'abyssal_decor:seabrass_block' })
  event.remove({ id: 'scguns:cog_knight_boots' })
  event.shaped('scguns:cog_knight_boots', [
    'X X',
    'X X'
  ], { X: 'abyssal_decor:seabrass_block' })
  event.shaped('oritech:overcharged_crystal', [
    'rbr',
    'sas',
    'sas'
  ], {
    r: 'antarchy:rainbow_sugar',
    b: 'antarchy:blood_crystal_shard',
    s: 'oritech:superconductor',
    a: 'oritech:advanced_battery'
  })
  event.remove({ output: 'abyssal_decor:seabrass_ingot', input: 'minecraft:gold_ingot' })
  event.replaceInput({}, '#c:ingots/brass', 'abyssal_decor:seabrass_ingot')

  const removedDiamondSteelBlocks = [
    'scguns:diamond_steel_block',
    'scguns:chiseled_diamond_steel_block',
    'scguns:cut_diamond_steel',
    'scguns:cut_diamond_steel_slab',
    'scguns:cut_diamond_steel_stairs',
    'scguns:diamond_steel_bars',
    'scguns:diamond_steel_grate',
    'scguns:diamond_steel_grate_pane',
    'scguns:diamond_steel_panel',
    'scguns:diamond_steel_pillar',
    'scguns:diamond_steel_lamp',
    'scguns:diamond_steel_tiles',
    'scguns:diamond_steel_tiles_slab',
    'scguns:diamond_steel_tiles_stairs'
  ]
  removedDiamondSteelBlocks.forEach(block => event.remove({ output: block }))

  event.remove({ id: 'scguns:diamond_steel_gun_frame' })
  event.shaped('scguns:diamond_steel_gun_frame', [
    ' Q ',
    'Q Q',
    'QQQ'
  ], { Q: 'antarchy:titanium_ingot' })
  event.remove({ id: 'scguns:treated_iron/treated_iron_from_nuggets' })
  event.remove({ id: 'scguns:treated_iron/treated_iron_from_treated_iron_ingot' })
  event.remove({ id: 'scguns:treated_iron/treated_iron_ingot_from_blasting_treated_iron_blend' })
  event.remove({ id: 'scguns:treated_iron/treated_iron_ingot_from_smelting_treated_iron_blend' })
  event.remove({ output: 'scguns:plasma_lantern' })
  event.shaped('scguns:plasma_lantern', [
    'XXX',
    'X#X',
    'XXX'
  ], {
    X: 'oritech:nickel_nugget',
    '#': 'antarchy:flytrap_goo'
  })

  const removedAnthraliteEquipment = [
    'scguns:anthralite_axe',
    'scguns:anthralite_bayonet',
    'scguns:anthralite_boots',
    'scguns:anthralite_chestplate',
    'scguns:anthralite_hammer',
    'scguns:anthralite_helmet',
    'scguns:anthralite_hoe',
    'scguns:anthralite_leggings',
    'scguns:anthralite_paxel',
    'scguns:anthralite_pickaxe',
    'scguns:anthralite_shovel',
    'scguns:anthralite_sword'
  ]

  removedAnthraliteEquipment.forEach(item => event.remove({ output: item }))
  event.remove({ output: 'scguns:anthralite_respirator' })
  event.shaped('scguns:anthralite_respirator', [
    'XXX',
    'S S',
    ' L '
  ], {
    X: 'oritech:nickel_ingot',
    S: 'minecraft:leather',
    L: 'scguns:composite_filter'
  })

  event.replaceInput({}, 'oritech:platinum_ingot', 'antarchy:titanium_ingot')
  event.replaceInput({}, 'oritech:raw_platinum', 'antarchy:raw_titanium')
  event.replaceInput({}, 'oritech:platinum_nugget', 'antarchy:titanium_nugget')
  event.replaceInput({}, 'oritech:platinum_block', 'antarchy:titanium_block')
  event.replaceInput({}, 'oritech:raw_platinum_block', 'antarchy:raw_titanium_block')
  event.replaceOutput({}, 'oritech:platinum_ingot', 'antarchy:titanium_ingot')
  event.replaceOutput({}, 'oritech:raw_platinum', 'antarchy:raw_titanium')
  event.replaceOutput({}, 'oritech:platinum_nugget', 'antarchy:titanium_nugget')
  event.replaceOutput({}, 'oritech:platinum_block', 'antarchy:titanium_block')
  event.replaceOutput({}, 'oritech:raw_platinum_block', 'antarchy:raw_titanium_block')
  event.replaceInput({}, 'oritech:duratium_ingot', 'pastel:bedrock_dust')
  event.replaceInput({}, 'oritech:duratium_dust', 'pastel:bedrock_dust')
  event.replaceInput({}, 'oritech:duratium_block', 'marvel:vibranium_block')

  event.replaceInput({}, 'oritech:energite_ingot', 'marvel:vibranium_ingot')
  event.replaceInput({}, 'oritech:energite_dust', 'marvel:vibranium_ingot')
  event.replaceInput({}, 'oritech:energite_block', 'marvel:vibranium_ingot')
  event.replaceOutput({}, 'oritech:energite_ingot', 'marvel:vibranium_ingot')
  event.replaceOutput({}, 'oritech:energite_dust', 'marvel:vibranium')
  event.replaceOutput({}, 'oritech:energite_block', 'marvel:vibranium_block')
  const replacedOritechRecipes = [
    'energite_blockblock',
    'energite_blockblockinv',
    'energite_ingot_from_blasting_energite_dust',
    'energite_ingot_from_smelting_energite_dust',
    'assembler/superconductor'
  ]
  replacedOritechRecipes.forEach(id => event.remove({ id: `oritech:${id}` }))

  event.remove({ id: 'alexscaves:polymer_plate' })
  event.shapeless('3x alexscaves:polymer_plate', ['alexscaves:radon_bottle', 'alexscaves:sulfur_dust', 'oritech:still_naphtha_bucket'])
    .id('kubejs:alexscaves/polymer_plate')
  event.shapeless('2x alexscaves:polymer_plate', ['oritech:polymer_resin', 'oritech:polymer_resin', 'alexscaves:sulfur_dust'])
    .id('kubejs:alexscaves/polymer_plate_from_resin')
  event.smelting('alexscaves:azure_neodymium_ingot', 'kubejs:azure_neodymium_dust')
  event.blasting('alexscaves:azure_neodymium_ingot', 'kubejs:azure_neodymium_dust')

  event.remove({ id: 'oritech:crafting/core5' })
  event.remove({ id: 'oritech:crafting/centrifuge' })
  event.remove({ id: 'oritech:atomicforge/compensator' })
  event.remove({ id: 'oritech:atomicforge/compensatoralt' })

	event.replaceInput(
		{ output: 'oritech:duratium_ingot' },
		'minecraft:netherite_ingot',
		'antarchy:titanium_ingot'
	),

	event.replaceOutput({}, 'oritech:duratium_ingot', 'marvel:vibranium_ingot')
	event.replaceOutput({}, 'oritech:duratium_dust', 'marvel:vibranium')
	event.replaceOutput({}, 'oritech:duratium_block', 'marvel:vibranium_block')

  event.replaceInput(
    { output: 'oritech:basic_battery' },
    'alexscaves:polymer_plate',
    'minecraft:redstone_block'
  )

  event.remove({ output: 'oritech:assembler_block' })
  event.shaped(
    Item.of('oritech:assembler_block'),
    [
      'AAA',
      'BEB',
      'DCD'
    ],
    {
      A: "minecraft:copper_ingot",
      B: "minecraft:crafter",
      C: "minecraft:blast_furnace",
      D: "oritech:motor",
      E: "minecraft:iron_ingot"
    }
  )

  event.shaped(
    Item.of('oritech:machine_core_5'),
    [
      'BBB',
      'BAB',
      'BBB'
    ],
    {
      A: "oritech:advanced_computing_engine",
      B: "marvel:adamantium_ingot"
    }
  )

  event.remove({ id: 'oritech:crafting/core7' })
  event.shaped('oritech:machine_core_7', [
    'PBP',
    'BSB',
    'PBP'
  ], {
    P: 'oritech:prometheum_ingot',
    B: '#oritech:plating',
    S: 'oritech:superconductor'
  }).id('kubejs:oritech/crafting/core7')
  event.remove({ id: 'oritech:atomicforge/prometheum' })
  event.recipes.oritech.atomic_forge()
    .itemInputs(['oritech:heisenberg_compensator', 'oritech:overcharged_crystal', 'antarchy:uranium_ingot'])
    .itemOutputs('oritech:prometheum_ingot')
    .time(240)
    .id('kubejs:oritech/atomic_forge/prometheum')

  event.remove({ output: 'oritech:dubios_container' })
  event.shaped(
    Item.of('oritech:dubios_container'),
    [
      ' B ',
      'CAC',
      'CAC'
    ],
    {
      A: "minecraft:iron_ingot",
      B: "alexscaves:polymer_plate",
      C: "oritech:enderic_compound"
    }
  )

  event.recipes.oritech.atomic_forge().itemInputs(["oritech:copper_dust", "oritech:uranium_dust", "oritech:uranium_dust"]).itemOutputs("antarchy:uranium_ingot").time(5),
	event.recipes.oritech.atomic_forge().itemInputs(["oritech:copper_dust", "antarchy:raw_uranium", "antarchy:raw_uranium"]).itemOutputs("antarchy:uranium_ingot").time(5),
	event.recipes.oritech.atomic_forge().itemInputs(['marvel:adamantium_ingot', 'oritech:super_ai_chip', 'oritech:unholy_intelligence' ]).itemOutputs('oritech:heisenberg_compensator').time(400)
  event.recipes.oritech.assembler().itemInputs(["antarchy:uranium_ingot", "antarchy:uranium_ingot", "alexscaves:polymer_plate", "oritech:nickel_ingot"]).itemOutputs("2x oritech:uranium_pellet").time(96),
  event.recipes.oritech.assembler().itemInputs(["antarchy:uranium_ingot", "antarchy:uranium_ingot", "alexscaves:polymer_plate", "marvel:vibranium_ingot"]).itemOutputs("4x oritech:uranium_pellet").time(96),
  event.recipes.oritech.assembler().itemInputs(["oritech:flux_gate", "alexscaves:polymer_plate", "oritech:dubios_container", "alexscaves:azure_neodymium_ingot"]).itemOutputs("oritech:superconductor").time(200), 
  event.recipes.oritech.deep_drill().itemInputs("oritech:resource_node_uranium").itemOutputs("antarchy:raw_uranium_scrap").time(1)
  event.recipes.oritech.laser().itemInputs("antarchy:uranium_ingot").itemOutputs("oritech:plutonium_dust").time(1)
  event.recipes.oritech.grinder().itemInputs("alexscaves:azure_neodymium_ingot").itemOutputs("kubejs:azure_neodymium_dust").time(40)
	event.recipes.oritech.pulverizer().itemInputs("alexscaves:azure_neodymium_ingot").itemOutputs("kubejs:azure_neodymium_dust").time(100)
}
)

ServerEvents.tags('item', event => {
    event.removeAll('c:ingots/steel')
    event.add('c:ingots/steel', 'minecraft:iron_ingot')
    event.remove('c:ingots/iron', 'oritech:biosteel_ingot')
    event.remove('c:ores', 'scguns:anthralite_ore')
    event.remove('c:ores', 'scguns:deepslate_anthralite_ore')
    event.remove('c:raw_materials', 'scguns:raw_anthralite')
    event.remove('c:storage_blocks', 'scguns:anthralite_block')
    event.remove('c:storage_blocks', 'scguns:raw_anthralite_block')
    event.remove('c:ingots', 'scguns:anthralite_ingot')
    event.remove('c:nuggets', 'scguns:anthralite_nugget')
    event.remove('c:dusts', 'scguns:anthralite_dust')
    event.remove('mekanism:clumps', 'scguns:clump_anthralite')
    event.remove('mekanism:dirty_dusts', 'scguns:dirty_dust_anthralite')
    event.remove('mekanism:shards', 'scguns:shard_anthralite')
    event.add('mekanism:clumps', 'oritech:nickel_clump')
    event.add('mekanism:dirty_dusts', 'oritech:nickel_dust')
    event.add('mekanism:shards', 'oritech:small_nickel_dust')

    const plasticTags = ['c:plates/plastic', 'c:plastics', 'pneumaticcraft:plastic_sheets']
    plasticTags.forEach(tag => {
        event.removeAll(tag)
        event.add(tag, 'alexscaves:polymer_plate')
    })
})

ServerEvents.tags('fluid', event => {
    event.removeAll('c:sulfuric_acid')
    event.add('c:sulfuric_acid', 'alexscaves:acid')
})
