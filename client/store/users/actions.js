import Api from "../../Api";
import axios from 'axios';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILED  = 'SIGNUP_FAILED'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED  = 'LOGIN_FAILED'

export const VERIFY_USER_SUCCESS = 'VERIFY_USER_SUCCESS'
export const VERIFY_USER_FAILED = 'VERIFY_USER_FAILED'

const api = new Api();


export function signup(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/users/sign-up', method: 'POST', data}).then(res => {
                    if (res === "OK") {
                        dispatch({type: SIGNUP_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        dispatch({type: SIGNUP_FAILED, error: res});
                        reject(res);    
                    }
                })
            } catch (error) {
                    dispatch({type: SIGNUP_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function login(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/users/login', method: 'POST', data}).then(res => {
                    if (res === "OK") {
                        dispatch({type: LOGIN_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        dispatch({type: LOGIN_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: LOGIN_FAILED, error: error});
                    reject(error);
                }
            })
    };
}



export function verifyUser(authToken) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
            api.call({url: '/users/verify/'+authToken, method: 'GET'}).then(res =>  {
                if (res === 'OK') {
                    dispatch({type: VERIFY_USER_SUCCESS, res: res});
                    resolve(res);
                } else {
                    dispatch({type: VERIFY_USER_SUCCESS, res: res});
                    resolve(res);
                }
            })} catch(error) {
                dispatch({type: VERIFY_USER_FAILED});
                reject(error);
            }
        });
    }
}
