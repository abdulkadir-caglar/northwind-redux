import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveProductReducer(state = initialState.savedProduct, action) {
    switch (action.type) {
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return action.payload
            break;

        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return action.payload
            break;

        default:
            return state;
    }
}