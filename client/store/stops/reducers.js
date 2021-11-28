import {
    FETCH_STOPS_SUCCESS,
    FETCH_STOPS_FAILED,
} from "./actions";

function stops(state = {
    stops: [],
}, action) {
    switch (action.type) {
        case FETCH_STOPS_SUCCESS:
            return Object.assign({}, state, {stops: action.data});
        case FETCH_STOPS_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default stops
