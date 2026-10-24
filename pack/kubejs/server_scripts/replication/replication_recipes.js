ServerEvents.recipes(event => {
  const I = 'replication:replica_ingot'

  event.remove({ id: 'replication:smelting_raw_replica' })
  event.remove({ id: 'replication:blasting_raw_replica' })
  event.remove({ id: 'replication:raw_replica_block' })
  event.remove({ id: 'replication:raw_replica' })

  event.custom({
    type: 'oritech:particle_collision',
    ingredients: [
      { item: 'antarchy:uranium_ingot' },
      { item: 'antarchy:antimetal' }
    ],
    results: [{ count: 3, id: I }],
    time: 5000
  }).id('kubejs:replication/replica_ingot_particle_collision')

  event.remove({ id: 'replication:replication_terminal' })
  event.shaped('replication:replication_terminal', [
    'III',
    'IUP',
    'ISI'
  ], {
    I: I,
    U: 'oritech:processing_unit',
    P: '#c:glass_panes',
    S: 'oritech:silicon_wafer'
  })

  event.remove({ id: 'replication:matter_tank' })
  event.shaped('replication:matter_tank', [
    'IGI',
    'GCG',
    'IGI'
  ], {
    I: I,
    G: '#c:glass_blocks',
    C: 'oritech:magnetic_coil'
  })

  event.remove({ id: 'replication:identification_chamber' })
  event.shaped('replication:identification_chamber', [
    'IU ',
    'IPU',
    'III'
  ], {
    I: I,
    U: 'oritech:processing_unit',
    P: '#c:glass_panes'
  })

  event.remove({ id: 'replication:matter_network_pipe' })
  event.shaped('8x replication:matter_network_pipe', [
    'PPP',
    'ICI',
    'PPP'
  ], {
    I: I,
    P: '#c:glass_panes',
    C: 'oritech:magnetic_coil'
  })

  event.remove({ id: 'replication:replicator' })
  event.shaped('replication:replicator', [
    'IM ',
    'IAS',
    'III'
  ], {
    I: I,
    M: 'oritech:motor',
    A: 'oritech:advanced_computing_engine',
    S: 'minecraft:iron_ingot'
  })

  event.remove({ id: 'replication:disintegrator' })
  event.shaped('replication:disintegrator', [
    'ITC',
    'ITC',
    'III'
  ], {
    I: I,
    T: 'replication:matter_tank',
    C: 'oritech:magnetic_coil'
  })

  event.remove({ id: 'replication:matter_blueprint' })
  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'misc',
    pattern: ['RUR', 'MPM', 'RWR'],
    key: {
      R: { item: I },
      U: { item: 'oritech:processing_unit' },
      M: { item: 'oritech:motor' },
      P: { item: 'minecraft:paper' },
      W: { item: 'oritech:silicon_wafer' }
    },
    result: {
      id: 'replication:matter_blueprint',
      count: 1,
      components: {
        'replication:blueprint': {
          Item: { count: 1, id: 'replication:replicator_motor' },
          Progress: 1.0
        }
      }
    }
  }).id('kubejs:replication/matter_blueprint')

  event.remove({ id: 'replication:chip_storage' })
  event.shaped('replication:chip_storage', [
    'SS ',
    'ICU',
    'III'
  ], {
    I: I,
    S: 'minecraft:iron_ingot',
    C: '#c:chests/wooden',
    U: 'oritech:processing_unit'
  })

  event.remove({ id: 'replication:memory_chip' })
  event.shaped('replication:memory_chip', [
    ' WI',
    'WIG',
    'IG '
  ], {
    I: I,
    W: 'oritech:silicon_wafer',
    G: 'minecraft:gold_ingot'
  })
})
