import * as actionTypes from "./actionTypes";

export function changeCategory(category){
    return {
        type: actionTypes.CHANGED_CATEGORY,
        payload: category
    }
}