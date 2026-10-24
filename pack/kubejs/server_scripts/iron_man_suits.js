ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_1_helmet" })
	event.remove({ output: "marvel:iron_man_mark_1_chestplate" })
	event.remove({ output: "marvel:iron_man_mark_1_leggings" })
	event.remove({ output: "marvel:iron_man_mark_1_boots" })

	event.shaped(
		Item.of('marvel:iron_man_mark_1_helmet'),
		[
			'CCC',
			'AAA',
			'ABA'
		],
		{
			A: "minecraft:iron_ingot",
			B: "oritech:machine_core_1",
			C: "minecraft:air"
		}
	)

	event.shaped(
		Item.of('marvel:iron_man_mark_1_chestplate'),
		[
			'AEA',
			'CDC',
			'ABA'
		],
		{
			A: "minecraft:iron_ingot",
			B: "oritech:machine_core_1",
			C: "minecraft:leather",
			D: "marvel:palladium_arc_reactor",
			E: "minecraft:air"
		}
	)

	event.shaped(
		Item.of('marvel:iron_man_mark_1_leggings'),
		[
			'AAA',
			'BCB',
			'ACA'
		],
		{
			A: "minecraft:iron_ingot",
			B: "minecraft:leather",
			C: "minecraft:air"
		}
	)

	event.shaped(
		Item.of('marvel:iron_man_mark_1_boots'),
		[
			'BCB',
			'ACA',
			'ACA'
		],
		{
			A: "minecraft:iron_ingot",
			B: "minecraft:leather",
			C: "minecraft:air"
		}
	)
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_2_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_2_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_2_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_2_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "minecraft:iron_ingot" },
			{ "item": "minecraft:iron_ingot" },
			{ "item": "oritech:framed_energy_pipe" },
			{ "item": "oritech:small_tank_block" }
		],
		results: { "id": "marvel:iron_man_mark_2_helmet" },
		suit: { "tag": "marvel:iron_man_mark_1_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "minecraft:iron_ingot" },
				{ "item": "minecraft:iron_ingot" },
				{ "item": "oritech:machine_core_3" }
			],
			results: { "id": "marvel:iron_man_mark_2_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_1_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "minecraft:iron_ingot" },
				{ "item": "minecraft:iron_ingot" },
				{ "item": "oritech:machine_core_3" }
			],
			results: { "id": "marvel:iron_man_mark_2_leggings" },
			suit: { "tag": "marvel:iron_man_mark_1_leggings" }
		})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "minecraft:iron_ingot" },
			{ "item": "minecraft:iron_ingot" },
			{ "item": "oritech:framed_energy_pipe" }
		],
		results: { "id": "marvel:iron_man_mark_2_boots" },
		suit: { "tag": "marvel:iron_man_mark_1_boots" }
	})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_3_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_3_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_3_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_3_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "oritech:gold_gem" }
		],
		results: { "id": "marvel:iron_man_mark_3_helmet" },
		suit: { "tag": "marvel:iron_man_mark_2_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "oritech:gold_gem" },
				{ "item": "oritech:machine_core_4" }
			],
			results: { "id": "marvel:iron_man_mark_3_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_2_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "oritech:gold_gem" },
				{ "item": "oritech:framed_energy_pipe" }
			],
			results: { "id": "marvel:iron_man_mark_3_leggings" },
			suit: { "tag": "marvel:iron_man_mark_2_leggings" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "oritech:gold_gem" }
			],
			results: { "id": "marvel:iron_man_mark_3_boots" },
			suit: { "tag": "marvel:iron_man_mark_2_boots" }
		})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_5_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_5_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_5_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_5_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "iceandfire:silver_ingot" },
			{ "item": "iceandfire:silver_ingot" },
			{ "item": "oritech:energy_pipe_duct_block" }
		],
		results: { "id": "marvel:iron_man_mark_5_helmet" },
		suit: { "tag": "marvel:iron_man_mark_3_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "iceandfire:silver_ingot" },
				{ "item": "iceandfire:silver_ingot" },
				{ "item": "oritech:machine_core_5" }
			],
			results: { "id": "marvel:iron_man_mark_5_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_3_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "iceandfire:silver_ingot" },
				{ "item": "iceandfire:silver_ingot" },
				{ "item": "oritech:energy_pipe_duct_block" },
				{ "item": "oritech:reactor_vent" }
			],
			results: { "id": "marvel:iron_man_mark_5_leggings" },
			suit: { "tag": "marvel:iron_man_mark_3_leggings" }
		})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "iceandfire:silver_ingot" },
			{ "item": "iceandfire:silver_ingot" },
			{ "item": "oritech:energy_pipe_duct_block" },
			{ "item": "oritech:ion_thruster" }
		],
		results: { "id": "marvel:iron_man_mark_5_boots" },
		suit: { "tag": "marvel:iron_man_mark_3_boots" }
	})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_6_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_6_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_6_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_6_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "oritech:iron_gem" }
		],
		results: { "id": "marvel:iron_man_mark_6_helmet" },
		suit: { "tag": "marvel:iron_man_mark_5_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "oritech:iron_gem" },
				{ "item": "oritech:machine_core_6" },
				{ "item": "marvel:diamond_arc_reactor" }
			],
			results: { "id": "marvel:iron_man_mark_6_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_5_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "oritech:iron_gem" }
			],
			results: { "id": "marvel:iron_man_mark_6_leggings" },
			suit: { "tag": "marvel:iron_man_mark_5_leggings" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "oritech:iron_gem" }
			],
			results: { "id": "marvel:iron_man_mark_6_boots" },
			suit: { "tag": "marvel:iron_man_mark_5_boots" }
		})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_7_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_7_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_7_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_7_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "oritech:iron_gem" },
			{ "item": "oritech:advanced_computing_engine" }
		],
		results: { "id": "marvel:iron_man_mark_7_helmet" },
		suit: { "tag": "marvel:iron_man_mark_6_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "oritech:iron_gem" },
				{ "item": "oritech:reactor_condenser" }
			],
			results: { "id": "marvel:iron_man_mark_7_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_6_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "oritech:iron_gem" },
				{ "item": "alexscaves:uranium_rod" }
			],
			results: { "id": "marvel:iron_man_mark_7_leggings" },
			suit: { "tag": "marvel:iron_man_mark_6_leggings" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "oritech:iron_gem" }
			],
			results: { "id": "marvel:iron_man_mark_7_boots" },
			suit: { "tag": "marvel:iron_man_mark_6_boots" }
		})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_11_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_11_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_11_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_11_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "oritech:iron_gem" },
			{ "item": "oritech:super_ai_chip" }
		],
		results: { "id": "marvel:iron_man_mark_11_helmet" },
		suit: { "tag": "marvel:iron_man_mark_7_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "oritech:iron_gem" },
				{ "item": "oritech:reactor_reflector" }
			],
			results: { "id": "marvel:iron_man_mark_11_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_7_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "oritech:iron_gem" },
				{ "item": "oritech:reactor_double_rod" }
			],
			results: { "id": "marvel:iron_man_mark_11_leggings" },
			suit: { "tag": "marvel:iron_man_mark_7_leggings" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "oritech:iron_gem" },
				{ "item": "oritech:overcharged_crystal" }
			],
			results: { "id": "marvel:iron_man_mark_11_boots" },
			suit: { "tag": "marvel:iron_man_mark_7_boots" }
		})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_15_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_15_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_15_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_15_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "oritech:iron_gem" },
			{ "item": "oritech:industrial_glass_block" }
		],
		results: { "id": "marvel:iron_man_mark_15_helmet" },
		suit: { "tag": "marvel:iron_man_mark_11_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "oritech:iron_gem" },
				{ "item": "oritech:industrial_glass_block" }
			],
			results: { "id": "marvel:iron_man_mark_15_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_11_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "oritech:iron_gem" },
				{ "item": "oritech:industrial_glass_block" }
			],
			results: { "id": "marvel:iron_man_mark_15_leggings" },
			suit: { "tag": "marvel:iron_man_mark_11_leggings" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "oritech:iron_gem" },
				{ "item": "oritech:industrial_glass_block" }
			],
			results: { "id": "marvel:iron_man_mark_15_boots" },
			suit: { "tag": "marvel:iron_man_mark_11_boots" }
		})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_17_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_17_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_17_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_17_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "oritech:iron_gem" }
		],
		results: { "id": "marvel:iron_man_mark_17_helmet" },
		suit: { "tag": "marvel:iron_man_mark_15_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "oritech:iron_gem" }
			],
			results: { "id": "marvel:iron_man_mark_17_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_15_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "oritech:iron_gem" },
				{ "item": "oritech:reactor_quad_rod" }
			],
			results: { "id": "marvel:iron_man_mark_17_leggings" },
			suit: { "tag": "marvel:iron_man_mark_15_leggings" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "oritech:iron_gem" }
			],
			results: { "id": "marvel:iron_man_mark_17_boots" },
			suit: { "tag": "marvel:iron_man_mark_15_boots" }
		})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_19_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_19_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_19_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_19_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "oritech:iron_gem" },
			{ "item": "alexscaves:radon_lamp_gray" }
		],
		results: { "id": "marvel:iron_man_mark_19_helmet" },
		suit: { "tag": "marvel:iron_man_mark_17_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "oritech:iron_gem" },
				{ "item": "alexscaves:radon_lamp_gray" }
			],
			results: { "id": "marvel:iron_man_mark_19_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_17_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "oritech:iron_gem" },
				{ "item": "alexscaves:uranium" },
				{ "item": "alexscaves:radon_lamp_gray" }
			],
			results: { "id": "marvel:iron_man_mark_19_leggings" },
			suit: { "tag": "marvel:iron_man_mark_17_leggings" }
		})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "oritech:iron_gem" },
			{ "item": "oritech:superconductor" },
			{ "item": "alexscaves:radon_lamp_gray" }
		],
		results: { "id": "marvel:iron_man_mark_19_boots" },
		suit: { "tag": "marvel:iron_man_mark_17_boots" }
	})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_20_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_20_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_20_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_20_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "alexscaves:radon_lamp_black" }
		],
		results: { "id": "marvel:iron_man_mark_20_helmet" },
		suit: { "tag": "marvel:iron_man_mark_19_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "alexscaves:radon_lamp_black" }
			],
			results: { "id": "marvel:iron_man_mark_20_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_19_chestplate" }
		})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "alexscaves:radon_lamp_black" }
		],
		results: { "id": "marvel:iron_man_mark_20_leggings" },
		suit: { "tag": "marvel:iron_man_mark_19_leggings" }
	})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "alexscaves:radon_lamp_black" }
		],
		results: { "id": "marvel:iron_man_mark_20_boots" },
		suit: { "tag": "marvel:iron_man_mark_19_boots" }
	})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_21_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_21_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_21_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_21_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "alexscaves:radon_lamp_yellow" }
		],
		results: { "id": "marvel:iron_man_mark_21_helmet" },
		suit: { "tag": "marvel:iron_man_mark_20_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "alexscaves:radon_lamp_yellow" }
			],
			results: { "id": "marvel:iron_man_mark_21_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_20_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "alexscaves:radon_lamp_yellow" }
			],
			results: { "id": "marvel:iron_man_mark_21_leggings" },
			suit: { "tag": "marvel:iron_man_mark_20_leggings" }
		})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "alexscaves:radon_lamp_yellow" }
		],
		results: { "id": "marvel:iron_man_mark_21_boots" },
		suit: { "tag": "marvel:iron_man_mark_20_boots" }
	})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_22_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_22_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_22_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_22_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "refinedstorage:quartz_enriched_iron" }
		],
		results: { "id": "marvel:iron_man_mark_22_helmet" },
		suit: { "tag": "marvel:iron_man_mark_21_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" }
			],
			results: { "id": "marvel:iron_man_mark_22_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_21_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" }
			],
			results: { "id": "marvel:iron_man_mark_22_leggings" },
			suit: { "tag": "marvel:iron_man_mark_21_leggings" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "alexscaves:radon_lamp_red" }
			],
			results: { "id": "marvel:iron_man_mark_22_boots" },
			suit: { "tag": "marvel:iron_man_mark_21_boots" }
		})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_23_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_23_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_23_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_23_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "minecraft:netherite_scrap" },
			{ "item": "minecraft:netherite_scrap" }
		],
		results: { "id": "marvel:iron_man_mark_23_helmet" },
		suit: { "tag": "marvel:iron_man_mark_22_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "minecraft:netherite_scrap" },
				{ "item": "minecraft:netherite_scrap" },
				{ "item": "alexscaves:radon_lamp_brown" }
			],
			results: { "id": "marvel:iron_man_mark_23_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_22_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "minecraft:netherite_scrap" },
				{ "item": "minecraft:netherite_scrap" },
				{ "item": "alexscaves:radon_lamp_brown" }
			],
			results: { "id": "marvel:iron_man_mark_23_leggings" },
			suit: { "tag": "marvel:iron_man_mark_22_leggings" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "minecraft:netherite_scrap" },
				{ "item": "minecraft:netherite_scrap" },
				{ "item": "alexscaves:radon_lamp_brown" }
			],
			results: { "id": "marvel:iron_man_mark_23_boots" },
			suit: { "tag": "marvel:iron_man_mark_22_boots" }
		})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_24_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_24_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_24_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_24_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "alexscaves:radon_lamp_brown" }
		],
		results: { "id": "marvel:iron_man_mark_24_helmet" },
		suit: { "tag": "marvel:iron_man_mark_23_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "antarchy:uranium_ingot" }
			],
			results: { "id": "marvel:iron_man_mark_24_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_23_chestplate" }
		})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "antarchy:uranium_ingot" }
		],
		results: { "id": "marvel:iron_man_mark_24_leggings" },
		suit: { "tag": "marvel:iron_man_mark_23_leggings" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "antarchy:uranium_ingot" }
			],
			results: { "id": "marvel:iron_man_mark_24_boots" },
			suit: { "tag": "marvel:iron_man_mark_23_boots" }
		})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_25_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_25_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_25_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_25_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" }
		],
		results: { "id": "marvel:iron_man_mark_25_helmet" },
		suit: { "tag": "marvel:iron_man_mark_24_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "oritech:machine_core_7" },
				{ "item": "minecraft:netherite_scrap" }
			],
			results: { "id": "marvel:iron_man_mark_25_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_24_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" }
			],
			results: { "id": "marvel:iron_man_mark_25_leggings" },
			suit: { "tag": "marvel:iron_man_mark_24_leggings" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "oritech:heisenberg_compensator" }
			],
			results: { "id": "marvel:iron_man_mark_25_boots" },
			suit: { "tag": "marvel:iron_man_mark_24_boots" }
		})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_28_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_28_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_28_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_28_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "pastel:clotted_cream" }
		],
		results: { "id": "marvel:iron_man_mark_28_helmet" },
		suit: { "tag": "marvel:iron_man_mark_25_helmet" }
	})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "alexscaves:radon_lamp_orange" }
		],
		results: { "id": "marvel:iron_man_mark_28_chestplate" },
		suit: { "tag": "marvel:iron_man_mark_25_chestplate" }
	})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "alexscaves:radon_lamp_orange" }
		],
		results: { "id": "marvel:iron_man_mark_28_leggings" },
		suit: { "tag": "marvel:iron_man_mark_25_leggings" }
	})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "alexscaves:radon_lamp_orange" }
		],
		results: { "id": "marvel:iron_man_mark_28_boots" },
		suit: { "tag": "marvel:iron_man_mark_25_boots" }
	})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_30_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_30_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_30_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_30_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "alexscaves:radon_lamp_blue" }
		],
		results: { "id": "marvel:iron_man_mark_30_helmet" },
		suit: { "tag": "marvel:iron_man_mark_28_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "antarchy:ultimate_sword" }
			],
			results: { "id": "marvel:iron_man_mark_30_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_28_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "alexscaves:radon_lamp_blue" }
			],
			results: { "id": "marvel:iron_man_mark_30_leggings" },
			suit: { "tag": "marvel:iron_man_mark_28_leggings" }
		})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "alexscaves:radon_lamp_blue" }
		],
		results: { "id": "marvel:iron_man_mark_30_boots" },
		suit: { "tag": "marvel:iron_man_mark_28_boots" }
	})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_33_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_33_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_33_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_33_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "alexscaves:radon_lamp_red" }
		],
		results: { "id": "marvel:iron_man_mark_33_helmet" },
		suit: { "tag": "marvel:iron_man_mark_30_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "minecraft:netherite_scrap" }
			],
			results: { "id": "marvel:iron_man_mark_33_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_30_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "alexscaves:radon_lamp_red" }
			],
			results: { "id": "marvel:iron_man_mark_33_leggings" },
			suit: { "tag": "marvel:iron_man_mark_30_leggings" }
		})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" }
		],
		results: { "id": "marvel:iron_man_mark_33_boots" },
		suit: { "tag": "marvel:iron_man_mark_30_boots" }
	})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_35_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_35_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_35_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_35_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" }
		],
		results: { "id": "marvel:iron_man_mark_35_helmet" },
		suit: { "tag": "marvel:iron_man_mark_33_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "minecraft:netherite_scrap" }
			],
			results: { "id": "marvel:iron_man_mark_35_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_33_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" }
			],
			results: { "id": "marvel:iron_man_mark_35_leggings" },
			suit: { "tag": "marvel:iron_man_mark_33_leggings" }
		})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" }
		],
		results: { "id": "marvel:iron_man_mark_35_boots" },
		suit: { "tag": "marvel:iron_man_mark_33_boots" }
	})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_37_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_37_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_37_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_37_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "pastel:pure_prismarine" },
			{ "item": "pastel:pure_prismarine" },
			{ "item": "pastel:pure_prismarine" },
			{ "item": "pastel:pure_copper" },
			{ "item": "alexscaves:radon_lamp_cyan" }
		],
		results: { "id": "marvel:iron_man_mark_37_helmet" },
		suit: { "tag": "marvel:iron_man_mark_35_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "pastel:pure_prismarine" },
				{ "item": "pastel:pure_prismarine" },
				{ "item": "pastel:pure_prismarine" },
				{ "item": "pastel:pure_copper" },
				{ "item": "minecraft:heart_of_the_sea" }
			],
			results: { "id": "marvel:iron_man_mark_37_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_35_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "pastel:pure_prismarine" },
				{ "item": "pastel:pure_prismarine" },
				{ "item": "pastel:pure_prismarine" },
				{ "item": "pastel:pure_copper" },
				{ "item": "alexscaves:radon_lamp_cyan" }
			],
			results: { "id": "marvel:iron_man_mark_37_leggings" },
			suit: { "tag": "marvel:iron_man_mark_35_leggings" }
		})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "pastel:pure_prismarine" },
			{ "item": "pastel:pure_prismarine" },
			{ "item": "pastel:pure_prismarine" },
			{ "item": "pastel:pure_copper" },
			{ "item": "alexscaves:radon_lamp_cyan" }
		],
		results: { "id": "marvel:iron_man_mark_37_boots" },
		suit: { "tag": "marvel:iron_man_mark_35_boots" }
	})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_38_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_38_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_38_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_38_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" }
		],
		results: { "id": "marvel:iron_man_mark_38_helmet" },
		suit: { "tag": "marvel:iron_man_mark_37_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "supplementaries:bomb_blue" }
			],
			results: { "id": "marvel:iron_man_mark_38_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_37_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" }
			],
			results: { "id": "marvel:iron_man_mark_38_leggings" },
			suit: { "tag": "marvel:iron_man_mark_37_leggings" }
		})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" }
		],
		results: { "id": "marvel:iron_man_mark_38_boots" },
		suit: { "tag": "marvel:iron_man_mark_37_boots" }
	})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_39_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_39_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_39_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_39_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "antarchy:uranium_ingot" }
		],
		results: { "id": "marvel:iron_man_mark_39_helmet" },
		suit: { "tag": "marvel:iron_man_mark_38_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "refinedstorage:quartz_enriched_iron" },
				{ "item": "antarchy:uranium_ingot" }
			],
			results: { "id": "marvel:iron_man_mark_39_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_38_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" }
			],
			results: { "id": "marvel:iron_man_mark_39_leggings" },
			suit: { "tag": "marvel:iron_man_mark_38_leggings" }
		})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "refinedstorage:quartz_enriched_iron" },
			{ "item": "antarchy:uranium_ingot" }
		],
		results: { "id": "marvel:iron_man_mark_39_boots" },
		suit: { "tag": "marvel:iron_man_mark_38_boots" }
	})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_42_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_42_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_42_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_42_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" }
		],
		results: { "id": "marvel:iron_man_mark_42_helmet" },
		suit: { "tag": "marvel:iron_man_mark_39_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" }
			],
			results: { "id": "marvel:iron_man_mark_42_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_39_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" }
			],
			results: { "id": "marvel:iron_man_mark_42_leggings" },
			suit: { "tag": "marvel:iron_man_mark_39_leggings" }
		})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" }
		],
		results: { "id": "marvel:iron_man_mark_42_boots" },
		suit: { "tag": "marvel:iron_man_mark_39_boots" }
	})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:iron_man_mark_43_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_43_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_43_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:iron_man_mark_43_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" }
		],
		results: { "id": "marvel:iron_man_mark_43_helmet" },
		suit: { "tag": "marvel:iron_man_mark_42_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" }
			],
			results: { "id": "marvel:iron_man_mark_43_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_42_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "marvel:gold_titanium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "antarchy:uranium_ingot" },
				{ "item": "refinedstorage:quartz_enriched_iron" }
			],
			results: { "id": "marvel:iron_man_mark_43_leggings" },
			suit: { "tag": "marvel:iron_man_mark_42_leggings" }
		})

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "marvel:gold_titanium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "antarchy:uranium_ingot" },
			{ "item": "refinedstorage:quartz_enriched_iron" }
		],
		results: { "id": "marvel:iron_man_mark_43_boots" },
		suit: { "tag": "marvel:iron_man_mark_42_boots" }
	})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:war_machine_mark_1_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:war_machine_mark_1_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:war_machine_mark_1_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:war_machine_mark_1_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "oritech:iron_gem" }
		],
		results: { "id": "marvel:war_machine_mark_1_helmet" },
		suit: { "tag": "marvel:iron_man_mark_2_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "oritech:iron_gem" },
				{ "item": "oritech:machine_core_4" },
				{ "item": "minecraft:crossbow" }
			],
			results: { "id": "marvel:war_machine_mark_1_chestplate" },
			suit: { "tag": "marvel:iron_man_mark_2_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "oritech:iron_gem" },
				{ "item": "oritech:framed_energy_pipe" }
			],
			results: { "id": "marvel:war_machine_mark_1_leggings" },
			suit: { "tag": "marvel:iron_man_mark_2_leggings" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "oritech:iron_gem" }
			],
			results: { "id": "marvel:war_machine_mark_1_boots" },
			suit: { "tag": "marvel:iron_man_mark_2_boots" }
		})
})

