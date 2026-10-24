ServerEvents.recipes(event => {
  event.remove({ id: 'marvel:unstable_pym_particle' })
  event.remove({ output: 'marvel:unstable_pym_particle' })
  event.remove({ output: 'marvel:pym_particle' })

  event.remove({ output: 'antarchy:growth_ray' })
  event.shaped('antarchy:growth_ray', [
    'TTT',
    'TCT',
    ' PN'
  ], {
    T: 'antarchy:titanium_ingot',
    C: 'antarchy:bluestone_comparator',
    P: 'marvel:pym_particle',
    N: '#c:ingots/netherite'
  })

  event.remove({ output: 'antarchy:shrink_ray' })
  event.shaped('antarchy:shrink_ray', [
    'UUU',
    'UCU',
    ' PN'
  ], {
    U: 'antarchy:uranium_ingot',
    C: 'minecraft:comparator',
    P: 'marvel:pym_particle',
    N: '#c:ingots/netherite'
  })
})

ServerEvents.recipes(event => {
  const CLOTH = 'marvellegacy:cloth_black'
  const PYM = 'marvel:pym_particle'
  const CHITIN = 'antarchy:chitin'
  const BLUESTONE = 'antarchy:bluestone'

  const shaped = (output, pattern, key) => {
    event.remove({ id: output })
    event.shaped(output, pattern, key).id(output)
  }
  shaped('marvel:ant_man_helmet', ['#X#', '#R#'], { '#': '#c:ingots/iron', X: 'antarchy:bluestone_repeater', R: 'minecraft:red_stained_glass_pane' })
  shaped('marvel:ant_man_chestplate', ['X X', 'RPC', 'XKX'], { X: CLOTH, R: '#c:dyes/red', P: PYM, C: CHITIN, K: 'antarchy:bluestone_comparator' })
  shaped('marvel:ant_man_leggings', ['XCX', 'R R', 'X X'], { X: CLOTH, C: CHITIN, R: '#c:dyes/red' })
  shaped('marvel:ant_man_boots', ['X X', 'C C', 'X X'], { X: CLOTH, C: CHITIN })

  const upgrade = (output, suit, ingredients) => {
    event.remove({ id: output })
    event.custom({
      type: 'marvel:suit_upgrading',
      consume_suit: false,
      ingredients: ingredients.map(i => i.startsWith('#') ? { tag: i.substring(1) } : { item: i }),
      results: { id: output },
      suit: { tag: suit }
    }).id(output)
  }
  upgrade('marvel:ant_man_upgraded_helmet', 'marvel:ant_man_helmet', ['#c:ingots/iron', '#c:ingots/iron', '#c:ingots/iron', '#c:ingots/iron', BLUESTONE, PYM, 'minecraft:red_stained_glass_pane'])
  const antManBody = ['chestplate', 'leggings', 'boots']
  antManBody.forEach(slot => {
    upgrade(`marvel:ant_man_upgraded_${slot}`, `marvel:ant_man_${slot}`, [CLOTH, CLOTH, CLOTH, '#c:ingots/iron', '#c:ingots/iron', '#c:dyes/red', CHITIN, PYM, BLUESTONE])
  })
  upgrade('marvel:wasp_helmet', 'marvel:ant_man_helmet', ['#c:ingots/iron', '#c:ingots/iron', '#c:ingots/iron', '#c:ingots/iron', BLUESTONE, PYM, 'minecraft:yellow_stained_glass_pane'])
  upgrade('marvel:wasp_chestplate', 'marvel:ant_man_chestplate', [CLOTH, CLOTH, CLOTH, '#c:ingots/iron', '#c:ingots/iron', 'minecraft:honeycomb', CHITIN, PYM, PYM])
  const waspLower = ['leggings', 'boots']
  waspLower.forEach(slot => {
    upgrade(`marvel:wasp_${slot}`, `marvel:ant_man_${slot}`, [CLOTH, CLOTH, CLOTH, '#c:ingots/iron', '#c:ingots/iron', 'minecraft:honeycomb', CHITIN, BLUESTONE])
  })
})
