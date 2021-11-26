import {
SIGNUP_SUCCESS,
SIGNUP_FAILED,

LOGIN_SUCCESS,
LOGIN_FAILED,

VERIFY_USER_SUCCESS,
VERIFY_USER_FAILED

} from "./actions";

function users(state = {
    users: [],
    res: null,
    error: null
}, action) {
    switch (action.type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
        case VERIFY_USER_SUCCESS:
            return Object.assign({}, state, {res: action.res});
        case SIGNUP_FAILED:
        case LOGIN_FAILED:
        case VERIFY_USER_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default users
