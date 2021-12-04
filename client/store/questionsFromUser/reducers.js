import {
    CREATE_QUESTIONS_FROM_USER_SUCCESS,
    CREATE_QUESTIONS_FROM_USER_FAILED,
} from "./actions";

function questionsFromUser(state = {
    questionsFromUser: [],
    res: null,
    error: null
}, action) {
    switch (action.type) {
        case CREATE_QUESTIONS_FROM_USER_SUCCESS:
            return Object.assign({}, state, {res: action.data});
        case CREATE_QUESTIONS_FROM_USER_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default questionsFromUser
