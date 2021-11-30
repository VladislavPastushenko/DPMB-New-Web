import {
    FETCH_CARRIERS_SUCCESS,
    FETCH_CARRIERS_FAILED,
    CREATE_CARRIER_SUCCESS,
    CREATE_CARRIER_FAILED,
    DELETE_CARRIER_SUCCESS,
    DELETE_CARRIER_FAILED,
} from "./actions";

function carrier(state = {
    carriers: [],
}, action) {
    switch (action.type) {
        case FETCH_CARRIERS_SUCCESS:
            return Object.assign({}, state, {carriers: action.data});
        case FETCH_CARRIERS_FAILED:
            return Object.assign({}, state, {error: action.error});
        case CREATE_CARRIER_SUCCESS:
        case DELETE_CARRIER_SUCCESS:
            return Object.assign({}, state, {carriers: action.data});
        case CREATE_CARRIER_FAILED:
        case DELETE_CARRIER_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default carrier
