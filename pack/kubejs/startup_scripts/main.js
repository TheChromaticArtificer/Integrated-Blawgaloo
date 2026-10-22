Platform.mods.kubejs.name = 'Integrated Boogaloo'


StartupEvents.registry('item', event => {
	event.create('azure_neodymium_dust').displayName('Azure Neodymium Dust')
	event.create('attuned_citrine').displayName('Attuned Citrine')
	event.create('attuned_topaz').displayName('Attuned Topaz')
	event.create('attuned_onyx').displayName('Attuned Onyx')
	event.create('attuned_moonstone').displayName('Attuned Moonstone')
	event.create('red_death_fang').displayName('Red Death Fang').rarity('epic')
})
