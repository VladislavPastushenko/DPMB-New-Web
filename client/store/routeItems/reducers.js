import {

    CREATE_ROUTE_ITEMS_SUCCESS,
    CREATE_ROUTE_ITEMS_FAILED,
} from "./actions";

function routeItems(state = {
    routeItems: [],
}, action) {
    switch (action.type) {
        case CREATE_ROUTE_ITEMS_SUCCESS:
            return Object.assign({}, state, {routeItems: action.data});
        case CREATE_ROUTE_ITEMS_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default routeItems
