// Action Creator
export function changeMinNumber(newNumber){
    return {
        type:'MIN_NUMBER_CHANGED',
        payload: newNumber
    }
}

export function changeMaxNumber(newNumber){
    return {
        type:'MAX_NUMBER_CHANGED',
        payload: newNumber
    }
}