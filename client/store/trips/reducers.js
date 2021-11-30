import {
    FETCH_TRIPS_SUCCESS,
    FETCH_TRIPS_FAILED,
    CREATE_TRIP_SUCCESS,
    CREATE_TRIP_FAILED,
    EDIT_TRIPS_SUCCESS,
    EDIT_TRIPS_FAILED,
} from "./actions";

function trips(state = {
    trips: [],
}, action) {
    switch (action.type) {
        case FETCH_TRIPS_SUCCESS:
            return Object.assign({}, state, {trips: action.data});
        case FETCH_TRIPS_FAILED:
            return Object.assign({}, state, {error: action.error});
        case CREATE_TRIP_SUCCESS:
            return Object.assign({}, state, {trips: action.data});
        case CREATE_TRIP_FAILED:
        case EDIT_TRIPS_FAILED:
        
            return Object.assign({}, state, {error: action.error});
        case EDIT_TRIPS_SUCCESS:
            return Object.assign({}, state, {res: action.res});
        default:
            return Object.assign({}, state);
    }
}

export default trips
