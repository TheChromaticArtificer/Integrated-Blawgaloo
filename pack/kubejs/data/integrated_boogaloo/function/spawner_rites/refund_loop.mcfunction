execute unless data storage integrated_boogaloo:spawner_rites refund[0] run return 0
summon minecraft:item ~ ~0.5 ~ {Tags:["ib_refund"],Item:{id:"minecraft:stone",count:1}}
data modify entity @e[type=minecraft:item,tag=ib_refund,limit=1,sort=nearest] Item set from storage integrated_boogaloo:spawner_rites refund[0]
tag @e[type=minecraft:item,tag=ib_refund] remove ib_refund
data remove storage integrated_boogaloo:spawner_rites refund[0]
function integrated_boogaloo:spawner_rites/refund_loop
