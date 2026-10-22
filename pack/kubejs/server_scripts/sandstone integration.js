ServerEvents.tags('item', event => {
  event.add('c:sandstone/dream_blocks', 'antarchy:dream_sandstone')
  event.add('c:sandstone/dream_blocks', 'antarchy:chiseled_dream_sandstone')
  event.add('c:sandstone/dream_blocks', 'antarchy:cut_dream_sandstone')
  event.add('c:sandstone/dream_blocks', 'antarchy:smooth_dream_sandstone')


})




ServerEvents.recipes(event => {

    event.remove({id: 'oritech:pulverizer/sand_from_sandstone'})
    event.remove({id: 'oritech:grinder/sand_from_sandstone'})

    let sandstoneCrushing = (sand, sandstoneTag) => {

        event.custom({
            "type": "oritech:pulverizer",
            "ingredients": [{"tag": sandstoneTag}
            ],
            "results": [{
                "count": 1,
                "id": sand
            }],
            "time": 100
        })

        event.custom({
            "type": "oritech:grinder",
            "ingredients": [{"tag": sandstoneTag}],
            "results": [{
                "count": 1,
                "id": sand
            }],
            "time": 120
        })
    }

    sandstoneCrushing('minecraft:sand', 'c:sandstone/uncolored_blocks')
    sandstoneCrushing('antarchy:dream_sand', 'c:sandstone/dream_blocks')

})
