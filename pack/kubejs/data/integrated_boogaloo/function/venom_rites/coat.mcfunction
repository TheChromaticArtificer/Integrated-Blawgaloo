$data modify storage integrated_boogaloo:venom_rites item set value {id:"$(item)",count:1}
$data modify storage integrated_boogaloo:venom_rites item set from block ~ ~ ~ failsafeItems[{id:"$(item)"}]
data modify storage integrated_boogaloo:venom_rites item.count set value 1
data remove storage integrated_boogaloo:venom_rites item.components."pastel:ink_powered"
execute at @s run summon minecraft:item ~ ~ ~ {Tags:["ib_venom"],PickupDelay:0s,Item:{id:"minecraft:stone",count:1}}
execute at @s run data modify entity @e[type=minecraft:item,tag=ib_venom,limit=1,sort=nearest] Item set from storage integrated_boogaloo:venom_rites item
$execute at @s run item modify entity @e[type=minecraft:item,tag=ib_venom,limit=1,sort=nearest] contents $(modifier)
execute at @s run data modify entity @e[type=minecraft:item,tag=ib_venom,limit=1,sort=nearest] Owner set from entity @s UUID
tag @e[type=minecraft:item,tag=ib_venom] remove ib_venom
data remove storage integrated_boogaloo:venom_rites item
