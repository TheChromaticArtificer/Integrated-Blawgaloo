PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('starting_items')) {
      event.player.stages.add('starting_items')
      event.player.give('antos:antroid_phone')
      event.player.give('3x antarchy:cooked_corndog')
      event.player.give('lucky:lucky_block')
    }
  })
