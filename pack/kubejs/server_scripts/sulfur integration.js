ServerEvents.tags('item', event => {
  event.add('boogaloo:sulfur_blocks', 'minecraft:sulfur')
  event.add('boogaloo:sulfur_blocks', 'minecraft:polished_sulfur')
  event.add('boogaloo:sulfur_blocks', 'minecraft:sulfur_bricks')
  event.add('boogaloo:sulfur_blocks', 'minecraft:chiseled_sulfur')
  event.remove('c:ores', 'scguns:sulfur_ore')
  event.remove('c:ores', 'scguns:deepslate_sulfur_ore')
  event.remove('c:ores', 'scguns:nether_sulfur_ore')
  event.remove('c:dusts/sulfur', 'scguns:sulfur_dust')
  event.remove('c:raw_materials/sulfur', 'scguns:sulfur')
  event.remove('c:raw_materials/sulfur', 'scguns:sulfur_chunk')
  event.remove('c:storage_blocks/sulfur', 'scguns:sulfur_block')
  event.add('c:dusts/sulfur', 'alexscaves:sulfur_dust')
})


ServerEvents.recipes(event => {
    event.custom({
        "type": "pastel:anvil_crushing",
        "ingredient": [{"tag": "boogaloo:sulfur_blocks"}],
        "crushedItemsPerPointOfDamage": 2,
        "experience": 0.0,
        "result": {
            "id": "alexscaves:sulfur_dust",
            "count": 4
        },
        "particleEffectIdentifier": "cloud",
        "soundEventIdentifier": "block.glass.break"
    })

    event.custom({
        "type": "oritech:pulverizer",
        "ingredients": [{"tag": "boogaloo:sulfur_blocks"}],
        "results": [
            {
                "count": 3,
                "id": "alexscaves:sulfur_dust"
            }
        ],
        "time": 100
    })

    event.custom({
        "type": "oritech:grinder",
        "ingredients": [{"tag": "boogaloo:sulfur_blocks"}],
        "results": [
            {
                "count": 4,
                "id": "alexscaves:sulfur_dust"
            }
        ],
        "time": 40
    })

    event.shaped('minecraft:sulfur', [
        'SS ',
        'SS ',
        '   '
    ], {
        S: '#c:dusts/sulfur'
    })

})
