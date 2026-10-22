ServerEvents.recipes(event => {
  event.replaceInput({}, 'abyssal_decor:white_pearl', 'alexscaves:pearl')
  event.replaceOutput({}, 'abyssal_decor:white_pearl', 'alexscaves:pearl')

  event.remove({ id: 'abyssal_decor:amaranth_crate_recipe' })
  event.remove({ id: 'abyssal_decor:amaranth_crate_decraft' })
  event.shaped('abyssal_decor:amaranth_crate', [
    'PPP',
    'PPP',
    'PPP'
  ], {
    P: 'pastel:amaranth_bushel'
  }).id('integrated_boogaloo:amaranth_crate_from_pastel_bushels')
  event.shapeless('9x pastel:amaranth_bushel', [
    'abyssal_decor:amaranth_crate'
  ]).id('integrated_boogaloo:pastel_bushels_from_amaranth_crate')

  event.remove({ id: 'abyssal_decor:jade_temp_recipe' })
  event.shapeless('4x abyssal_decor:rough_jade', [
    'pastel:jadeite_petals',
    'pastel:jadeite_petals',
    'pastel:jade_vine_petals',
    'pastel:jade_vine_petals'
  ]).id('integrated_boogaloo:rough_jade_from_pastel')

  event.shaped('abyssal_decor:serpent_scales', [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: '#iceandfire:scales/sea_serpent'
  }).id('integrated_boogaloo:serpent_scales_from_ice_and_fire')

  event.remove({ id: 'abyssal_decor:fresnel_block_recipe' })
  event.remove({ id: 'abyssal_decor:fresnel_glass_recipe' })
  event.shaped('8x abyssal_decor:fresnel_block', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'oritech:nickel_nugget',
    B: 'minecraft:glass',
    C: 'minecraft:prismarine_crystals'
  }).id('integrated_boogaloo:fresnel_block_from_oritech')
  event.remove({ id: 'abyssal_decor:fresnel_lamp_recipe' })
  event.shaped('abyssal_decor:fresnel_lamp', [
    ' A ',
    'BCB',
    ' D '
  ], {
    A: 'oritech:nickel_nugget',
    B: 'abyssal_decor:fresnel_pane',
    C: 'abyssal_decor:fresnel_block',
    D: 'abyssal_decor:bulb_lamp_floor'
  }).id('integrated_boogaloo:fresnel_lamp_from_oritech')

  event.remove({ id: 'abyssal_decor:deepbronze_ingot_temp_recipe' })
  event.remove({ id: 'abyssal_decor:deepbronze_block_smelt' })
  event.recipes.oritech.foundry()
    .itemInputs(['minecraft:copper_ingot', 'oritech:nickel_ingot'])
    .itemOutputs('3x abyssal_decor:deepbronze_ingot')
    .time(160)
    .id('integrated_boogaloo:deepbronze_from_oritech_foundry')

  event.remove({ id: 'abyssal_decor:blackwood_log_recipe' })

  event.recipes.oritech.foundry()
    .itemInputs(['minecraft:copper_ingot', 'minecraft:gold_ingot'])
    .itemOutputs('2x abyssal_decor:seabrass_ingot')
    .time(100)
    .id('integrated_boogaloo:seabrass_from_oritech_foundry')
  event.shapeless('3x abyssal_decor:seabrass_ingot', ['minecraft:copper_ingot', 'minecraft:copper_ingot', 'minecraft:copper_ingot', 'antarchy:seashell'])
    .id('integrated_boogaloo:seabrass_from_seashell')
  event.recipes.oritech.foundry()
    .itemInputs(['minecraft:copper_ingot', 'antarchy:seashell'])
    .itemOutputs('2x abyssal_decor:seabrass_ingot')
    .time(100)
    .id('integrated_boogaloo:seabrass_from_seashell_oritech_foundry')
})
