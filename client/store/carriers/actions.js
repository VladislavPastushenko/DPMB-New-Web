import Api from "../../Api";
import axios from 'axios';

export const FETCH_CARRIERS_SUCCESS = 'FETCH_CARRIERS_SUCCESS'
export const FETCH_CARRIERS_FAILED = 'FETCH_CARRIERS_FAILED'
export const CREATE_CARRIER_SUCCESS = 'CREATE_CITY_SUCCESS'
export const CREATE_CARRIER_FAILED = 'CREATE_CITY_FAILED'
export const DELETE_CARRIER_SUCCESS = 'DELETE_CARRIER_SUCCESS'
export const DELETE_CARRIER_FAILED = 'DELETE_CARRIER_FAILED'

const api = new Api();

export function fetchCarriers() {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/carrier', method: 'GET'}).then(res => {
                    dispatch({type: FETCH_CARRIERS_SUCCESS, data: res});
                    resolve(res);
                })
            } catch (error) {
                    dispatch({type: FETCH_CARRIERS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function createCarrier(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/carrier', method: 'POST', data}).then(res => {
                    if (res === "OK") {
                        dispatch({type: CREATE_CARRIER_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        dispatch({type: CREATE_CARRIER_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: CREATE_CARRIER_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function deleteCarrier(id) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/carrier/' + id, method: 'DELETE'}).then(res => {
                    if (res === "OK") {
                        dispatch({type: DELETE_CARRIER_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        dispatch({type: DELETE_CARRIER_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: DELETE_CARRIER_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

