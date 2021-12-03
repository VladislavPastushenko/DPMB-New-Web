import { combineReducers } from 'redux'
import posts from "./posts/reducers";
import users from "./users/reducers";
import cities from "./cities/reducers";
import stops from "./stops/reducers";
import carrier from "./carriers/reducers";
import trips from "./trips/reducers";
import routeItems from "./routeItems/reducers";
import reservations from "./reservations/reducers";
import questionsFromUsers from "./questionsFromUsers/reducers";
import news from "./news/reducers";
import FAQs from "./FAQs/reducers";
import lostThings from "./lostThings/reducers";

export default combineReducers({
    posts,
    users,
    cities,
    stops,
    carrier,
    trips,
    routeItems,
    reservations,
    questionsFromUsers,
    news,
    FAQs,
    lostThings,
})
