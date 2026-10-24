data remove storage integrated_boogaloo:spawner_rites refund
data modify storage integrated_boogaloo:spawner_rites refund set from block ~ ~ ~ failsafeItems
function integrated_boogaloo:spawner_rites/refund_loop
playsound pastel:fusion_shrine_crafting_aborted block @a ~ ~ ~
return 1
