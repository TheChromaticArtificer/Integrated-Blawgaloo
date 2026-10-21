ServerEvents.recipes(event => {
	event.remove({ output: 'iceandfire:silver_ingot', input: 'iceandfire:silver_nugget' });
	event.remove({ output: 'iceandfire:silver_ingot', type: 'minecraft:blasting' });
	event.remove({ output: 'iceandfire:silver_ingot', type: 'minecraft:smelting' });
	event.recipes.oritech.pulverizer().itemInputs('iceandfire:shiny_scales').itemOutputs('antarchy:rainbow_sugar').time(100);
	event.recipes.oritech.pulverizer().itemInputs('iceandfire:ectoplasm').itemOutputs('scguns:peal').time(100);
	event.shapeless('pastel:ash', Array(9).fill('#iceandfire:charred_blocks')).id('kubejs:iceandfire/ash_from_charred_blocks');
})
