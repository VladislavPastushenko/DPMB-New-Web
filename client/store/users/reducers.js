import {
SIGNUP_SUCCESS,
SIGNUP_FAILED,

LOGIN_SUCCESS,
LOGIN_FAILED,

VERIFY_USER_SUCCESS,
VERIFY_USER_FAILED,

LOOKUP_USER_IN_STORAGE_SUCCESS,
LOOKUP_USER_IN_STORAGE_FAILED,

GET_LOGGED_USER_SUCCESS,
GET_LOGGED_USER_FAILED,

FETCH_USERS_SUCCESS,
FETCH_USERS_FAILED,

} from "./actions";

function users(state = {
    users: [],
    res: null,
    savedLocalStorageHash: null,
    loggedUser: null,
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
        case GET_LOGGED_USER_FAILED:
            return Object.assign({}, state, {error: action.error});

        case LOOKUP_USER_IN_STORAGE_SUCCESS:
            return Object.assign({}, state, {savedLocalStorageHash: action.hash});
        case LOOKUP_USER_IN_STORAGE_FAILED:
            return Object.assign({}, state, {savedLocalStorageHash: null, error: action.error});

        case GET_LOGGED_USER_SUCCESS:
            return Object.assign({}, state, {loggedUser: action.loggedUser});
        case FETCH_USERS_SUCCESS:
            return Object.assign({}, state, {stops: action.data});
        case FETCH_USERS_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default users
