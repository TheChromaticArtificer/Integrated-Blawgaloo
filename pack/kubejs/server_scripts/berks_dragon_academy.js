const BDA_CUT_ANIMALS = ['bda:chicken', 'bda:sheep']

EntityEvents.spawned(event => {
    if (BDA_CUT_ANIMALS.includes(String(event.entity.type))) event.cancel()
})
