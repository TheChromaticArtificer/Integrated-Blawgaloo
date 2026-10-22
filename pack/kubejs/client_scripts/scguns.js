ItemEvents.modifyTooltips(event => {
  const ability = (item, lines) => event.add(item, lines.map(line => Text.of(line).gold()))

  ability('scguns:rat_king_and_queen', ['Royal Decree: hits have an 8% chance to Command the target (it fights for you)', 'and an 8% chance to inflict Temporal Dilation'])
  ability('scguns:cyclone', ['Vortex: 12% chance to invert the target\'s gravity'])
  ability('scguns:nervepinch', ['Night Terror: 25% chance to Paralyze the target'])
  ability('scguns:astella', ['Starfall: 15% chance to call lightning on the target'])
  ability('scguns:sterilizer', ['Fallout: 30% chance to Irradiate the target'])
  ability('scguns:earths_corpse', ['Tremor: 5% chance to Stun the target'])
  ability('scguns:ultra_knight_hawk', ['Silver Rounds: +50% damage against undead'])
  ability('scguns:locust', ['Devour: heals you for 10% of damage dealt'])
  ability('scguns:newborn_cyst', ['Brood: kills have a 20% chance to hatch a Jerry that fights for you for 30s'])
  ability('scguns:gauss_rifle', ['Magnetic Rounds: 20% chance to Magnetize the target'])
})
