ServerEvents.recipes(event => {
	event.remove({ id: 'alexscaves:uranium_rod' });
	event.shaped('alexscaves:uranium_rod', [
		'UIU',
		'UBU',
		'UIU'
	], {
		U: 'alexscaves:uranium',
		I: '#c:ingots/iron',
		B: 'minecraft:blaze_rod'
	}).id('kubejs:alexscaves/uranium_rod');
	event.remove({ id: 'pastel:enchantment_upgrade/minecraft/protection' });
	event.remove({ id: 'pastel:enchantment_upgrade/minecraft/blast_protection' });
	event.remove({ id: 'pastel:enchantment_upgrade/minecraft/projectile_protection' });
	event.remove({ id: 'pastel:enchantment_upgrade/minecraft/fire_protection' });
	event.remove({ output: 'alexscaves:shadow_silk' });
	witcherySpinningWheel(event, '4x alexscaves:shadow_silk', 5, 100, ['alexscaves:pure_darkness', 'alexscaves:dark_tatters', 'alexscaves:dark_tatters', 'alexscaves:moth_dust']);
	event.shapeless('alexscaves:metal_swarf', ['2x minecraft:gravel', 'minecraft:raw_iron', 'minecraft:iron_ingot']);
	event.shapeless('4x antarchy:rainbow_sugar', ['alexscaves:radiant_essence']);
})
