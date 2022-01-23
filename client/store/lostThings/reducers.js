// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import {

FETCH_LOST_THINGS_SUCCESS,
FETCH_LOST_THINGS_FAILED,

DELETE_LOST_THINGS_SUCCESS,
DELETE_LOST_THINGS_FAILED,

CREATE_LOST_THINGS_SUCCESS,
CREATE_LOST_THINGS_FAILED,

EDIT_LOST_THING_SUCCESS,
EDIT_LOST_THING_FAILED,

} from "./actions";

function lostThings(state = {
    lostThings: [],
    res: null,
}, action) {
    switch (action.type) {
        case EDIT_LOST_THING_SUCCESS:
            return Object.assign({}, state, {res: action.res});
        case FETCH_LOST_THINGS_SUCCESS:
        case DELETE_LOST_THINGS_SUCCESS:
            return Object.assign({}, state, {lostThings: action.data});
        case CREATE_LOST_THINGS_SUCCESS:
            return Object.assign({}, state, {lostThings: action.res});
        case FETCH_LOST_THINGS_FAILED:
        case DELETE_LOST_THINGS_FAILED:
        case CREATE_LOST_THINGS_FAILED:
        case EDIT_LOST_THING_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default lostThings
