export function carDetails(state=null,action){
    if(action.type==='CAR_DETAILS')
        return { ...state, details: action.payload }
    
    return state
}
