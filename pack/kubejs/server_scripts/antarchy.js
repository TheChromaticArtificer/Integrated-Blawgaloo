ServerEvents.recipes(event => {
	replace(event, 'antarchy:titanium_block', ['marvel:titanium_block']),
		replace(event, 'antarchy:raw_titanium_block', ['marvel:raw_titanium_block']),
		replace(event, 'antarchy:raw_titanium', ['marvel:raw_titanium']),
		replace(event, 'antarchy:titanium_ingot', ['marvel:titanium_ingot']),
		replace(event, 'antarchy:titanium_nugget', ['marvel:titanium_nugget']),
		replace(event, 'antarchy:raw_uranium', ['oritech:raw_uranium']),
		replace(event, 'antarchy:raw_uranium_block', ['oritech:raw_uranium_block']),
		replace(event, 'antarchy:uranium_ingot', ['oritech:uranium_gem']);
	event.remove({ output: 'antarchy:rainbow_sugar' });
	onyxPedestal(event, 200, 2, 2, 2, 1, 5, [
		'ROY',
		'SUH',
		'LBP'
	], {
		R: 'pastel:red_pigment',
		O: 'pastel:orange_pigment',
		Y: 'pastel:yellow_pigment',
		L: 'pastel:lime_pigment',
		B: 'pastel:blue_pigment',
		P: 'pastel:purple_pigment',
		S: 'minecraft:sugar',
		U: 'antarchy:uranium_nugget',
		H: 'antarchy:high_fructose_corn_syrup'
	}, '2x antarchy:rainbow_sugar').id('integrated_boogaloo:antarchy/rainbow_sugar');
	event.remove({ output: 'antarchy:big_bertha_blade' });
	event.remove({ output: 'antarchy:big_bertha_hilt' });
	event.remove({ output: 'antarchy:big_bertha_handle' });

	event.shaped('antarchy:big_bertha_blade', [
		'HFG',
		'CDE',
		'ABI'
	], {
		A: 'antarchy:lucid_eye',
		B: 'antarchy:basilisk_fang',
		C: 'antarchy:emperor_scorpion_stinger',
		D: 'antarchy:ultimate_sword',
		E: 'antarchy:stratoshark_fin',
		F: 'iceandfire:hydra_fang',
		G: 'antarchy:kraken_tooth',
		H: 'alexscaves:heavyweight',
		I: 'alexscaves:pure_darkness'
	});

	event.shaped('antarchy:big_bertha_hilt', [
		'ACI',
		'DBG',
		'HEF'
	], {
		A: 'antarchy:nightmare_scale',
		B: 'antarchy:molevore_nose',
		C: 'antarchy:springbug_leg',
		D: 'witchery:demon_heart',
		E: 'antarchy:primordial_scute',
		F: 'alexscaves:sweet_tooth',
		G: 'antarchy:hercules_horn',
		H: 'antarchy:flytrap_goo',
		I: 'alexscaves:tremorsaurus_egg'
	});

	event.shaped('antarchy:big_bertha_handle', [
		'EFG',
		'CDI',
		'ABJ'
	], {
		A: 'antarchy:mantis_claw',
		B: 'antarchy:brutalfly_wing',
		C: 'iceandfire:sea_serpent_fang',
		D: 'antarchy:cooked_corndog',
		E: 'antarchy:manticore_wing',
		F: 'iceandfire:cyclops_eye',
		G: 'alexscaves:raygun',
		I: 'alexscaves:immortal_embryo',
		J: 'kubejs:red_death_fang'
	});
}
);
