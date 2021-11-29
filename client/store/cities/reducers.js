import {
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAILED,
    CREATE_CITY_SUCCESS,
    CREATE_CITY_FAILED,
} from "./actions";

function cities(state = {
    cities: [],
}, action) {
    switch (action.type) {
        case FETCH_CITIES_SUCCESS:
            return Object.assign({}, state, {cities: action.data});
        case FETCH_CITIES_FAILED:
            return Object.assign({}, state, {error: action.error});
        case CREATE_CITY_SUCCESS:
            return Object.assign({}, state, {stops: action.data});
        case CREATE_CITY_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default cities
