ClientEvents.lang("en_us", event => {
  event.renameItem('marvel:palladium_arc_reactor', 'Netherite Arc Reactor'),
  event.renameItem('marvel:diamond_arc_reactor', 'Titanium Arc Reactor')
})

RecipeViewerEvents.removeEntries('item', e => {
  e.remove([
    'marvel:syringe',
    'marvel:reinforced_leather',
    'marvel:web_fluid',
    'marvel:web_shooter',
    'marvel:adamantium_claws',
    'marvel:optic_blast',
    'marvel:sonic_boom',
    'marvel:photon_blast'
  ])
})

RecipeViewerEvents.addInformation('item', e => {
  e.add('marvel:villager_blood_sample', ['Obtained by using an empty Syringe on an adult villager. The villager gets Nausea and can\'t be sampled again until it wears off.'])
  e.add('marvellegacy:syringe_empty', ['Use it on an adult villager to draw blood. Hold use on yourself to pull your current power back out into a filled syringe.'])
  e.add([
    'marvellegacy:syringe_spider_powers_peter_parker', 'marvellegacy:syringe_weapon_x_logan', 'integrated_superheroes:syringe_super_soldier_steve_rogers',
    'integrated_superheroes:syringe_heart_shaped_herb_tchalla', 'integrated_superheroes:syringe_weapon_x_wade_wilson', 'integrated_superheroes:syringe_super_speed_pietro_maximoff',
    'integrated_superheroes:syringe_optic_blasts_scott_summers', 'integrated_superheroes:syringe_binary_carol_danvers'
  ], ['Hold use to inject. You can only carry one power at a time, so extract the old one with an empty Syringe first.'])
  e.add('marvellegacy:web_shooters', ['Wear it in the bracelet slot. Use Web Cartridges while it\'s worn to refill it.'])
  e.add('integrated_superheroes:syringe_super_speed_pietro_maximoff', ['Turn on Speed Force, then hold Shift and scroll to change how fast your own time runs. The faster you go, the faster you get hungry.'])
  e.add('integrated_superheroes:syringe_optic_blasts_scott_summers', ['Without a Cyclops visor on, Optic Blast fires wide and can\'t be aimed.'])
  e.add('integrated_superheroes:syringe_heart_shaped_herb_tchalla', ['Ancestral Plane saves you from death once, then needs a long time to recover.'])
  e.add('integrated_superheroes:syringe_absorption_anna_marie', ['Turn Gloves off to absorb whatever you punch. Memories wear off after a while and are lost when you die.'])
  e.add('integrated_superheroes:syringe_kinetic_charge_remy_lebeau', ['Kinetic Throw charges and throws whatever you\'re holding, or a card if your hand is empty. Some items burst with fire, frost or lightning.'])
  e.add('marvellegacy:paper_bag',['Obtained from zombies, which sometimes spawn wearing one.'])

  const energySuits = [2, 3, 5, 6, 7, 11, 15, 17, 19, 20, 21, 22, 23, 24, 25, 28, 30, 33, 35, 37, 38, 39, 42, 43]
    .map(mark => `iron_man_mark_${mark}`)
    .concat(['war_machine_mark_1', 'war_machine_mark_2', 'iron_patriot'])
  const suitPieces = []
  energySuits.forEach(suit => ['helmet', 'chestplate', 'leggings', 'boots'].forEach(slot => suitPieces.push(`marvel:${suit}_${slot}`)))
  e.add(suitPieces, ['Runs on FE. Charge it in a Suit Charger, an Oritech Charger or any FE charger. Suits stored with Veronica slowly recharge on their own, and later marks hold far more charge.'])
  e.add('marvel:suit_charger', ['Charges the suit inside it with FE from cables. Any mark fills in about 30 seconds if the power keeps up.'])
  e.add('marvel:mark_38_charger', ['Charges docked Mk38 sentries with FE from cables attached to any part of it.'])
})
