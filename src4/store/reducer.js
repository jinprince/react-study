import {
    ADD_NUMBER,
    SUB_NUMBER,
    INC_NUMBER,
    DEC_NUMBER,
    CHANGE_BANNERS,
    CHANGE_RECOMMENDS

} from './constants.js'
const defaultState={
    counter:0,
    banners:[],
    recommends:[]

}
function reducer(state=defaultState,action){
    switch(action.type){
        case ADD_NUMBER:
            return {...state,counter:state.counter+action.num}
        case SUB_NUMBER:
            return {...state,counter:state.counter-action.num}
        case INC_NUMBER:
            return {...state,counter:state.counter+1}
        case DEC_NUMBER:
            return {...state,counter:state.counter-1}
        case CHANGE_BANNERS:
            return {...state,banners:action.banners}
        case CHANGE_RECOMMENDS:
            return {...state,recommends:action.recommends}
        default:
            return state
    }

}
export default reducer;