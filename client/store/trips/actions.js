import Api from "../../Api";
import axios from 'axios';

export const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS'
export const FETCH_TRIPS_FAILED = 'FETCH_TRIPS_FAILED'

const api = new Api();

export function fetchTrips(query = '') {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/trips?' + query, method: 'GET'}).then(res => {
                    //console.log('res is', res)
                    dispatch({type: FETCH_TRIPS_SUCCESS, data: res});
                    resolve(res);
                })
            } catch (error) {
                    dispatch({type: FETCH_TRIPS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}


export function fetchTripsByFromAndToIds(from_id, to_id, query='') {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/trips/' + from_id + '/' +to_id + '?' + query, method: 'GET'}).then(res => {
                    if (res !== 'Routes Not Found') {
                        dispatch({type: FETCH_TRIPS_SUCCESS, data: res});
                        resolve(res);
                    } else {
                        dispatch({type: FETCH_TRIPS_FAILED, error: res});
                        reject(error);
                    }
                })
            } catch (error) {
                    dispatch({type: FETCH_TRIPS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}