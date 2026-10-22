scoreboard objectives add ib.spawner dummy
execute if function integrated_boogaloo:spawner_rites/blocked run return 0
execute store result score #v ib.spawner run data get block ~ ~-1 ~ RequiredPlayerRange
execute if score #v ib.spawner matches 32.. run return run function integrated_boogaloo:spawner_rites/capped
scoreboard players add #v ib.spawner 4
execute if score #v ib.spawner matches 33.. run scoreboard players set #v ib.spawner 32
execute store result block ~ ~-1 ~ RequiredPlayerRange short 1 run scoreboard players get #v ib.spawner
function integrated_boogaloo:spawner_rites/success
