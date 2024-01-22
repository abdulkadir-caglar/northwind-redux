import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function(state = initialState.currentCategory, action){
    switch (action.type) {
        case actionTypes.CHANGED_CATEGORY:
            return action.payload
            break;
        
        default:
            return state;
    }
}