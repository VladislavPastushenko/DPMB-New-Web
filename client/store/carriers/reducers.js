import {
    FETCH_CARRIERS_SUCCESS,
    FETCH_CARRIERS_FAILED,
} from "./actions";

function carrier(state = {
    carriers: [],
}, action) {
    switch (action.type) {
        case FETCH_CARRIERS_SUCCESS:
            return Object.assign({}, state, {carriers: action.data});
        case FETCH_CARRIERS_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default carrier
