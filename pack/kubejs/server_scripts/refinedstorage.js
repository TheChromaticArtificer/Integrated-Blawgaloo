ServerEvents.recipes(event => {
  const removedOutputs = [
    'refinedstorage:quartz_enriched_copper',
    'refinedstorage:silicon',
    'refinedstorage:processor_binding',
    'refinedstorage:raw_basic_processor',
    'refinedstorage:raw_improved_processor',
    'refinedstorage:raw_advanced_processor',
    'refinedstorage:basic_processor',
    'refinedstorage:improved_processor',
    'refinedstorage:advanced_processor',
    'refinedstorage:machine_casing',
    'refinedstorage:construction_core',
    'refinedstorage:destruction_core',
    'refinedstorage:storage_housing',
    '#refinedstorage:autocrafters',
    '#refinedstorage:autocrafter_managers',
    '#refinedstorage:autocrafting_monitors',
    '#refinedstorage:pattern_grids',
    '#refinedstorage:constructors',
    '#refinedstorage:destructors',
    '#refinedstorage:creative_controllers',
    'refinedstorage:autocrafting_upgrade',
    'refinedstorage:wireless_autocrafting_monitor',
    'refinedstorage:pattern',
    'refinedstorage:fortune_1_upgrade',
    'refinedstorage:fortune_2_upgrade',
    'refinedstorage:fortune_3_upgrade',
    'refinedstorage:silk_touch_upgrade',
    'refinedstorage:portable_grid',
    'refinedstorage:1k_storage_block',
    'refinedstorage:4k_storage_block',
    'refinedstorage:16k_storage_block',
    'refinedstorage:64k_storage_block',
    'refinedstorage:64b_fluid_storage_block',
    'refinedstorage:256b_fluid_storage_block',
    'refinedstorage:1024b_fluid_storage_block',
    'refinedstorage:4096b_fluid_storage_block',
    'refinedstorage:creative_portable_grid',
    'refinedstorage:creative_storage_block',
    'refinedstorage:creative_fluid_storage_block',
    'refinedstorage:creative_storage_disk',
    'refinedstorage:creative_fluid_storage_disk',
    'refinedstorage:creative_wireless_grid',
    'refinedstorage:creative_wireless_autocrafting_monitor',
    'refinedstorage:creative_range_upgrade',
    'refinedstorage:wrench',
    'supplementaries:wrench',
    'refurbished_furniture:wrench',
    'extradisks:advanced_storage_housing',
    'extradisks:advanced_machine_casing',
    'extradisks:raw_withering_processor',
    'extradisks:withering_processor'
  ]
  removedOutputs.forEach(output => event.remove({ output: output }))

  const extraDisksSizes = {
    item: ['256k', '1024k', '4096k', '16384k', '65536k', '262144k', '1048576k', 'infinite'],
    fluid: ['16384b', '65536b', '262144b', '1048576b', 'infinite']
  }
  Object.keys(extraDisksSizes).forEach(type => {
    extraDisksSizes[type].forEach(size => event.remove({ output: `extradisks:${size}_${type}_storage_block` }))
  })

  event.remove({ input: 'refinedstorage:storage_housing' })
  event.remove({ input: 'extradisks:advanced_storage_housing' })

  const Q = 'refinedstorage:quartz_enriched_iron'
  const P = 'oritech:processing_unit'
  const A = 'oritech:advanced_computing_engine'
  const M = '#oritech:plating'
  const TITANIUM = 'antarchy:titanium_ingot'
  const VIBRANIUM = 'marvel:vibranium_ingot'
  const ADAMANTIUM = 'marvel:adamantium_ingot'

  event.recipes.oritech.foundry().itemInputs(['minecraft:iron_ingot', 'minecraft:quartz']).itemOutputs('2x refinedstorage:quartz_enriched_iron').time(60)

  const reshaped = (id, pattern, key) => {
    event.remove({ id: id })
    event.shaped(id, pattern, key)
  }
  const reshapeless = (id, ingredients) => {
    event.remove({ id: id })
    event.shapeless(id, ingredients)
  }

  event.remove({ id: 'refinedstorage:cable' })
  event.shaped('12x refinedstorage:cable', ['CCC', 'GRG', 'CCC'], { C: 'minecraft:copper_ingot', G: '#c:glass_blocks', R: '#c:dusts/redstone' })
  reshaped('refinedstorage:controller', ['QPQ', 'SMS', 'QBQ'], { Q: Q, P: P, S: 'oritech:silicon', M: M, B: 'oritech:basic_battery' })
  reshaped('refinedstorage:disk_drive', ['QCQ', 'QMQ', 'QPQ'], { Q: Q, C: '#c:chests', M: M, P: P })
  reshaped('refinedstorage:grid', ['PQG', 'QMG', 'PQG'], { P: P, Q: Q, M: M, G: '#c:glass_blocks' })
  reshapeless('refinedstorage:crafting_grid', ['refinedstorage:grid', P, '#c:player_workstations/crafting_tables'])
  reshaped('refinedstorage:storage_monitor', ['QGQ', 'PMP', 'QQQ'], { Q: Q, G: '#c:glass_blocks', P: P, M: M })
  reshaped('refinedstorage:external_storage', ['QPQ', 'HCH', 'QQQ'], { Q: Q, P: P, H: '#c:chests', C: 'refinedstorage:cable' })
  reshapeless('refinedstorage:importer', ['refinedstorage:cable', P, 'minecraft:hopper'])
  reshapeless('refinedstorage:exporter', ['refinedstorage:cable', P, 'minecraft:dropper'])
  reshaped('refinedstorage:disk_interface', ['QHQ', 'PMP', 'QHQ'], { Q: Q, H: 'minecraft:hopper', P: P, M: M })
  reshapeless('refinedstorage:relay', [M, 'refinedstorage:cable', P, 'minecraft:redstone_torch'])
  reshaped('refinedstorage:interface', ['QIQ', 'RMR', 'QEQ'], { Q: Q, I: 'refinedstorage:importer', E: 'refinedstorage:exporter', R: '#c:dusts/redstone', M: M })
  reshaped('refinedstorage:detector', ['QRQ', 'CMC', 'QPQ'], { Q: Q, R: 'minecraft:redstone_torch', C: 'minecraft:comparator', M: M, P: P })
  reshaped('refinedstorage:upgrade', ['QGQ', 'QPQ', 'QGQ'], { Q: Q, G: '#c:glass_blocks', P: P })
  reshaped('refinedstorage:configuration_card', ['QQQ', 'XPX', 'QQQ'], { Q: Q, X: 'minecraft:paper', P: P })
  reshaped('refinedstorage:network_card', ['QQQ', 'XPX', 'QQQ'], { Q: Q, X: 'minecraft:paper', P: A })
  reshaped('refinedstorage:security_card', ['QQQ', 'NKN', 'QQQ'], { Q: Q, N: 'refinedstorage:network_card', K: 'securitycraft:keycard_lv1' })
  reshaped('refinedstorage:security_manager', ['QRQ', 'SMS', 'QFQ'], { Q: Q, R: 'securitycraft:keycard_reader', S: 'refinedstorage:security_card', F: 'refinedstorage:fallback_security_card', M: M })

  const SILICON = 'oritech:silicon'
  const WAFER = 'oritech:silicon_wafer'
  const WIRE = 'minecraft:copper_ingot'
  const PLASTIC = 'alexscaves:polymer_plate'
  const BLUESTONE = 'antarchy:bluestone'
  const BLOOD_CRYSTAL = 'antarchy:blood_crystal_shard'

  reshaped('refinedstorage:1k_storage_part', ['SWS', 'GRG', 'SGS'], { S: SILICON, W: WIRE, G: '#c:glass_blocks', R: '#c:dusts/redstone' })
  reshaped('refinedstorage:64b_fluid_storage_part', ['SWS', 'GBG', 'SGS'], { S: SILICON, W: WIRE, G: '#c:glass_blocks', B: '#c:buckets/empty' })

  const storagePart = (output, previous, processor, filler, chip) => {
    reshaped(`refinedstorage:${output}`, ['PWP', 'SRS', 'PSP'], { P: processor, W: chip, S: previous, R: filler })
  }
  storagePart('4k_storage_part', 'refinedstorage:1k_storage_part', P, '#c:dusts/redstone', SILICON)
  storagePart('16k_storage_part', 'refinedstorage:4k_storage_part', P, '#c:dusts/redstone', SILICON)
  storagePart('64k_storage_part', 'refinedstorage:16k_storage_part', A, '#c:dusts/redstone', WAFER)
  storagePart('256b_fluid_storage_part', 'refinedstorage:64b_fluid_storage_part', P, '#c:buckets/empty', SILICON)
  storagePart('1024b_fluid_storage_part', 'refinedstorage:256b_fluid_storage_part', P, '#c:buckets/empty', SILICON)
  storagePart('4096b_fluid_storage_part', 'refinedstorage:1024b_fluid_storage_part', A, '#c:buckets/empty', WAFER)

  const assembleDisk = (disk, part, extras) => {
    event.remove({ output: disk, type: 'minecraft:crafting_shaped' })
    event.recipes.oritech.assembler().itemInputs([part, PLASTIC].concat(extras)).itemOutputs(disk).time(80)
  }
  const rsDiskSizes = {
    storage: ['1k', '4k', '16k', '64k'],
    fluid_storage: ['64b', '256b', '1024b', '4096b']
  }
  Object.keys(rsDiskSizes).forEach(type => {
    rsDiskSizes[type].forEach(size => {
      assembleDisk(`refinedstorage:${size}_${type}_disk`, `refinedstorage:${size}_${type}_part`, ['minecraft:glass', Q])
    })
  })

  reshaped('refinedstorage:wireless_transmitter', ['TET', 'TMT', 'TPT'], { T: TITANIUM, E: 'pastel:radiating_ender', M: M, P: P })
  reshaped('refinedstorage:wireless_grid', ['TET', 'TGT', 'TPT'], { T: TITANIUM, E: 'pastel:radiating_ender', G: '#refinedstorage:grids', P: P })
  reshaped('refinedstorage:range_upgrade', ['QTQ', 'TUT', 'QQQ'], { Q: Q, T: TITANIUM, U: 'refinedstorage:upgrade' })
  reshaped('refinedstorage:network_transmitter', ['EEE', 'VMV', 'AVA'], { E: 'pastel:radiating_ender', V: VIBRANIUM, M: M, A: A })
  reshaped('refinedstorage:network_receiver', ['AVA', 'VMV', 'EEE'], { E: 'pastel:radiating_ender', V: VIBRANIUM, M: M, A: A })

  const extraDisksPart = (output, previous, processor, metal, core) => {
    event.remove({ output: `extradisks:${output}` })
    event.shaped(`extradisks:${output}`, ['DED', 'PRP', 'DPD'], { D: processor, E: metal, P: previous, R: core })
  }
  const AI = 'oritech:super_ai_chip'
  const COMPENSATOR = 'oritech:heisenberg_compensator'
  const BEDROCK = 'pastel:bedrock_dust'

  extraDisksPart('256k_item_storage_part', 'refinedstorage:64k_storage_part', A, TITANIUM, BLUESTONE)
  extraDisksPart('1024k_item_storage_part', 'extradisks:256k_item_storage_part', A, TITANIUM, BLUESTONE)
  extraDisksPart('4096k_item_storage_part', 'extradisks:1024k_item_storage_part', A, TITANIUM, BLUESTONE)
  extraDisksPart('16384k_item_storage_part', 'extradisks:4096k_item_storage_part', A, VIBRANIUM, BLUESTONE)
  extraDisksPart('65536k_item_storage_part', 'extradisks:16384k_item_storage_part', A, VIBRANIUM, BLUESTONE)
  extraDisksPart('262144k_item_storage_part', 'extradisks:65536k_item_storage_part', A, VIBRANIUM, BLUESTONE)
  extraDisksPart('1048576k_item_storage_part', 'extradisks:262144k_item_storage_part', AI, ADAMANTIUM, BLUESTONE)
  extraDisksPart('infinite_item_storage_part', 'extradisks:1048576k_item_storage_part', AI, BEDROCK, COMPENSATOR)

  extraDisksPart('16384b_fluid_storage_part', 'refinedstorage:4096b_fluid_storage_part', A, TITANIUM, BLUESTONE)
  extraDisksPart('65536b_fluid_storage_part', 'extradisks:16384b_fluid_storage_part', A, TITANIUM, BLUESTONE)
  extraDisksPart('262144b_fluid_storage_part', 'extradisks:65536b_fluid_storage_part', A, VIBRANIUM, BLUESTONE)
  extraDisksPart('1048576b_fluid_storage_part', 'extradisks:262144b_fluid_storage_part', A, VIBRANIUM, BLUESTONE)
  extraDisksPart('infinite_fluid_storage_part', 'extradisks:1048576b_fluid_storage_part', AI, BEDROCK, COMPENSATOR)

  const diskTypes = ['item', 'fluid']
  diskTypes.forEach(type => {
    extraDisksSizes[type].forEach(size => {
      assembleDisk(`extradisks:${size}_${type}_storage_disk`, `extradisks:${size}_${type}_storage_part`, [BLOOD_CRYSTAL, BLOOD_CRYSTAL])
    })
  })
})

ServerEvents.tags('item', event => {
  event.remove('c:silicon', 'refinedstorage:silicon')
})
