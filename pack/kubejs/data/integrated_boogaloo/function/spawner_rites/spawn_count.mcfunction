scoreboard objectives add ib.spawner dummy
execute if function integrated_boogaloo:spawner_rites/blocked run return 0
execute store result score #v ib.spawner run data get block ~ ~-1 ~ SpawnCount
execute if score #v ib.spawner matches 8.. run return run function integrated_boogaloo:spawner_rites/capped
scoreboard players add #v ib.spawner 1
execute if score #v ib.spawner matches 9.. run scoreboard players set #v ib.spawner 8
execute store result block ~ ~-1 ~ SpawnCount short 1 run scoreboard players get #v ib.spawner
function integrated_boogaloo:spawner_rites/success
