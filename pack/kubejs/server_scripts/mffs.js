const removedMffs = [
  'mffs:steel_compound',
  'mffs:steel_ingot',
  'mffs:battery',
  'mffs:handbook'
]

ServerEvents.recipes(event => {
  removedMffs.forEach(item => event.remove({ output: item }))

  const PLATING = '#oritech:plating'
  const CIRCUIT = 'oritech:processing_unit'
  const ADV_CIRCUIT = 'oritech:advanced_computing_engine'
  const LENS = 'oritech:enderic_lens'
  const BATTERY = 'oritech:basic_battery'
  const ADV_BATTERY = 'oritech:advanced_battery'
  const COIL = 'oritech:magnetic_coil'
  const WAFER = 'oritech:silicon_wafer'
  const CORE = 'oritech:machine_core_3'
  const FOCUS = 'mffs:focus_matrix'
  const REDSTONE = '#c:dusts/redstone'
  const IRON = '#c:ingots/iron'

  const reshaped = (id, pattern, key, count) => {
    event.remove({ id: id })
    event.shaped(count ? `${count}x ${id}` : id, pattern, key)
  }
  const reshapeless = (id, ingredients) => {
    event.remove({ id: id })
    event.shapeless(id, ingredients)
  }

  reshaped('mffs:focus_matrix', ['RWR', 'IDI', 'RWR'], { R: REDSTONE, W: WAFER, I: IRON, D: '#c:gems/diamond' }, 9)
  reshaped('mffs:coercion_deriver', ['PFP', 'CXC', 'PBP'], { P: PLATING, F: FOCUS, C: COIL, X: CORE, B: BATTERY })
  reshaped('mffs:fortron_capacitor', ['PFP', 'FAF', 'PFP'], { P: PLATING, F: FOCUS, A: ADV_BATTERY })
  reshaped('mffs:projector', [' L ', 'FUF', 'PXP'], { L: LENS, F: FOCUS, U: CIRCUIT, P: PLATING, X: CORE })
  reshaped('mffs:interdiction_matrix', ['SAS', 'FRF', 'FEF'], { S: 'mffs:shock_module', A: ADV_CIRCUIT, F: FOCUS, R: 'securitycraft:portable_radar', E: '#c:chests/ender' })
  reshaped('mffs:remote_controller', [' U ', 'PBP', 'PKP'], { U: CIRCUIT, P: PLATING, B: BATTERY, K: 'securitycraft:keycard_holder' })

  reshapeless('mffs:blank_card', ['securitycraft:keycard_lv1', 'oritech:silicon'])
  reshapeless('mffs:id_card', ['mffs:blank_card', 'securitycraft:keycard_lv3'])
  reshaped('mffs:biometric_identifier', ['FSF', 'PKP', 'FCF'], { F: FOCUS, S: 'securitycraft:retinal_scanner', P: PLATING, K: 'securitycraft:keycard_reader', C: 'mffs:blank_card' })

  reshaped('mffs:capacity_module', ['FBF'], { F: FOCUS, B: BATTERY }, 2)
  reshaped('mffs:disintegration_module', [' P ', 'FAF', ' P '], { P: 'minecraft:diamond_pickaxe', F: FOCUS, A: ADV_CIRCUIT })
  reshaped('mffs:stabilization_module', ['FAF', 'PSX', 'FDF'], { F: FOCUS, A: ADV_CIRCUIT, P: 'minecraft:diamond_pickaxe', S: 'minecraft:diamond_shovel', X: 'minecraft:diamond_axe', D: '#c:gems/diamond' })
  reshapeless('mffs:warn_module', [FOCUS, 'securitycraft:alarm'])
  reshaped('mffs:anti_personnel_module', ['RFH', ' M '], { R: 'mffs:anti_friendly_module', F: FOCUS, H: 'mffs:anti_hostile_module', M: 'securitycraft:harming_module' })
  reshaped('mffs:confiscation_module', ['PEP', 'EME', 'PEP'], { P: '#c:ender_pearls', E: 'minecraft:ender_eye', M: 'securitycraft:storage_module' })
})

ServerEvents.tags('item', event => {
  event.removeAllTagsFrom(removedMffs)
})