ServerEvents.recipes(event => {

	event.remove({ output: "marvel:war_machine_mark_2_helmet", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:war_machine_mark_2_chestplate", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:war_machine_mark_2_leggings", type: 'marvel:suit_upgrading' })
	event.remove({ output: "marvel:war_machine_mark_2_boots", type: 'marvel:suit_upgrading' })

	event.custom({
		type: 'marvel:suit_upgrading',
		consume_suit: true,
		ingredients: [
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "antarchy:titanium_ingot" },
			{ "item": "alexscaves:uranium_rod" },
			{ "item": "alexscaves:hazmat_mask" }
		],
		results: { "id": "marvel:war_machine_mark_2_helmet" },
		suit: { "tag": "marvel:war_machine_mark_1_helmet" }
	}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "alexscaves:nuclear_bomb" },
				{ "item": "alexscaves:fissile_core" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" }
			],
			results: { "id": "marvel:war_machine_mark_2_chestplate" },
			suit: { "tag": "marvel:war_machine_mark_1_chestplate" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "alexscaves:uranium_rod" },
				{ "item": "antarchy:uranium_ingot" }
			],
			results: { "id": "marvel:war_machine_mark_2_leggings" },
			suit: { "tag": "marvel:war_machine_mark_1_leggings" }
		}),

		event.custom({
			type: 'marvel:suit_upgrading',
			consume_suit: true,
			ingredients: [
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "antarchy:titanium_ingot" },
				{ "item": "alexscaves:uranium_rod" },
				{ "item": "antarchy:uranium_ingot" }
			],
			results: { "id": "marvel:war_machine_mark_2_boots" },
			suit: { "tag": "marvel:war_machine_mark_1_boots" }
		})
})

