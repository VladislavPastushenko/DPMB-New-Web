import { combineReducers } from 'redux'
import posts from "./posts/reducers";
import users from "./users/reducers";
import cities from "./cities/reducers";
import stops from "./stops/reducers";
import carrier from "./carriers/reducers";
import trips from "./trips/reducers";

export default combineReducers({
    posts,
    users,
    cities,
    stops,
    carrier,
    trips,
})
