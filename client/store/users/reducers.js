import {
    
SIGNUP_SUCCESS,
SIGNUP_FAILED,
LOGIN_SUCCESS,
LOGIN_FAILED

} from "./actions";

function users(state = {
    users: [],
    res: null,
    error: null
}, action) {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return Object.assign({}, state, {res: action.res});
        case SIGNUP_FAILED:
            return Object.assign({}, state, {error: action.error});
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {res: action.res});
        case LOGIN_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default users
