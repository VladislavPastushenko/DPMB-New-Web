import Api from "../../Api";
import axios from 'axios';

export const CREATE_ROUTE_ITEMS_SUCCESS = 'CREATE_ROUTE_ITEMS_SUCCESS'
export const CREATE_ROUTE_ITEMS_FAILED = 'CREATE_ROUTE_ITEMS_FAILED'

const api = new Api();


export function createRouteItems(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/route-items', method: 'POST', data}).then(res => {
                    if (res === "OK") {
                        dispatch({type: CREATE_ROUTE_ITEMS_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        dispatch({type: CREATE_ROUTE_ITEMS_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: CREATE_ROUTE_ITEMS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

