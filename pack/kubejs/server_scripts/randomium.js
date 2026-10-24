['randomium:randomium_ore', 'randomium:randomium_ore_deepslate', 'randomium:randomium_ore_end'].forEach(ore => {
	BlockEvents.broken(ore, event => {
		if (event.player) event.player.unlockAdvancement('integrated_boogaloo:boogaloo/randomium')
	})
})
