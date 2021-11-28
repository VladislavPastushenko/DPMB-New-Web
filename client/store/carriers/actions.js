import Api from "../../Api";
import axios from 'axios';

export const FETCH_CARRIERS_SUCCESS = 'FETCH_CARRIERS_SUCCESS'
export const FETCH_CARRIERS_FAILED = 'FETCH_CARRIERS_FAILED'

const api = new Api();

export function fetchCarriers() {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/carriers', method: 'GET'}).then(res => {
                    //console.log('res is', res)
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

