import {

FETCH_NEWS_SUCCESS,
FETCH_NEWS_FAILED,

DELETE_NEWS_SUCCESS,
DELETE_NEWS_FAILED,

CREATE_NEWS_SUCCESS,
CREATE_NEWS_FAILED,
} from "./actions";

function news(state = {
    questionsFromUsers: [],
    res: null,
}, action) {
    switch (action.type) {
        case FETCH_NEWS_SUCCESS:
        case DELETE_NEWS_SUCCESS:
        case CREATE_NEWS_SUCCESS:
            return Object.assign({}, state, {news: action.data});
        case FETCH_NEWS_FAILED:
        case DELETE_NEWS_FAILED:
        case CREATE_NEWS_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default news