ServerEvents.recipes(event => {
	event.remove({ id: /^integrated_superheroes:iron_man_direct\// })
	const directSuitRecipes = [
		['marvel:iron_man_mark_2_helmet', 'minecraft:iron_helmet', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'oritech:framed_energy_pipe', 'oritech:small_tank_block', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_2_chestplate', 'minecraft:iron_chestplate', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'oritech:machine_core_3', 'marvel:palladium_arc_reactor', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_2_leggings', 'minecraft:iron_leggings', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'oritech:machine_core_3', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_2_boots', 'minecraft:iron_boots', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'oritech:framed_energy_pipe', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_3_helmet', 'minecraft:iron_helmet', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'oritech:gold_gem', 'oritech:framed_energy_pipe', 'oritech:small_tank_block', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_3_chestplate', 'minecraft:iron_chestplate', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'oritech:gold_gem', 'oritech:machine_core_4', 'marvel:palladium_arc_reactor', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_3_leggings', 'minecraft:iron_leggings', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'oritech:gold_gem', 'oritech:framed_energy_pipe', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_3_boots', 'minecraft:iron_boots', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'oritech:gold_gem', 'oritech:framed_energy_pipe', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_5_helmet', 'minecraft:iron_helmet', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'iceandfire:silver_ingot', 'iceandfire:silver_ingot', 'oritech:energy_pipe_duct_block', 'oritech:small_tank_block', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_5_chestplate', 'minecraft:iron_chestplate', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'iceandfire:silver_ingot', 'iceandfire:silver_ingot', 'oritech:machine_core_5', 'marvel:palladium_arc_reactor', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_5_leggings', 'minecraft:iron_leggings', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'iceandfire:silver_ingot', 'iceandfire:silver_ingot', 'oritech:energy_pipe_duct_block', 'oritech:reactor_vent', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_5_boots', 'minecraft:iron_boots', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'iceandfire:silver_ingot', 'iceandfire:silver_ingot', 'oritech:energy_pipe_duct_block', 'oritech:ion_thruster', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_6_helmet', 'minecraft:iron_helmet', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:iron_gem', 'oritech:energy_pipe_duct_block', 'oritech:small_tank_block', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_6_chestplate', 'minecraft:iron_chestplate', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:iron_gem', 'oritech:machine_core_6', 'marvel:diamond_arc_reactor', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_6_leggings', 'minecraft:iron_leggings', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:iron_gem', 'oritech:energy_pipe_duct_block', 'oritech:reactor_vent', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_6_boots', 'minecraft:iron_boots', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:iron_gem', 'oritech:energy_pipe_duct_block', 'oritech:ion_thruster', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_7_helmet', 'minecraft:iron_helmet', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:iron_gem', 'oritech:energy_pipe_duct_block', 'oritech:small_tank_block', 'oritech:advanced_computing_engine', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_7_chestplate', 'minecraft:iron_chestplate', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:iron_gem', 'oritech:machine_core_6', 'marvel:diamond_arc_reactor', 'oritech:reactor_condenser', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_7_leggings', 'minecraft:iron_leggings', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:iron_gem', 'oritech:energy_pipe_duct_block', 'oritech:reactor_vent', 'alexscaves:uranium_rod', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_7_boots', 'minecraft:iron_boots', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:iron_gem', 'oritech:energy_pipe_duct_block', 'oritech:ion_thruster', 'oritech:ion_thruster', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_11_helmet', 'minecraft:diamond_helmet', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:iron_gem', 'oritech:energy_pipe_duct_block', 'oritech:small_tank_block', 'oritech:super_ai_chip', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_11_chestplate', 'minecraft:diamond_chestplate', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:iron_gem', 'oritech:machine_core_6', 'marvel:diamond_arc_reactor', 'oritech:reactor_reflector', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_11_leggings', 'minecraft:diamond_leggings', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:iron_gem', 'oritech:energy_pipe_duct_block', 'oritech:reactor_vent', 'oritech:reactor_double_rod', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_11_boots', 'minecraft:diamond_boots', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:iron_gem', 'oritech:overcharged_crystal', 'oritech:ion_thruster', 'oritech:ion_thruster', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_15_helmet', 'minecraft:diamond_helmet', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'oritech:iron_gem', 'oritech:small_tank_block', 'oritech:super_ai_chip', 'oritech:industrial_glass_block', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_15_chestplate', 'minecraft:diamond_chestplate', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'oritech:iron_gem', 'oritech:machine_core_6', 'marvel:diamond_arc_reactor', 'oritech:industrial_glass_block', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_15_leggings', 'minecraft:diamond_leggings', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'oritech:iron_gem', 'oritech:reactor_vent', 'oritech:reactor_double_rod', 'oritech:industrial_glass_block', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_15_boots', 'minecraft:diamond_boots', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'oritech:iron_gem', 'oritech:overcharged_crystal', 'oritech:ion_thruster', 'oritech:industrial_glass_block', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_17_helmet', 'minecraft:diamond_helmet', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:iron_gem', 'oritech:small_tank_block', 'oritech:super_ai_chip', 'oritech:industrial_glass_block', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_17_chestplate', 'minecraft:diamond_chestplate', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'oritech:iron_gem', 'oritech:machine_core_6', 'marvel:diamond_arc_reactor', 'oritech:industrial_glass_block', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_17_leggings', 'minecraft:diamond_leggings', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'oritech:iron_gem', 'oritech:reactor_vent', 'oritech:reactor_quad_rod', 'oritech:industrial_glass_block', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_17_boots', 'minecraft:diamond_boots', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'oritech:iron_gem', 'oritech:overcharged_crystal', 'oritech:ion_thruster', 'oritech:industrial_glass_block', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_19_helmet', 'minecraft:diamond_helmet', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:iron_gem', 'oritech:small_tank_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_gray', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_19_chestplate', 'minecraft:diamond_chestplate', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'oritech:iron_gem', 'oritech:machine_core_6', 'marvel:diamond_arc_reactor', 'alexscaves:radon_lamp_gray', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_19_leggings', 'minecraft:diamond_leggings', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'oritech:iron_gem', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_gray', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_19_boots', 'minecraft:diamond_boots', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'oritech:iron_gem', 'oritech:superconductor', 'oritech:ion_thruster', 'alexscaves:radon_lamp_gray', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_20_helmet', 'minecraft:diamond_helmet', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:uranium_ingot', 'oritech:small_tank_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_black', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_20_chestplate', 'minecraft:diamond_chestplate', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:uranium_ingot', 'oritech:machine_core_6', 'marvel:diamond_arc_reactor', 'alexscaves:radon_lamp_black', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_20_leggings', 'minecraft:diamond_leggings', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:uranium_ingot', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_black', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_20_boots', 'minecraft:diamond_boots', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:uranium_ingot', 'oritech:superconductor', 'oritech:ion_thruster', 'alexscaves:radon_lamp_black', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_21_helmet', 'minecraft:diamond_helmet', ['antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'oritech:industrial_glass_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_yellow']],
		['marvel:iron_man_mark_21_chestplate', 'minecraft:diamond_chestplate', ['antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'oritech:machine_core_6', 'marvel:diamond_arc_reactor', 'alexscaves:radon_lamp_yellow']],
		['marvel:iron_man_mark_21_leggings', 'minecraft:diamond_leggings', ['antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_yellow']],
		['marvel:iron_man_mark_21_boots', 'minecraft:diamond_boots', ['antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'oritech:superconductor', 'oritech:ion_thruster', 'alexscaves:radon_lamp_yellow']],
		['marvel:iron_man_mark_22_helmet', 'minecraft:diamond_helmet', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'oritech:industrial_glass_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_gray', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_22_chestplate', 'minecraft:diamond_chestplate', ['marvel:gold_titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:machine_core_6', 'marvel:diamond_arc_reactor', 'alexscaves:radon_lamp_gray', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_22_leggings', 'minecraft:diamond_leggings', ['marvel:gold_titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_gray', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_22_boots', 'minecraft:diamond_boots', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'oritech:superconductor', 'oritech:ion_thruster', 'alexscaves:radon_lamp_red', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_23_helmet', 'minecraft:diamond_helmet', ['refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'antarchy:uranium_ingot', 'minecraft:netherite_scrap', 'minecraft:netherite_scrap', 'oritech:industrial_glass_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_gray']],
		['marvel:iron_man_mark_23_chestplate', 'minecraft:diamond_chestplate', ['refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'antarchy:uranium_ingot', 'minecraft:netherite_scrap', 'minecraft:netherite_scrap', 'oritech:machine_core_6', 'marvel:diamond_arc_reactor', 'alexscaves:radon_lamp_brown']],
		['marvel:iron_man_mark_23_leggings', 'minecraft:diamond_leggings', ['refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'antarchy:uranium_ingot', 'minecraft:netherite_scrap', 'minecraft:netherite_scrap', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_brown']],
		['marvel:iron_man_mark_23_boots', 'minecraft:diamond_boots', ['refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'antarchy:uranium_ingot', 'minecraft:netherite_scrap', 'minecraft:netherite_scrap', 'oritech:superconductor', 'oritech:ion_thruster', 'alexscaves:radon_lamp_brown']],
		['marvel:iron_man_mark_24_helmet', 'minecraft:diamond_helmet', ['antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'antarchy:uranium_ingot', 'oritech:industrial_glass_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_brown', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_24_chestplate', 'minecraft:diamond_chestplate', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'antarchy:uranium_ingot', 'oritech:machine_core_6', 'marvel:diamond_arc_reactor', 'alexscaves:radon_lamp_brown']],
		['marvel:iron_man_mark_24_leggings', 'minecraft:diamond_leggings', ['antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'antarchy:uranium_ingot', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_brown', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_24_boots', 'minecraft:diamond_boots', ['antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'antarchy:uranium_ingot', 'oritech:superconductor', 'oritech:ion_thruster', 'alexscaves:radon_lamp_brown', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_25_helmet', 'antarchy:ultimate_helmet', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:uranium_ingot', 'oritech:industrial_glass_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_gray']],
		['marvel:iron_man_mark_25_chestplate', 'antarchy:ultimate_chestplate', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:uranium_ingot', 'oritech:machine_core_7', 'marvel:diamond_arc_reactor', 'minecraft:netherite_scrap']],
		['marvel:iron_man_mark_25_leggings', 'antarchy:ultimate_leggings', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:uranium_ingot', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_gray']],
		['marvel:iron_man_mark_25_boots', 'antarchy:ultimate_boots', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:uranium_ingot', 'oritech:heisenberg_compensator', 'oritech:ion_thruster', 'alexscaves:radon_lamp_brown']],
		['marvel:iron_man_mark_28_helmet', 'antarchy:ultimate_helmet', ['antarchy:titanium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:industrial_glass_block', 'oritech:super_ai_chip', 'pastel:clotted_cream', 'antarchy:uranium_ingot']],
		['marvel:iron_man_mark_28_chestplate', 'antarchy:ultimate_chestplate', ['antarchy:titanium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:machine_core_7', 'marvel:diamond_arc_reactor', 'alexscaves:radon_lamp_orange', 'antarchy:uranium_ingot']],
		['marvel:iron_man_mark_28_leggings', 'antarchy:ultimate_leggings', ['antarchy:titanium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_orange', 'antarchy:uranium_ingot']],
		['marvel:iron_man_mark_28_boots', 'antarchy:ultimate_boots', ['antarchy:titanium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:heisenberg_compensator', 'oritech:ion_thruster', 'alexscaves:radon_lamp_orange', 'antarchy:uranium_ingot']],
		['marvel:iron_man_mark_30_helmet', 'antarchy:ultimate_helmet', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'oritech:industrial_glass_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_blue', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_30_chestplate', 'antarchy:ultimate_chestplate', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'oritech:machine_core_7', 'marvel:diamond_arc_reactor', 'antarchy:ultimate_sword', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_30_leggings', 'antarchy:ultimate_leggings', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_blue', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_30_boots', 'antarchy:ultimate_boots', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'oritech:heisenberg_compensator', 'oritech:ion_thruster', 'alexscaves:radon_lamp_blue', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_33_helmet', 'antarchy:ultimate_helmet', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:industrial_glass_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_red', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_33_chestplate', 'antarchy:ultimate_chestplate', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:machine_core_7', 'marvel:diamond_arc_reactor', 'minecraft:netherite_scrap', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_33_leggings', 'antarchy:ultimate_leggings', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_red', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_33_boots', 'antarchy:ultimate_boots', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:heisenberg_compensator', 'oritech:ion_thruster', 'alexscaves:radon_lamp_red', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_35_helmet', 'antarchy:ultimate_helmet', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:industrial_glass_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_red', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_35_chestplate', 'antarchy:ultimate_chestplate', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:machine_core_7', 'marvel:diamond_arc_reactor', 'minecraft:netherite_scrap', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_35_leggings', 'antarchy:ultimate_leggings', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_red', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_35_boots', 'antarchy:ultimate_boots', ['marvel:gold_titanium_ingot', 'marvel:gold_titanium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:heisenberg_compensator', 'oritech:ion_thruster', 'alexscaves:radon_lamp_red', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_37_helmet', 'antarchy:ultimate_helmet', ['pastel:pure_prismarine', 'pastel:pure_prismarine', 'pastel:pure_prismarine', 'pastel:pure_copper', 'oritech:industrial_glass_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_cyan', 'pastel:pure_prismarine']],
		['marvel:iron_man_mark_37_chestplate', 'antarchy:ultimate_chestplate', ['pastel:pure_prismarine', 'pastel:pure_prismarine', 'pastel:pure_prismarine', 'pastel:pure_copper', 'oritech:machine_core_7', 'marvel:diamond_arc_reactor', 'minecraft:heart_of_the_sea', 'pastel:pure_prismarine']],
		['marvel:iron_man_mark_37_leggings', 'antarchy:ultimate_leggings', ['pastel:pure_prismarine', 'pastel:pure_prismarine', 'pastel:pure_prismarine', 'pastel:pure_copper', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_cyan', 'pastel:pure_prismarine']],
		['marvel:iron_man_mark_37_boots', 'antarchy:ultimate_boots', ['pastel:pure_prismarine', 'pastel:pure_prismarine', 'pastel:pure_prismarine', 'pastel:pure_copper', 'oritech:heisenberg_compensator', 'oritech:ion_thruster', 'alexscaves:radon_lamp_cyan', 'pastel:pure_prismarine']],
		['marvel:iron_man_mark_38_helmet', 'antarchy:ultimate_helmet', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:industrial_glass_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_blue', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_38_chestplate', 'antarchy:ultimate_chestplate', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:machine_core_7', 'marvel:diamond_arc_reactor', 'supplementaries:bomb_blue', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_38_leggings', 'antarchy:ultimate_leggings', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_blue', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_38_boots', 'antarchy:ultimate_boots', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:heisenberg_compensator', 'oritech:ion_thruster', 'alexscaves:radon_lamp_blue', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_39_helmet', 'antarchy:ultimate_helmet', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'antarchy:uranium_ingot', 'oritech:industrial_glass_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_yellow']],
		['marvel:iron_man_mark_39_chestplate', 'antarchy:ultimate_chestplate', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'antarchy:uranium_ingot', 'oritech:machine_core_7', 'marvel:diamond_arc_reactor', 'alexscaves:radon_lamp_yellow']],
		['marvel:iron_man_mark_39_leggings', 'antarchy:ultimate_leggings', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_yellow', 'antarchy:titanium_ingot']],
		['marvel:iron_man_mark_39_boots', 'antarchy:ultimate_boots', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'refinedstorage:quartz_enriched_iron', 'refinedstorage:quartz_enriched_iron', 'antarchy:uranium_ingot', 'oritech:heisenberg_compensator', 'oritech:ion_thruster', 'alexscaves:radon_lamp_yellow']],
		['marvel:iron_man_mark_42_helmet', 'antarchy:ultimate_helmet', ['marvel:gold_titanium_block', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:industrial_glass_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_yellow']],
		['marvel:iron_man_mark_42_chestplate', 'antarchy:ultimate_chestplate', ['marvel:gold_titanium_block', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:machine_core_7', 'marvel:diamond_arc_reactor', 'alexscaves:radon_lamp_yellow']],
		['marvel:iron_man_mark_42_leggings', 'antarchy:ultimate_leggings', ['marvel:gold_titanium_block', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_yellow']],
		['marvel:iron_man_mark_42_boots', 'antarchy:ultimate_boots', ['marvel:gold_titanium_block', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:heisenberg_compensator', 'oritech:ion_thruster', 'alexscaves:radon_lamp_yellow']],
		['marvel:iron_man_mark_43_helmet', 'antarchy:ultimate_helmet', ['marvel:gold_titanium_block', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:industrial_glass_block', 'oritech:super_ai_chip', 'alexscaves:radon_lamp_yellow', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_43_chestplate', 'antarchy:ultimate_chestplate', ['marvel:gold_titanium_block', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:machine_core_7', 'marvel:diamond_arc_reactor', 'alexscaves:radon_lamp_yellow', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_43_leggings', 'antarchy:ultimate_leggings', ['marvel:gold_titanium_block', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:reactor_vent', 'alexscaves:uranium', 'alexscaves:radon_lamp_yellow', 'marvel:gold_titanium_ingot']],
		['marvel:iron_man_mark_43_boots', 'antarchy:ultimate_boots', ['marvel:gold_titanium_block', 'antarchy:uranium_ingot', 'antarchy:uranium_ingot', 'refinedstorage:quartz_enriched_iron', 'oritech:heisenberg_compensator', 'oritech:ion_thruster', 'alexscaves:radon_lamp_yellow', 'marvel:gold_titanium_ingot']],
		['marvel:war_machine_mark_1_helmet', 'minecraft:diamond_helmet', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'oritech:iron_gem', 'oritech:framed_energy_pipe', 'oritech:small_tank_block', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot']],
		['marvel:war_machine_mark_1_chestplate', 'minecraft:diamond_chestplate', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'oritech:iron_gem', 'oritech:machine_core_4', 'marvel:palladium_arc_reactor', 'minecraft:crossbow', 'antarchy:titanium_ingot']],
		['marvel:war_machine_mark_1_leggings', 'minecraft:diamond_leggings', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'oritech:iron_gem', 'oritech:framed_energy_pipe', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot']],
		['marvel:war_machine_mark_1_boots', 'minecraft:diamond_boots', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'oritech:iron_gem', 'oritech:framed_energy_pipe', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot']],
		['marvel:war_machine_mark_2_helmet', 'minecraft:diamond_helmet', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'alexscaves:uranium_rod', 'oritech:framed_energy_pipe', 'alexscaves:hazmat_mask', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot']],
		['marvel:war_machine_mark_2_chestplate', 'minecraft:diamond_chestplate', ['antarchy:titanium_ingot', 'alexscaves:nuclear_bomb', 'antarchy:titanium_ingot', 'alexscaves:fissile_core', 'oritech:machine_core_4', 'marvel:palladium_arc_reactor', 'scguns:rocket', 'antarchy:titanium_ingot']],
		['marvel:war_machine_mark_2_leggings', 'minecraft:diamond_leggings', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'alexscaves:uranium_rod', 'oritech:framed_energy_pipe', 'antarchy:titanium_ingot', 'antarchy:uranium_ingot', 'antarchy:titanium_ingot']],
		['marvel:war_machine_mark_2_boots', 'minecraft:diamond_boots', ['antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'antarchy:titanium_ingot', 'alexscaves:uranium_rod', 'oritech:framed_energy_pipe', 'antarchy:titanium_ingot', 'antarchy:uranium_ingot', 'antarchy:titanium_ingot']],
	]
	const slots = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
	directSuitRecipes.forEach(([output, center, ring]) => {
		const key = { I: center }
		ring.forEach((item, index) => key[slots[index]] = item)
		const pattern = [ring[0] ? slots[0] + slots[1] + slots[2] : "", slots[7] + "I" + slots[3], slots[6] + slots[5] + slots[4]]
		event.shaped(Item.of(output), pattern, key).id(`kubejs:marvel/direct/${output.split(":")[1]}`)
	})
})
