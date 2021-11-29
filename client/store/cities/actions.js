import Api from "../../Api";
import axios from 'axios';

export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS'
export const FETCH_CITIES_FAILED = 'FETCH_CITIES_FAILED'
export const CREATE_CITY_SUCCESS = 'CREATE_CITY_SUCCESS'
export const CREATE_CITY_FAILED = 'CREATE_CITY_FAILED'

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

export function createCity(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/cities', method: 'POST', data}).then(res => {
                    if (res === "OK") {
                        dispatch({type: CREATE_CITY_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        dispatch({type: CREATE_CITY_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: CREATE_CITY_FAILED, error: error});
                    reject(error);
                }
            })
    };
}