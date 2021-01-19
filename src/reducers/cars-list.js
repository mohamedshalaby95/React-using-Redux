export function carsList(state = null, action) {
    console.log('cars list reducer',action)
    if (action.type === 'CARS_LIST')
        return action.payload

    return state
}
