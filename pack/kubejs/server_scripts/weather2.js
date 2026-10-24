ServerEvents.recipes(event => {
  const weather2Recipes = [
    'anemometer',
    'wind_vane',
    'weather_forecast',
    'tornado_sensor',
    'tornado_siren',
    'weather_deflector',
    'wind_turbine',
    'weather_item'
  ]
  weather2Recipes.forEach(id => event.remove({ id: `weather2:${id}` }))

  event.shaped('weather2:anemometer', [' B ', 'CRC', ' C '], {
    B: 'minecraft:breeze_rod',
    C: '#c:ingots/copper',
    R: '#c:dusts/redstone'
  }).id('kubejs:weather2/anemometer')

  event.shaped('weather2:wind_vane', [' C ', 'RBR', ' C '], {
    B: 'minecraft:breeze_rod',
    C: '#c:ingots/copper',
    R: '#c:dusts/redstone'
  }).id('kubejs:weather2/wind_vane')

  event.shaped('weather2:weather_forecast', ['IRI', 'RVR', 'ICI'], {
    I: '#c:ingots/iron',
    R: '#c:dusts/redstone',
    V: 'antarchy:vortex_charge',
    C: 'minecraft:compass'
  }).id('kubejs:weather2/weather_forecast')

  event.shaped('weather2:tornado_sensor', ['I I', 'CVC', 'I I'], {
    I: '#c:ingots/iron',
    C: 'minecraft:comparator',
    V: 'antarchy:vortex_charge'
  }).id('kubejs:weather2/tornado_sensor')

  event.shaped('weather2:tornado_siren', ['INI', 'NSN', 'INI'], {
    I: '#c:ingots/iron',
    N: 'minecraft:note_block',
    S: 'weather2:tornado_sensor'
  }).id('kubejs:weather2/tornado_siren')

  event.shaped('weather2:weather_deflector', ['PFP', 'VMV', 'PFP'], {
    P: 'oritech:machine_plating_block',
    F: 'antarchy:stratoshark_fin',
    V: 'antarchy:vortex_charge',
    M: 'oritech:machine_frame_block'
  }).id('kubejs:weather2/weather_deflector')

  event.shaped('weather2:wind_turbine', ['CBC', 'CVC', ' I '], {
    C: '#c:ingots/copper',
    B: 'minecraft:breeze_rod',
    V: 'weather2:wind_vane',
    I: '#c:storage_blocks/iron'
  }).id('kubejs:weather2/wind_turbine')
})
