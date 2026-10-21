const $SpawnerLockSpawnEggItem = Java.loadClass('net.minecraft.world.item.SpawnEggItem')

const spawnerLockBlockEggs = event => {
  const player = event.player
  if (!player || player.isCreative()) return
  const stack = event.item
  if (stack.item instanceof $SpawnerLockSpawnEggItem || String(stack.id).endsWith('_spawn_egg')) event.cancel()
}

BlockEvents.rightClicked('minecraft:spawner', spawnerLockBlockEggs)
BlockEvents.rightClicked('minecraft:trial_spawner', spawnerLockBlockEggs)
