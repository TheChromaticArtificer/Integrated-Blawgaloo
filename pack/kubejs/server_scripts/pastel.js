ServerEvents.recipes(event => {
	for (let type of [
		'pastel:spirit_instiller',
		'pastel:potion_workshop_brewing',
		'pastel:potion_workshop_crafting',
		'pastel:potion_workshop_reacting',
		'pastel:cinderhearth'
	]) {
		event.remove({ type: type });
	}
	event.remove({ id: /^pastel:pedestal\/tier3\/idols\// });
	event.remove({ id: 'pastel:mod_integration/supplementaries/enchanter/book_stasis' });
	event.remove({ id: /^pastel:pedestal\/tier3\/pastel_network\/\w+_refined$/ });
	event.remove({ id: /^pastel:pedestal\/tier1\/food\/(?!star_candy$)/ });
	event.remove({ id: /^pastel:pedestal\/tier1\/compacting\/pure_(globette|zinc|certus_quartz|fluix)/ });
	for (let id of [
		'pastel:pedestal/tier3/potion_workshop',
		'pastel:pedestal/tier3/spirit_instiller',
		'pastel:pedestal/tier4/staff_of_remembrance',
		'pastel:fusion_shrine/trinkets/lesser_potion_pendant',
		'pastel:fusion_shrine/trinkets/greater_potion_pendant',
		'pastel:anvil_crushing/paltaeria_fragments',
		'pastel:blasting/ore/paltaeria_ore',
		'pastel:smelting/ore/paltaeria_ore',
		'pastel:pedestal/tier1/compacting/paltaeria_fragments_from_paltaeria_floatblock',
		'pastel:pedestal/tier4/paltaeria_gem',
		'pastel:crystallarieum/pastel/bloodstone',
		'pastel:liquid_crystal_converting/raw_bloodstone',
		'pastel:pedestal/tier1/compacting/bloodstone_block',
		'pastel:pedestal/tier1/compacting/pure_bloodstone_from_bloodstone_block',
		'pastel:blasting/ore/shimmerstone_ores',
		'pastel:smelting/ore/shimmerstone_ores',
		'pastel:pedestal/tier1/compacting/shimmerstone_block',
		'pastel:pedestal/tier1/compacting/shimmerstone_gems_from_shimmerstone_block',
		'pastel:anvil_crushing/quitoxic_powder',
		'pastel:anvil_crushing/stratine_fragments',
		'pastel:blasting/ore/stratine_ore',
		'pastel:smelting/ore/stratine_ore',
		'pastel:pedestal/tier1/compacting/stratine_fragments_from_stratine_floatblock',
		'pastel:pedestal/tier3/stratine_gem',
		'pastel:pedestal/tier1/glow_vision_goggles',
		'pastel:titration_barrel/clotted_cream',
		'pastel:titration_barrel/clotted_cream_resin',
		'pastel:titration_barrel/fresh_chocolate',
		'pastel:titration_barrel/le_fishe_au_chocolat',
		'pastel:titration_barrel/fermented_spider_eyes',
		'pastel:titration_barrel/honey',
		'pastel:titration_barrel/night_salts',
		'pastel:titration_barrel/peach_jam',
		'pastel:titration_barrel/surstromming',
		'pastel:titration_barrel/bitter_oils',
		'pastel:titration_barrel/evernectar',
		'pastel:titration_barrel/faded_koi',
		'pastel:titration_barrel/freigeist',
		'pastel:titration_barrel/fast_pure_alcohol',
		'pastel:titration_barrel/special/cheong',
		'pastel:mod_integration/supplementaries/titration_barrel/antique_ink',
		'pastel:pedestal/tier3/cinderhearth',
		'pastel:pedestal/tier3/fabrication_chest',
		'pastel:crystallarieum/pastel/azurite',
		'pastel:blasting/ore/azurite_ores',
		'pastel:smelting/ore/azurite_ores',
		'pastel:pedestal/tier1/compacting/azurite_block',
		'pastel:pedestal/tier1/compacting/pure_azurite_from_azurite_block'
	]) {
		event.remove({ id: id });
	}

	pastelPedestal(event, 120, 'basic', 0, 0, 2, 0, 0, 1, [
		'MCM'
	], {
		M: 'antarchy:amber_moss_block',
		C: 'pastel:citrine_shard'
	}, '3x antarchy:tigers_eye', 'pastel:place_pedestal', true).id('integrated_boogaloo:pedestal/tigers_eye');

	pastelPedestal(event, 400, 'basic', 8, 8, 8, 0, 0, 5, [
		'SCS',
		'KPK',
		'SQS'
	], {
		S: 'pastel:polished_amethyst_block',
		C: 'pastel:chiseled_polished_basalt',
		K: 'pastel:notched_polished_basalt',
		Q: 'pastel:polished_basalt_pillar',
		P: 'pastel:pedestal_all_basic'
	}, 'pastel:pedestal_tier_1_structure_placer', 'pastel:craft_cmy_pedestal', true).id('integrated_boogaloo:pedestal/pedestal_tier_1_structure_placer');
	pastelPedestal(event, 400, 'simple', 8, 8, 8, 0, 0, 5, [
		'CSC',
		'QFQ',
		'LLL'
	], {
		C: 'pastel:chiseled_polished_basalt',
		S: 'pastel:polished_amethyst_block',
		Q: 'pastel:polished_basalt_pillar',
		F: 'pastel:fusion_shrine_basalt',
		L: 'pastel:polished_basalt_slab'
	}, 'pastel:fusion_shrine_structure_placer', 'pastel:build_basic_pedestal_structure', true).id('integrated_boogaloo:pedestal/fusion_shrine_structure_placer');
	pastelPedestal(event, 600, 'simple', 16, 16, 16, 0, 0, 10, [
		'RLR',
		'TPT',
		'SQS'
	], {
		R: 'pastel:amethyst_chiseled_basalt',
		L: 'pastel:amethyst_basalt_light',
		T: 'pastel:polished_basalt_crest',
		P: 'pastel:pedestal_onyx',
		S: 'pastel:polished_amethyst_block',
		Q: 'pastel:polished_basalt_pillar'
	}, 'pastel:pedestal_tier_2_structure_placer', 'pastel:craft_onyx_pedestal', true).id('integrated_boogaloo:pedestal/pedestal_tier_2_structure_placer');
	pastelPedestal(event, 600, 'advanced', 16, 16, 16, 0, 4, 10, [
		'ILI',
		'GFG',
		'IBI'
	], {
		I: 'pastel:item_bowl_basalt',
		L: 'pastel:amethyst_basalt_light',
		G: 'pastel:polished_amethyst_block',
		F: 'pastel:enchanter',
		B: 'pastel:liquid_crystal_bucket'
	}, 'pastel:enchanter_structure_placer', 'pastel:midgame/enter_liquid_crystal', true).id('integrated_boogaloo:pedestal/enchanter_structure_placer');
	pastelPedestal(event, 800, 'advanced', 24, 24, 24, 0, 8, 20, [
		'MOM',
		'LPL',
		'TRT'
	], {
		M: 'pastel:moonstone_chiseled_basalt',
		O: 'pastel:onyx_chiseled_basalt',
		L: 'pastel:amethyst_basalt_light',
		P: 'pastel:pedestal_moonstone',
		T: 'pastel:polished_basalt_crest',
		R: 'pastel:amethyst_chiseled_basalt'
	}, 'pastel:pedestal_tier_3_structure_placer', 'pastel:lategame/craft_moonstone_pedestal', true).id('integrated_boogaloo:pedestal/pedestal_tier_3_structure_placer');
});
