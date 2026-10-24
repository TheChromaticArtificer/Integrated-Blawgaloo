const removedDimDoorsItems = [
	'dimdoors:tesselating_loom',
	'dimdoors:rift_signature',
	'dimdoors:stabilized_rift_signature',
	'dimdoors:gold_door',
	'dimdoors:item_ag_dim_dimdoors_gold_door'
]

ServerEvents.recipes(event => {
	removedDimDoorsItems.forEach(item => event.remove({ output: item }))

	for (let pair of [
		{ output: 'dimdoors:stable_fabric', input: 'witchery:woven_cruor' },
		{ output: 'dimdoors:white_fabric', input: 'minecraft:white_wool' },
		{ output: 'dimdoors:orange_fabric', input: 'minecraft:orange_wool' },
		{ output: 'dimdoors:magenta_fabric', input: 'minecraft:magenta_wool' },
		{ output: 'dimdoors:light_blue_fabric', input: 'minecraft:light_blue_wool' },
		{ output: 'dimdoors:yellow_fabric', input: 'minecraft:yellow_wool' },
		{ output: 'dimdoors:lime_fabric', input: 'minecraft:lime_wool' },
		{ output: 'dimdoors:pink_fabric', input: 'minecraft:pink_wool' },
		{ output: 'dimdoors:gray_fabric', input: 'minecraft:gray_wool' },
		{ output: 'dimdoors:light_gray_fabric', input: 'minecraft:light_gray_wool' },
		{ output: 'dimdoors:cyan_fabric', input: 'minecraft:cyan_wool' },
		{ output: 'dimdoors:purple_fabric', input: 'minecraft:purple_wool' },
		{ output: 'dimdoors:blue_fabric', input: 'minecraft:blue_wool' },
		{ output: 'dimdoors:brown_fabric', input: 'minecraft:brown_wool' },
		{ output: 'dimdoors:green_fabric', input: 'minecraft:green_wool' },
		{ output: 'dimdoors:red_fabric', input: 'minecraft:red_wool' },
		{ output: 'dimdoors:black_fabric', input: 'minecraft:black_wool' }
	]) {
		event.remove({ output: pair.output });
		witcherySpinningWheel(event, pair.output, 5, 100, [pair.input, 'dimdoors:world_thread', 'dimdoors:world_thread', 'dimdoors:world_thread']);
	}

	event.remove({ type: 'dimdoors:shaped_tesselating' });
	event.remove({ type: 'dimdoors:shapeless_tesselating' });
	for (let recipe of [
		{ output: 'dimdoors:liminal_lint', inputs: ['4x dimdoors:frayed_filament'] },
		{ output: 'dimdoors:enduring_fibers', inputs: ['4x dimdoors:infrangible_fiber'] },
		{ output: 'dimdoors:fabric_of_finality', inputs: ['2x dimdoors:enduring_fibers', 'minecraft:dragon_breath'] },
		{ output: 'dimdoors:fuzzy_fireball', inputs: ['2x dimdoors:liminal_lint', 'minecraft:fire_charge'] },
		{ output: 'dimdoors:rift_pearl', inputs: ['dimdoors:stable_fabric', 'minecraft:ender_pearl'] },
		{ output: 'dimdoors:reality_sponge', inputs: ['5x dimdoors:stable_fabric', '4x dimdoors:infrangible_fiber'] },
		{ output: 'dimdoors:rift_blade', inputs: ['minecraft:iron_sword', '2x minecraft:ender_pearl'], time: 200 },
		{ output: 'dimdoors:world_thread_helmet', inputs: ['5x dimdoors:world_thread'] },
		{ output: 'dimdoors:world_thread_chestplate', inputs: ['8x dimdoors:world_thread'] },
		{ output: 'dimdoors:world_thread_leggings', inputs: ['7x dimdoors:world_thread'] },
		{ output: 'dimdoors:world_thread_boots', inputs: ['4x dimdoors:world_thread'] },
		{ output: 'dimdoors:garment_of_reality_helmet', inputs: ['5x dimdoors:stable_fabric', 'dimdoors:infrangible_fiber'] },
		{ output: 'dimdoors:garment_of_reality_chestplate', inputs: ['8x dimdoors:stable_fabric', 'dimdoors:infrangible_fiber'] },
		{ output: 'dimdoors:garment_of_reality_leggings', inputs: ['7x dimdoors:stable_fabric', 'dimdoors:infrangible_fiber'] },
		{ output: 'dimdoors:garment_of_reality_boots', inputs: ['4x dimdoors:stable_fabric', 'dimdoors:infrangible_fiber'] }
	]) {
		witcherySpinningWheel(event, recipe.output, 5, recipe.time || 100, recipe.inputs);
	}

	for (let pair of [
		{ output: 'dimdoors:item_ag_dim_minecraft_oak_door', door: 'minecraft:oak_door' },
		{ output: 'dimdoors:item_ag_dim_minecraft_oak_trapdoor', door: 'minecraft:oak_trapdoor' },
		{ output: 'dimdoors:item_ag_dim_minecraft_iron_door', door: 'minecraft:iron_door' },
		{ output: 'dimdoors:item_ag_dim_dimdoors_quartz_door', door: 'dimdoors:quartz_door' },
		{ output: 'dimdoors:item_ag_dim_supplementaries_gold_door', door: 'supplementaries:gold_door' },
		{ output: 'dimdoors:item_ag_dim_dimdoors_stone_door', door: 'dimdoors:stone_door' },
		{ output: 'dimdoors:item_ag_dim_dimdoors_amalgam_door', door: 'dimdoors:amalgam_door' }
	]) {
		event.remove({ output: pair.output });
		event.shaped(pair.output, [
			'ADL'
		], {
			A: 'antarchy:antimetal',
			D: pair.door,
			L: 'antarchy:lucid_pearl'
		});
	}

	event.remove({ id: 'antarchy:portal_gun' });
	event.shaped('antarchy:portal_gun', [
		' TR',
		'TAT',
		'RT '
	], {
		T: 'antarchy:titanium_ingot',
		A: 'antarchy:antimetal',
		R: 'dimdoors:rift_pearl'
	}).id('kubejs:portal_gun');
})
