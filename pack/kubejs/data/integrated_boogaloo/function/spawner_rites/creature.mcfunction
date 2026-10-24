execute if function integrated_boogaloo:spawner_rites/blocked run return 0
execute unless entity @s[advancements={pastel:milestones/unlock_spawner_creature_change=true}] run title @s actionbar "You can't change what a spawner holds yet."
execute unless entity @s[advancements={pastel:milestones/unlock_spawner_creature_change=true}] run return run function integrated_boogaloo:spawner_rites/refund
data remove storage integrated_boogaloo:spawner_rites memory
data modify storage integrated_boogaloo:spawner_rites memory set from block ~ ~ ~ failsafeItems[{id:"pastel:memory"}].components."minecraft:entity_data"
execute unless data storage integrated_boogaloo:spawner_rites memory.id run title @s actionbar "The circle couldn't read the Memory."
execute unless data storage integrated_boogaloo:spawner_rites memory.id run return run function integrated_boogaloo:spawner_rites/refund
execute if function integrated_boogaloo:spawner_rites/memory_is_boss run title @s actionbar "That creature is too strong to bind."
execute if function integrated_boogaloo:spawner_rites/memory_is_boss run return run function integrated_boogaloo:spawner_rites/refund
data modify block ~ ~-1 ~ SpawnData set value {entity:{}}
data modify block ~ ~-1 ~ SpawnData.entity set from storage integrated_boogaloo:spawner_rites memory
data remove block ~ ~-1 ~ SpawnPotentials
advancement grant @s only integrated_boogaloo:witchcraft/spawner_creature
function integrated_boogaloo:spawner_rites/success
