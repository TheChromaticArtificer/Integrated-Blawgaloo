ServerEvents.recipes(event => {
  event.remove({ id: 'marvel:mjolnir' })
  event.remove({ id: 'marvel:stormbreaker' })
  event.remove({ output: 'celestisynth:celestial_crafting_table' })
  event.remove({ input: 'celestisynth:celestial_crafting_table' })
  event.remove({ output: 'celestisynth:supernal_netherite_ingot' })
  event.remove({ output: 'celestisynth:celestial_netherite_ingot' })
  event.replaceInput({}, 'celestisynth:supernal_netherite_ingot', 'marvel:uru_ingot')
  event.replaceInput({}, 'celestisynth:celestial_netherite_ingot', 'marvel:vibranium_ingot')
  event.replaceInput({}, 'celestisynth:lunar_stone', 'pastel:moonstone_block')
  event.replaceInput({}, 'celestisynth:lunar_scrap', 'pastel:moonstone_block')
  event.replaceInput({}, 'celestisynth:solar_crystal', 'antarchy:blood_crystal_shard')
  event.remove({ output: 'celestisynth:lunar_scrap' })
  event.replaceInput({}, 'celestisynth:starstruck_feather', 'antarchy:stratoshark_fin')
  event.replaceInput({}, 'celestisynth:starstruck_scrap', 'antarchy:nightmare_scale')
  event.remove({ output: 'celestisynth:starstruck_feather' })
  event.remove({ output: 'celestisynth:starstruck_scrap' })
  event.replaceInput({}, 'celestisynth:zephyr_deposit', 'antarchy:vortex_charge')
  event.replaceInput({}, 'celestisynth:wintereis_shard', 'alexscaves:bioluminesscence')
  event.replaceInput({}, 'celestisynth:wintereis', 'alexscaves:bioluminesscence')
  event.remove({ output: 'celestisynth:zephyr_deposit' })
  event.remove({ output: 'celestisynth:wintereis_shard' })
  event.remove({ output: 'celestisynth:wintereis' })
  event.remove({ output: 'celestisynth:eyebomination' })
  event.remove({ input: 'celestisynth:eyebomination' })

  event.remove({ id: 'infinity_gauntlet:r_gauntlet' })
  event.remove({ id: 'infinity_gauntlet:fake_gauntlet_r' })
  event.remove({ id: 'infinity_gauntlet:r_nano_gauntlet' })

  event.remove({ id: 'dog:cosmic_worm' })

  event.custom({
    type: 'oritech:pulverizer',
    ingredients: [{ item: 'minecraft:nether_star' }],
    results: [{ id: 'pastel:stardust', count: 32 }],
    time: 200
  }).id('kubejs:oritech/pulverizer/stardust_from_nether_star')
  event.custom({
    type: 'oritech:grinder',
    ingredients: [{ item: 'minecraft:nether_star' }],
    results: [{ id: 'pastel:stardust', count: 48 }],
    time: 200
  }).id('kubejs:oritech/grinder/stardust_from_nether_star')
  event.custom({
    type: 'oritech:centrifuge_fluid',
    fluidInput: { fluid: 'antarchy:antiwater', amount: 250 },
    ingredients: [{ item: 'antarchy:nightmare_scale' }],
    results: [{ id: 'pastel:stardust', count: 3 }],
    time: 100
  }).id('kubejs:oritech/centrifuge/stardust_from_nightmare_scale')
})

const MonolithRunes = Java.loadClass('org.thecelestialworkshop.celestisynth.common.entity.helper.MonolithRunes')

EntityEvents.spawned(event => {
  const entity = event.entity
  if (entity.type == 'celestisynth:star_monolith' && entity.level.dimension == 'antarchy:thoraxis') {
    entity.setRune(MonolithRunes.valueOf('BLOOD_RUNE'))
  }
})

ServerEvents.tags('item', event => {
  event.remove('curios:spellbook', 'celestisynth:celestial_spell_book')
})
