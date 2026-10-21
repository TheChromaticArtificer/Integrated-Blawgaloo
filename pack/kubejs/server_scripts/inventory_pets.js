ServerEvents.recipes(event => {
	const BREATH = 'witchery:breath_of_the_goddess';
	function cmyPetRecipe(cyan, magenta, yellow, pattern, key, result) {
		return cmyPedestal(event, 200, cyan, magenta, yellow, 2, pattern, key, result);
	}
	function onyxPetRecipe(cyan, magenta, yellow, black, pattern, key, result) {
		return onyxPedestal(event, 200, cyan, magenta, yellow, black, 2, pattern, key, result);
	}
	function framePetRecipe(ring, feature, result) {
		event.remove({ output: result });
		event.shaped(result, [
			'OFO',
			'ODO',
			'OBO'
		], {
			O: ring,
			F: feature,
			D: 'minecraft:diamond',
			B: BREATH
		});
	}

	replace(event, 'oritech:coal_dust', ['inventorypets:nugget_coal']);
	replace(event, 'oritech:enderic_compound', ['inventorypets:nugget_ender']);
	event.remove({ id: 'inventorypets:coal' });
	event.remove({ id: 'inventorypets:ender_pearl' });
	for (let nugget of ['diamond', 'emerald', 'lapis', 'netherite', 'obsidian']) {
		event.remove({ id: 'inventorypets:nugget_' + nugget });
		event.remove({ id: 'inventorypets:nugget_' + nugget + '_alt' });
	}
	for (let whole of ['diamond', 'emerald', 'lapis_lazuli', 'netherite', 'obsidian']) {
		event.remove({ id: 'inventorypets:' + whole });
	}

	for (let mob of ['blaze', 'creeper', 'enderman', 'ghast', 'iron_golem', 'magma_cube', 'snow_golem', 'spider',
		'chicken', 'cow', 'ocelot', 'pig', 'sheep', 'squid', 'siamese', 'silverfish', 'wolf', 'pufferfish', 'slime',
		'wither', 'flying_saddle']) {
		event.remove({ output: 'inventorypets:pet_' + mob, type: 'minecraft:crafting_shaped' });
	}

	framePetRecipe('#minecraft:planks', 'minecraft:crafting_table', 'inventorypets:pet_crafting_table');
	framePetRecipe('minecraft:cobblestone', 'minecraft:furnace', 'inventorypets:pet_furnace');
	framePetRecipe('minecraft:stick', 'minecraft:torch', 'inventorypets:pet_torch');
	framePetRecipe('#minecraft:planks', 'minecraft:chest', 'inventorypets:pet_chest');
	framePetRecipe('#minecraft:planks', 'minecraft:jukebox', 'inventorypets:pet_jukebox');
	framePetRecipe('#minecraft:wool', '#minecraft:beds', 'inventorypets:pet_bed');
	framePetRecipe('antarchy:seashell', 'minecraft:lily_pad', 'inventorypets:pet_sponge');
	framePetRecipe('minecraft:dirt', 'minecraft:cobblestone', 'inventorypets:pet_dirt');
	framePetRecipe('minecraft:cobblestone', 'minecraft:dirt', 'inventorypets:pet_cobblestone');
	framePetRecipe('minecraft:string', 'minecraft:lead', 'inventorypets:pet_lead');
	framePetRecipe('minecraft:gold_nugget', 'oritech:banana', 'inventorypets:pet_banana');
	framePetRecipe('minecraft:apple', 'minecraft:golden_apple', 'inventorypets:pet_apple');
	event.remove({ output: 'inventorypets:pet_double_chest' });
	event.shapeless('inventorypets:pet_double_chest', ['inventorypets:pet_chest', 'minecraft:chest', BREATH]);
	event.remove({ output: 'inventorypets:pet_april_fool' });
	event.shaped('inventorypets:pet_april_fool', [
		'ORW',
		'ODW',
		'OBW'
	], {
		O: 'minecraft:redstone',
		R: 'minecraft:tripwire_hook',
		W: 'minecraft:red_wool',
		D: 'minecraft:diamond',
		B: BREATH
	});

	event.remove({ output: 'inventorypets:pet_saddle' });
	event.shaped('inventorypets:pet_saddle', [
		'LSL',
		'LBL',
		'L L'
	], {
		L: 'minecraft:leather',
		S: 'minecraft:saddle',
		B: BREATH
	});
	event.remove({ output: 'inventorypets:pet_quiver' });
	event.shaped('inventorypets:pet_quiver', [
		'RRR',
		'LQL',
		'LBL'
	], {
		R: 'minecraft:arrow',
		L: 'minecraft:leather',
		Q: 'supplementaries:quiver',
		B: BREATH
	});
	event.remove({ output: 'inventorypets:pet_house' });
	event.shaped('inventorypets:pet_house', [
		'CPC',
		'WBW',
		'WDW'
	], {
		C: 'minecraft:cobblestone',
		P: 'minecraft:ender_pearl',
		W: '#minecraft:planks',
		D: '#minecraft:doors',
		B: BREATH
	});
	event.remove({ output: 'inventorypets:pet_nether_portal' });
	event.shaped('inventorypets:pet_nether_portal', [
		'OOO',
		'OFO',
		'OBO'
	], {
		O: 'minecraft:obsidian',
		F: 'minecraft:flint_and_steel',
		B: BREATH
	});
	event.remove({ output: 'inventorypets:pet_enchanting_table' });
	event.shaped('inventorypets:pet_enchanting_table', [
		' L ',
		'LEL',
		' B '
	], {
		L: 'minecraft:lapis_lazuli',
		E: 'minecraft:enchanting_table',
		B: BREATH
	});
	event.remove({ output: 'inventorypets:pet_brewing_stand' });
	event.shaped('inventorypets:pet_brewing_stand', [
		' W ',
		'WSW',
		' B '
	], {
		W: 'minecraft:nether_wart',
		S: 'minecraft:brewing_stand',
		B: BREATH
	});
	event.remove({ output: 'inventorypets:pet_heart' });
	event.shaped('inventorypets:pet_heart', [
		' N ',
		'MAM',
		' B '
	], {
		N: 'minecraft:nether_wart',
		M: 'minecraft:glistering_melon_slice',
		A: 'witchery:demon_heart',
		B: BREATH
	});
	event.remove({ output: 'inventorypets:pet_shield' });
	event.shaped('inventorypets:pet_shield', [
		' V ',
		'TST',
		' B '
	], {
		V: 'marvel:vibranium_ingot',
		T: 'antarchy:titanium_ingot',
		S: 'minecraft:shield',
		B: BREATH
	});
	event.remove({ output: 'inventorypets:pet_mooshroom' });
	event.shaped('inventorypets:pet_mooshroom', [
		'FMC',
		'MPC',
		'MBF'
	], {
		B: BREATH,
		F: 'alexscaves:fertilizer',
		M: 'minecraft:red_mushroom',
		C: 'minecraft:bone_block',
		P: 'inventorypets:pet_cow'
	});
	event.remove({ output: 'inventorypets:pet_biome' });
	event.shaped('inventorypets:pet_biome', [
		'GLR',
		'AEU',
		' B '
	], {
		G: 'alexscaves:galena',
		L: 'alexscaves:limestone',
		R: 'alexscaves:radrock',
		A: 'alexscaves:abyssmarine',
		U: 'alexscaves:guanostone',
		E: 'minecraft:compass',
		B: BREATH
	});
	event.remove({ output: 'inventorypets:pet_christmas_tree' });
	event.shaped('inventorypets:pet_christmas_tree', [
		' S ',
		'RTR',
		' B '
	], {
		S: 'antarchy:rainbow_sugar',
		R: 'minecraft:sweet_berries',
		T: '#minecraft:saplings',
		B: BREATH
	});
	event.remove({ output: 'inventorypets:pet_menorah' });
	event.shaped('inventorypets:pet_menorah', [
		'AAA',
		'NIN',
		' B '
	], {
		A: '#supplementaries:candle_holders',
		N: 'minecraft:gold_nugget',
		I: 'minecraft:gold_ingot',
		B: BREATH
	});
	event.remove({ output: 'inventorypets:pet_mishumaa_saba' });
	event.shaped('inventorypets:pet_mishumaa_saba', [
		'AAA',
		'CCC',
		' B '
	], {
		A: '#minecraft:candles',
		C: 'minecraft:polished_cinnabar',
		B: BREATH
	});

	event.remove({ output: 'inventorypets:pet_anvil' });
	cmyPetRecipe(3, 3, 0, [
		'TTT',
		' A ',
		'D B'
	], {
		T: 'antarchy:titanium_ingot',
		A: 'minecraft:anvil',
		D: 'minecraft:diamond',
		B: BREATH
	}, 'inventorypets:pet_anvil');
	event.remove({ output: 'inventorypets:pet_end_portal' });
	cmyPetRecipe(0, 2, 3, [
		'OEO',
		'EBE',
		'OEO'
	], {
		O: 'minecraft:end_stone',
		E: 'minecraft:ender_eye',
		B: BREATH
	}, 'inventorypets:pet_end_portal');
	event.remove({ output: 'inventorypets:pet_sated_chest' });
	cmyPetRecipe(5, 0, 0, [
		'   ',
		'ABC',
		'   '
	], {
		C: BREATH,
		A: 'inventorypets:pet_chest',
		B: 'travelersbackpack:diamond'
	}, 'inventorypets:pet_sated_chest');
	event.remove({ output: 'inventorypets:pet_sated_double_chest' });
	cmyPetRecipe(5, 0, 0, [
		'   ',
		'ABC',
		'   '
	], {
		C: BREATH,
		A: 'inventorypets:pet_double_chest',
		B: 'travelersbackpack:diamond'
	}, 'inventorypets:pet_sated_double_chest');
	cmyPetRecipe(5, 0, 0, [
		'   ',
		'ABC',
		'   '
	], {
		C: BREATH,
		A: 'inventorypets:pet_sated_chest',
		B: 'minecraft:chest'
	}, 'inventorypets:pet_sated_double_chest');
	event.remove({ output: 'inventorypets:pet_pingot' });
	cmyPetRecipe(0, 3, 2, [
		'AEB',
		'CDC',
		'   '
	], {
		A: 'alexscaves:scarlet_magnet',
		B: 'alexscaves:azure_magnet',
		C: 'oritech:magnetic_coil',
		D: 'minecraft:netherite_ingot',
		E: BREATH
	}, 'inventorypets:pet_pingot');
	event.remove({ output: 'inventorypets:pet_dingot' });
	cmyPetRecipe(3, 5, 3, [
		'TPT',
		'UGU',
		' B '
	], {
		T: 'antarchy:titanium_ingot',
		P: 'minecraft:compass',
		U: 'antarchy:uranium_ingot',
		G: 'minecraft:spyglass',
		B: BREATH
	}, 'inventorypets:pet_dingot');
	event.remove({ output: 'inventorypets:pet_mickerson' });
	cmyPetRecipe(0, 0, 5, [
		'CAC',
		'CBC',
		'CDC'
	], {
		A: 'antarchy:primordial_scute',
		B: 'antarchy:blood_crystal_leggings',
		C: 'antarchy:bluestone_block',
		D: BREATH
	}, 'inventorypets:pet_mickerson');
	event.remove({ output: 'inventorypets:pet_dubstep' });
	cmyPetRecipe(0, 0, 5, [
		'ABA',
		'CDC',
		'AAA'
	], {
		A: 'antarchy:nyxite',
		B: 'minecraft:sculk_shrieker',
		C: 'marvel:vibranium_ingot',
		D: BREATH
	}, 'inventorypets:pet_dubstep');

	event.remove({ output: 'inventorypets:pet_loot' });
	onyxPetRecipe(5, 0, 0, 5, [
		' K ',
		'PUP',
		'DBD'
	], {
		K: 'minecraft:gold_block',
		P: 'iceandfire:gold_pile',
		U: 'minecraft:bundle',
		D: 'minecraft:diamond',
		B: BREATH
	}, 'inventorypets:pet_loot');
	event.remove({ output: 'inventorypets:pet_illuminati' });
	onyxPetRecipe(5, 0, 0, 10, [
		' U ',
		'UXU',
		'RBR'
	], {
		U: 'antarchy:uranium_ingot',
		X: 'antarchy:lucid_eye',
		B: BREATH,
		R: '#c:ores/randomium',
	}, 'inventorypets:pet_illuminati');
	event.remove({ output: 'inventorypets:pet_juggernaut' });
	onyxPetRecipe(0, 0, 5, 7, [
		'CSC',
		'BGH',
		'NUT'
	], {
		B: BREATH,
		C: 'minecraft:cinnabar',
		S: 'minecraft:nether_star',
		G: 'minecraft:totem_of_undying',
		H: 'marvel:vibranium_ingot',
		N: 'minecraft:netherite_ingot',
		U: 'antarchy:uranium_ingot',
		T: 'antarchy:titanium_ingot'
	}, 'inventorypets:pet_juggernaut');
	event.remove({ output: 'inventorypets:pet_cloud' });
	onyxPetRecipe(0, 0, 0, 10, [
		'AFA',
		'ALA',
		'ABA'
	], {
		A: 'antarchy:cloud_bucket',
		F: 'antarchy:king_scale',
		L: 'iceandfire:lightning_dragon_blood',
		B: BREATH
	}, 'inventorypets:pet_cloud');
	event.remove({ output: 'inventorypets:pet_sun' });
	onyxPetRecipe(0, 0, 9, 1, [
		'ATA',
		'ASA',
		'ABA'
	], {
		A: 'antarchy:tigers_eye',
		T: 'antarchy:king_scale',
		S: 'minecraft:nether_star',
		B: BREATH
	}, 'inventorypets:pet_sun');
	event.remove({ output: 'inventorypets:pet_black_hole' });
	onyxPetRecipe(0, 0, 0, 10, [
		'ABA',
		'CDE',
		'AFA'
	], {
		A: 'minecraft:tinted_glass',
		B: 'antarchy:gravity_gun',
		C: 'alexscaves:azure_magnet',
		D: 'pastel:black_hole_chest',
		E: 'alexscaves:scarlet_magnet',
		F: BREATH
	}, 'inventorypets:pet_black_hole');
	event.remove({ output: 'inventorypets:pet_purplicious_cow' });
	cmyPetRecipe(0, 4, 0, [
		'AB ',
		'CDE',
		'   '
	], {
		E: BREATH,
		A: 'inventorypets:pet_cow',
		B: 'minecraft:lava_bucket',
		C: 'antarchy:titanium_ingot',
		D: 'pastel:purple_pigment'
	}, 'inventorypets:pet_purplicious_cow');
	event.remove({ output: 'inventorypets:pet_qcm' });
	onyxPetRecipe(0, 0, 5, 7, [
		'ABA',
		'NGN',
		'CDC'
	], {
		A: 'antarchy:titanium_ingot',
		B: 'antos:computer',
		N: 'minecraft:netherite_ingot',
		G: BREATH,
		C: 'antarchy:uranium_ingot',
		D: 'minecraft:end_crystal'
	}, 'inventorypets:pet_qcm');
	event.remove({ output: 'inventorypets:pet_cheetah' });
	cmyPetRecipe(0, 3, 3, [
		' C ',
		'AEB',
		' DG'
	], {
		G: BREATH,
		A: 'inventorypets:pet_ocelot',
		B: 'inventorypets:pet_siamese',
		C: 'oritech:machine_speed_addon',
		D: 'mts:mtsofficialpack.sign_speedlimit',
		E: 'minecraft:cooked_chicken'
	}, 'inventorypets:pet_cheetah');
	event.remove({ output: 'inventorypets:pet_pacman' });
	cmyPetRecipe(2, 3, 3, [
		'PSP',
		'TCT',
		'PGP'
	], {
		G: BREATH,
		P: 'antarchy:popcorn',
		S: 'alexscaves:sweet_tooth',
		T: 'antarchy:titanium_ingot',
		C: 'minecraft:cake'
	}, 'inventorypets:pet_pacman');
	event.shapeless('minecraft:experience_bottle', ['#integrated_boogaloo:pixie_jars']);
	event.remove({ output: 'inventorypets:pet_pixie' });
	onyxPetRecipe(0, 2, 1, 1, [
		'   ',
		'ABA',
		' C '
	], {
		A: 'antarchy:brutalfly_wing',
		B: '#integrated_boogaloo:pixie_jars',
		C: BREATH
	}, 'inventorypets:pet_pixie');
	event.remove({ output: 'inventorypets:pet_moon' });
	onyxPetRecipe(0, 4, 0, 4, [
		'AAB',
		'ACB',
		'AGB'
	], {
		G: BREATH,
		A: 'pastel:moonstone_shard',
		B: 'pastel:onyx_shard',
		C: 'antarchy:lucid_eye'
	}, 'inventorypets:pet_moon');

	event.remove({ output: 'inventorypets:item_petrifier' });
	event.shapeless('inventorypets:item_petrifier', ['#inventorypets:legendary_pets', 'oritech:wrench']);
	event.shaped('inventorypets:patreon_shirt', [
		'A A',
		'BCB',
		'BBB'
	], {
		A: 'witchery:tormented_twine',
		B: '#minecraft:wool',
		C: 'inventorypets:pet_slime'
	});
})
