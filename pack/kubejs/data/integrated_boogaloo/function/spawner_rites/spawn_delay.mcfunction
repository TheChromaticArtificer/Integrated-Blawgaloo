scoreboard objectives add ib.spawner dummy
execute if function integrated_boogaloo:spawner_rites/blocked run return 0
execute store result score #min ib.spawner run data get block ~ ~-1 ~ MinSpawnDelay
execute store result score #max ib.spawner run data get block ~ ~-1 ~ MaxSpawnDelay
execute if score #min ib.spawner matches ..100 if score #max ib.spawner matches ..200 run return run function integrated_boogaloo:spawner_rites/capped
scoreboard players set #fmin ib.spawner 100
scoreboard players set #fmax ib.spawner 200
scoreboard players operation #fmin ib.spawner < #min ib.spawner
scoreboard players operation #fmax ib.spawner < #max ib.spawner
execute store result score #min ib.spawner run data get block ~ ~-1 ~ MinSpawnDelay 0.8
execute store result score #max ib.spawner run data get block ~ ~-1 ~ MaxSpawnDelay 0.8
scoreboard players operation #min ib.spawner > #fmin ib.spawner
scoreboard players operation #max ib.spawner > #fmax ib.spawner
execute store result block ~ ~-1 ~ MinSpawnDelay short 1 run scoreboard players get #min ib.spawner
execute store result block ~ ~-1 ~ MaxSpawnDelay short 1 run scoreboard players get #max ib.spawner
function integrated_boogaloo:spawner_rites/success
