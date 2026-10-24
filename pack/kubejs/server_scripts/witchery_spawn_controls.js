EntityEvents.spawned(event => {
  const entity = event.entity
  if (entity.type != 'witchery:nightmare') return
  if (entity.level.dimension != 'antarchy:thoraxis') return

  if (entity.y < 0) event.cancel()
})
