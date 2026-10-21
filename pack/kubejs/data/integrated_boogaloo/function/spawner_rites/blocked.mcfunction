execute unless block ~ ~-1 ~ minecraft:spawner run title @s actionbar "There's no spawner under the chalk."
execute unless block ~ ~-1 ~ minecraft:spawner run return run function integrated_boogaloo:spawner_rites/refund
execute unless entity @s[advancements={pastel:milestones/unlock_spawner_manipulation=true}] run title @s actionbar "You don't know enough about spawners yet."
execute unless entity @s[advancements={pastel:milestones/unlock_spawner_manipulation=true}] run return run function integrated_boogaloo:spawner_rites/refund
execute if function integrated_boogaloo:spawner_rites/holds_boss run title @s actionbar "This spawner is too strong to change."
execute if function integrated_boogaloo:spawner_rites/holds_boss run return run function integrated_boogaloo:spawner_rites/refund
return fail
