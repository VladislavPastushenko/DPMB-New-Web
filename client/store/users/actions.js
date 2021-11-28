import Api from "../../Api";
import axios from 'axios';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILED  = 'SIGNUP_FAILED'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED  = 'LOGIN_FAILED'

export const VERIFY_USER_SUCCESS = 'VERIFY_USER_SUCCESS'
export const VERIFY_USER_FAILED = 'VERIFY_USER_FAILED'

export const LOOKUP_USER_IN_STORAGE_SUCCESS = 'LOOKUP_USER_IN_STORAGE_SUCCESS';
export const LOOKUP_USER_IN_STORAGE_FAILED = 'LOOKUP_USER_IN_STORAGE_FAILED';

export const GET_LOGGED_USER_SUCCESS = 'GET_LOGGED_USER_SUCCESS';
export const GET_LOGGED_USER_FAILED = 'GET_LOGGED_USER_FAILED';

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

export function loginUser(data) {
    return async function (dispatch) {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/users/login', method: 'POST', data}).then(res =>  {
                    if (res !== "Invalid credentials or inactive user" && res !== 'Error occured while logging in') {
                        console.log('res is', res)
                        localStorage.setItem('authToken', res);
                        console.log('Item is set', localStorage.getItem('authToken'))
                        dispatch({type: LOGIN_SUCCESS, loginResponse: res});
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
        });
    }
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


export function lookupUserInStorage() {
    return async function (dispatch) {
        return new Promise((resolve, reject) => {
            const hash = localStorage.getItem('authToken');

            if (hash !== null) {
                api.call({url: '/users/set-session/' + hash, method: 'POST'})
                .then(res => {
                    if (res === 'OK') {
                        dispatch({type: LOOKUP_USER_IN_STORAGE_SUCCESS, hash: hash});
                        resolve(hash);
                    } else {
                        dispatch({type: LOOKUP_USER_IN_STORAGE_FAILED, error: res});
                        reject(res);
                    }
                })
            } else {
                dispatch({type: LOOKUP_USER_IN_STORAGE_FAILED, error: 'User token is not saved in cookie'});
                reject(null);
            }
        });
    }
}



export function fetchLoggedUser(authToken) {
    return async  function (dispatch) {
        return new Promise((resolve, reject) => {
            return api.call({url: '/users/get-logged/'+authToken , method: 'GET'})
                .then(data => {
                    dispatch({type: GET_LOGGED_USER_SUCCESS, loggedUser: data});
                    resolve(data)
                }).catch(error => {
                    dispatch({type: GET_LOGGED_USER_FAILED, error: error});
                    reject(error)
                } );
        })
    }
}