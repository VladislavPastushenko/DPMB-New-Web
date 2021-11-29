import {
    FETCH_TRIPS_SUCCESS,
    FETCH_TRIPS_FAILED,
} from "./actions";

function trips(state = {
    trips: [],
}, action) {
    switch (action.type) {
        case FETCH_TRIPS_SUCCESS:
            return Object.assign({}, state, {trips: action.data});
        case FETCH_TRIPS_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default trips
