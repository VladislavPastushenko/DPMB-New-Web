import { combineReducers } from 'redux'
import posts from "./posts/reducers";
import users from "./users/reducers";


export default combineReducers({
    posts,
    users
})
