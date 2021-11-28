import Api from "../../Api";
import axios from 'axios';

export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS'
export const FETCH_CITIES_FAILED = 'FETCH_CITIES_FAILED'

const api = new Api();

export function fetchCities() {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/cities', method: 'GET'}).then(res => {
                    //console.log('res is', res)
                    dispatch({type: FETCH_CITIES_SUCCESS, data: res});
                    resolve(res);
                })
            } catch (error) {
                    dispatch({type: FETCH_CITIES_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

