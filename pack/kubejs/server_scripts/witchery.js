ServerEvents.recipes(event => {
	event.replaceInput({}, 'witchery:refined_evil', 'alexscaves:pure_darkness');
	event.replaceOutput({}, 'witchery:refined_evil', 'alexscaves:pure_darkness');
	event.replaceInput({}, 'witchery:spectral_dust', 'iceandfire:ectoplasm');
	event.replaceOutput({}, 'witchery:spectral_dust', 'iceandfire:ectoplasm');
	function mkCandle(colour) {
		event.remove({ output: 'witchery:' + colour + '_iron_candelabra' });
		event.shaped('witchery:' + colour + '_iron_candelabra', [
			'AAA',
			'BCB',
			' B '
		], {
			A: 'supplementaries:candle_holder_' + colour,
			B: 'minecraft:iron_ingot',
			C: 'kubejs:attuned_citrine'
		}).id('integrated_boogaloo:witchery/' + colour + '_iron_candelabra')
	}
	function attune(cyan, magenta, yellow, output) {
		return pastelPedestal(event, 200, 'basic', cyan, magenta, yellow, 0, 0, 2, [
			' A ',
			' B '
		], {
			A: 'witchery:whiff_of_magic',
			B: 'minecraft:lava_bucket'
		}, output, 'pastel:place_pedestal', false);
	}
	replace(event, 'alexscaves:vesper_wing', ['witchery:wool_of_bat']);
	event.remove({ output: 'witchery:deepslate_altar_block' });
	event.shaped('witchery:deepslate_altar_block', [
		'ABC',
		'DED',
		'DED'
	], {
		A: 'witchery:breath_of_the_goddess',
		B: 'minecraft:potion[potion_contents={potion:"minecraft:water"}]',
		C: 'witchery:exhale_of_the_horned_one',
		D: 'minecraft:deepslate_bricks',
		E: '#witchery:rowan_logs'
	}).id('witchery:deepslate_altar_block');
	event.remove({ output: 'witchery:cauldron' });
	event.shapeless('witchery:cauldron', ['minecraft:cauldron', 'minecraft:campfire']).id('witchery:cauldron');
	event.remove({ output: 'witchery:iron_witches_oven_fume_extension' });
	event.shaped('witchery:iron_witches_oven_fume_extension', [
		'ABA',
		'ACA',
		'DED'
	], {
		A: 'minecraft:iron_ingot',
		B: 'minecraft:lava_bucket',
		C: 'minecraft:glowstone',
		D: 'minecraft:iron_block',
		E: 'minecraft:iron_bars'
	}).id('witchery:iron_witches_oven_fume_extension');
	event.remove({ output: 'witchery:copper_witches_oven_fume_extension' });
	event.shaped('witchery:copper_witches_oven_fume_extension', [
		'ABA',
		'ACA',
		'DED'
	], {
		A: 'minecraft:copper_ingot',
		B: 'minecraft:lava_bucket',
		C: 'minecraft:glowstone',
		D: 'minecraft:copper_block',
		E: 'minecraft:copper_trapdoor'
	}).id('witchery:copper_witches_oven_fume_extension');
	event.remove({ output: 'witchery:iron_witches_oven' });
	event.shaped('witchery:iron_witches_oven', [
		' A ',
		'BCB',
		'BAB'
	], {
		A: 'minecraft:iron_bars',
		B: 'minecraft:iron_ingot',
		C: 'minecraft:blast_furnace'
	}).id('integrated_boogaloo:witchery/iron_witches_oven');
	event.remove({ output: 'witchery:copper_witches_oven' });
	event.shaped('witchery:copper_witches_oven', [
		' A ',
		'BCB',
		'BAB'
	], {
		A: 'minecraft:copper_trapdoor',
		B: 'minecraft:copper_ingot',
		C: 'minecraft:blast_furnace'
	}).id('integrated_boogaloo:witchery/copper_witches_oven');
	event.remove({ output: 'witchery:distillery' });
	event.shaped('witchery:distillery', [
		'ABA',
		' B ',
		'CDC'
	], {
		A: 'witchery:jar',
		B: 'minecraft:copper_block',
		C: 'minecraft:deepslate_bricks',
		D: 'kubejs:attuned_topaz'
	}).id('integrated_boogaloo:witchery/distillery');
	event.remove({ output: 'witchery:brazier' });
	event.shaped('witchery:brazier', [
		'   ',
		'ABA',
		'CCC'
	], {
		A: 'minecraft:iron_bars',
		B: 'witchery:necromantic_stone',
		C: 'minecraft:iron_ingot'
	}).id('integrated_boogaloo:witchery/brazier');
	event.remove({ output: 'witchery:spinning_wheel' });
	event.shaped('witchery:spinning_wheel', [
		'   ',
		' AB',
		'CDB'
	], {
		A: 'alexscaves:copper_valve',
		B: 'witchery:hawthorn_log',
		C: 'witchery:hawthorn_fence',
		D: 'witchery:hawthorn_fence'
	}).id('witchery:spinning_wheel');
	attune(0, 0, 5, 'kubejs:attuned_citrine').id('integrated_boogaloo:witchery/attuned_citrine');
	attune(5, 0, 0, 'kubejs:attuned_topaz').id('integrated_boogaloo:witchery/attuned_topaz');
	event.remove({ output: 'witchery:attuned_stone' });
	attune(0, 5, 0, 'witchery:attuned_stone').id('integrated_boogaloo:witchery/attuned_stone');
	onyxPedestal(event, 200, 0, 0, 0, 5, 2, [
		' A ',
		' B '
	], {
		A: 'witchery:whiff_of_magic',
		B: 'minecraft:lava_bucket'
	}, 'kubejs:attuned_onyx').id('integrated_boogaloo:witchery/attuned_onyx');
	onyxPedestal(event, 200, 3, 3, 3, 0, 2, [
		' A ',
		' B '
	], {
		A: 'witchery:whiff_of_magic',
		B: 'witchery:breath_of_the_goddess'
	}, 'kubejs:attuned_moonstone').id('integrated_boogaloo:witchery/attuned_moonstone');
	for (let colour of ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink']) {
		mkCandle(colour);
	}
	event.remove({ output: 'witchery:iron_candelabra' });
	event.shaped('witchery:iron_candelabra', [
		'AAA',
		'BCB',
		' B '
	], {
		A: 'supplementaries:candle_holder',
		B: 'minecraft:iron_ingot',
		C: 'kubejs:attuned_citrine'
	}).id('integrated_boogaloo:witchery/iron_candelabra');
	event.remove({ output: 'witchery:eternal_catalyst' });
	event.shapeless('witchery:eternal_catalyst', ['2x kubejs:attuned_moonstone', 'iceandfire:ectoplasm', 'antarchy:brutalfly_wing']).id('integrated_boogaloo:witchery/eternal_catalyst');
	event.shapeless('2x witchery:eternal_catalyst', ['2x kubejs:attuned_moonstone', 'iceandfire:ectoplasm', 'witchery:eternal_catalyst']).id('integrated_boogaloo:witchery/eternal_catalyst_duplication');
	event.remove({ output: 'witchery:werewolf_altar' });
	event.shaped('witchery:werewolf_altar', [
		'ABA',
		'BCB',
		'BDB'
	], {
		A: 'kubejs:attuned_moonstone',
		B: 'minecraft:stone',
		C: 'witchery:wolfsbane',
		D: 'witchery:tongue_of_dog'
	}).id('witchery:werewolf_altar');
	event.remove({ id: 'witchery:oven_cooking/foul_fume_2' });
	for (let sapling of ['minecraft:acacia_sapling', 'alexscaves:pewen_sapling', 'alexscaves:ancient_sapling', 'minecraft:pale_oak_sapling', 'iceandfire:dreadwood_sapling', 'dimdoors:driftwood_sapling', 'alexscaves:thornwood_sapling']) {
		witcheryOven(event, sapling, 'witchery:reek_of_misfortune').id('integrated_boogaloo:witchery/oven/' + sapling.split(':')[1]);
	}
	witcheryOven(event, '#pastel:colored_saplings', 'witchery:whiff_of_magic').id('integrated_boogaloo:witchery/oven/colored_saplings');
	witcheryOven(event, 'antarchy:peach_sapling', 'witchery:breath_of_the_goddess').id('integrated_boogaloo:witchery/oven/peach_sapling');
	witcheryOven(event, 'antarchy:duplicator_sapling', 'witchery:exhale_of_the_horned_one').id('integrated_boogaloo:witchery/oven/duplicator_sapling');
	event.remove({ output: 'witchery:armor_protection_poppet' });
	event.shapeless('witchery:armor_protection_poppet', ['minecraft:leather_helmet', 'minecraft:iron_chestplate', 'minecraft:leather_leggings', 'witchery:reek_of_misfortune', '2x witchery:drop_of_luck', 'witchery:phantom_vapor', 'witchery:poppet']).id('witchery:armor_protection_poppet');
	event.remove({ output: 'witchery:hunger_protection_poppet' });
	event.shapeless('witchery:hunger_protection_poppet', ['4x minecraft:carrot', 'witchery:poppet']).id('witchery:hunger_protection_poppet');
	event.remove({ output: 'witchery:death_protection_poppet' });
	event.shapeless('witchery:death_protection_poppet', ['witchery:drop_of_luck', 'witchery:phantom_vapor', 'iceandfire:troll_skull', 'minecraft:totem_of_undying', 'witchery:poppet']).id('witchery:death_protection_poppet');
	event.remove({ output: 'witchery:vampiric_poppet' });
	event.shaped('witchery:vampiric_poppet', [
		'DAD',
		'BCB',
		' E '
	], {
		A: 'witchery:exhale_of_the_horned_one',
		B: '#integrated_boogaloo:fangs',
		C: 'witchery:poppet',
		D: 'alexscaves:vesper_wing',
		E: 'witchery:phantom_vapor'
	}).id('witchery:vampiric_poppet');
	event.remove({ output: 'witchery:voodoo_protection_poppet' });
	event.shaped('witchery:voodoo_protection_poppet', [
		'ABC',
		' DE',
		'CFA'
	], {
		A: '#minecraft:small_flowers',
		B: 'witchery:belladonna_flower',
		C: '#c:mushrooms',
		D: 'witchery:poppet',
		E: 'minecraft:shield',
		F: 'witchery:mandrake_root'
	}).id('witchery:voodoo_protection_poppet');
	event.remove({ output: 'witchery:apple_of_sleeping' });
	event.shaped('witchery:apple_of_sleeping', [
		'ABA',
		'CDC',
		'BEB'
	], {
		A: 'antarchy:dream_sand',
		B: 'witchery:mutandis',
		C: 'witchery:reek_of_misfortune',
		D: 'antarchy:blood_crystal_apple',
		E: 'witchery:brew_of_sleeping'
	}).id('witchery:apple_of_sleeping');
	event.remove({ output: 'witchery:dream_weaver' });
	event.shaped('witchery:dream_weaver', [
		' A ',
		'BCB',
		'B B'
	], {
		A: 'witchery:phantom_vapor',
		B: 'witchery:tormented_twine',
		C: 'witchery:dreamweaver_charm'
	}).id('witchery:dream_weaver');
	event.remove({ output: 'witchery:blood_crucible' });
	event.shaped('witchery:blood_crucible', [
		'ABA',
		'ACA',
		' D '
	], {
		A: 'minecraft:iron_ingot',
		B: 'witchery:wine_glass',
		C: 'antarchy:blood_crystal_shard',
		D: 'witchery:deepslate_altar_block'
	}).id('witchery:blood_crucible');
	event.remove({ output: 'witchery:cane_sword' });
	event.shaped('witchery:cane_sword', [
		' AB',
		'ACA',
		'DA '
	], {
		A: 'witchery:woven_cruor',
		B: 'alexscaves:candy_cane_pole',
		C: 'minecraft:diamond_sword',
		D: '#integrated_boogaloo:pixie_jars'
	}).id('witchery:cane_sword');
	event.remove({ output: 'witchery:scarecrow' });
	event.shaped('witchery:scarecrow', [
		' A ',
		' B ',
		' C '
	], {
		A: 'minecraft:carved_pumpkin',
		B: 'inventorypets:patreon_shirt',
		C: 'witchery:hawthorn_log'
	}).id('integrated_boogaloo:witchery/scarecrow');
	event.remove({ output: 'witchery:arthana' });
	event.shapeless('witchery:arthana', ['minecraft:golden_sword', 'minecraft:emerald', 'minecraft:bone']).id('witchery:arthana');
	event.remove({ output: 'witchery:bloodstone_pendant' });
	event.shapeless('witchery:bloodstone_pendant', ['alexscaves:vesper_wing', 'witchery:impregnated_fabric', 'witchery:attuned_stone', '#iceandfire:dragon_bloods']).id('integrated_boogaloo:witchery/bloodstone_pendant');
	replace(event, 'iceandfire:silver_ingot', ['witchery:koboldite_ingot']);
	replace(event, 'iceandfire:silver_nugget', ['witchery:koboldite_nugget']);
	event.remove({ output: 'witchery:koboldite_pentacle' });
	event.shaped('witchery:koboldite_pentacle', [
		'ABA',
		'B B',
		'ABA'
	], {
		A: 'iceandfire:silver_ingot',
		B: 'iceandfire:silver_nugget'
	}).id('integrated_boogaloo:witchery/koboldite_pentacle');
	event.shapeless('witchery:tarot_deck', ['3x minecraft:paper', 'witchery:whiff_of_magic', 'witchery:attuned_stone']).id('integrated_boogaloo:witchery/tarot_deck');
})
