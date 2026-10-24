scoreboard objectives add ib.spawner dummy
execute if function integrated_boogaloo:spawner_rites/blocked run return 0
execute store result score #v ib.spawner run data get block ~ ~-1 ~ MaxNearbyEntities
execute if score #v ib.spawner matches 16.. run return run function integrated_boogaloo:spawner_rites/capped
scoreboard players add #v ib.spawner 2
execute if score #v ib.spawner matches 17.. run scoreboard players set #v ib.spawner 16
execute store result block ~ ~-1 ~ MaxNearbyEntities short 1 run scoreboard players get #v ib.spawner
function integrated_boogaloo:spawner_rites/success
