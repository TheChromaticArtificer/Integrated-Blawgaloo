function replace(event, replacer, replacees) {
	for (let replacee of replacees) {
		event.replaceInput({ input: replacee },
			replacee,
			replacer
		)
		event.replaceOutput({ input: replacee },
			replacee,
			replacer
		)
	}
}

function getCount(itemString) {
	let match = itemString.match(/[0-9]+x/g);
	let count = 1;
	let itemId = itemString.replace(/[0-9]+x /g, "");
	if (match != null && match.length > 0) {
		count = parseInt(match[0].replace("x", ""));
	}
	return { itemId: itemId, count: count };
}

function pastelPedestal(event, time, tier, cyan, magenta, yellow, white, black, exp, pattern, key, result, advancement, disableYieldUpgrades) {
	let idAndCount = getCount(result);
	return event.custom(
		{
			"type": "pastel:pedestal",
			"time": time,
			"tier": tier,
			"colors": {
				"pastel:cyan": cyan,
				"pastel:magenta": magenta,
				"pastel:yellow": yellow,
				"pastel:white": white,
				"pastel:black": black
			},
			"experience": exp,
			"pattern": pattern,
			"key": key,
			"result": {
				"id": idAndCount.itemId,
				"count": idAndCount.count
			},
			"required_advancement": advancement,
			"disable_yield_upgrades": disableYieldUpgrades
		}
	)
}

function cmyPedestal(event, time, cyan, magenta, yellow, exp, pattern, key, result) {
	return pastelPedestal(event, time, "simple", cyan, magenta, yellow, 0, 0, exp, pattern, key, result, "pastel:build_basic_pedestal_structure", false)
}

function onyxPedestal(event, time, cyan, magenta, yellow, black, exp, pattern, key, result) {
	return pastelPedestal(event, time, "advanced", cyan, magenta, yellow, 0, black, exp, pattern, key, result, "pastel:hidden/collect_pigment/black", false)
}

function moonstonePedestal(event, time, cyan, magenta, yellow, black, white, exp, pattern, key, result) {
	return pastelPedestal(event, time, "complex", cyan, magenta, yellow, white, black, exp, pattern, key, result, "pastel:lategame/build_complex_pedestal_structure", false)
}

function witcheryOven(event, input, output) {
	let ingredient;
	let match = input.match(/#/g);
	if (match != null && match.length > 0) {
		ingredient = { "tag": input.replace(/#/g, "") };
	} else {
		ingredient = { "item": input };
	}
	return event.custom(
		{
			"type": "witchery:oven",
			"cookingTime": 85,
			"experience": 0.5,
			"extraIngredient": {
				"item": "witchery:jar"
			},
			"extraOutput": {
				"id": output
			},
			"extraOutputChance": 0.5,
			"ingredient": ingredient,
			"result": {
				"id": "witchery:wood_ash"
			}
		}

	);
}

function witcherySpinningWheel(event, outputs, altarPower, cookingTime, inputs) {

	let idAndCount = getCount(outputs);
	return event.custom({
		"type": "witchery:spinning_wheel",
		"altar_power": altarPower,
		"cooking_time": cookingTime,
		"input_items": inputs.map(item => {
			let itemIdAndCount = getCount(item);
			return {
				"count": itemIdAndCount.count,
				"id": itemIdAndCount.itemId
			};
		}),
		"output_item": {
			"count": idAndCount.count,
			"id": idAndCount.itemId
		}
	});
}
