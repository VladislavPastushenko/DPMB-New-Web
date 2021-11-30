import {
    CREATE_RESERVATIONS_SUCCESS,
    CREATE_RESERVATIONS_FAILED,

    FETCH_RESERVATIONS_SUCCESS,
    FETCH_RESERVATIONS_FAILED,

    EDIT_RESERVATIONS_SUCCESS,
    EDIT_RESERVATIONS_FAILED,

    DELETE_RESERVATION_SUCCESS,
    DELETE_RESERVATION_FAILED,
} from "./actions";

function reservations(state = {
    reservations: [],
    res: null,
}, action) {
    switch (action.type) {
        case CREATE_RESERVATIONS_SUCCESS:
        case EDIT_RESERVATIONS_SUCCESS:
            return Object.assign({}, state, {res: action.res});
        case FETCH_RESERVATIONS_SUCCESS:
        case DELETE_RESERVATION_SUCCESS:
        
            return Object.assign({}, state, {reservations: action.data});
        case FETCH_RESERVATIONS_FAILED:
        case CREATE_RESERVATIONS_FAILED:
        case EDIT_RESERVATIONS_FAILED:
        case DELETE_RESERVATION_FAILED:
        
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default reservations
