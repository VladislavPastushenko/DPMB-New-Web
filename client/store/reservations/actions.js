import Api from "../../Api";

export const CREATE_RESERVATIONS_SUCCESS = 'CREATE_RESERVATIONS_SUCCESS'
export const CREATE_RESERVATIONS_FAILED = 'CREATE_RESERVATIONS_FAILED'

export const FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS'
export const FETCH_RESERVATIONS_FAILED = 'FETCH_RESERVATIONS_FAILED'

export const EDIT_RESERVATIONS_SUCCESS = 'EDIT_RESERVATIONS_SUCCESS'
export const EDIT_RESERVATIONS_FAILED = 'EDIT_RESERVATIONS_FAILED'

const api = new Api();

export function createReservation(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/reservations', method: 'POST', data}).then(res => {
                    //console.log('res is', res)
                    dispatch({type: CREATE_RESERVATIONS_SUCCESS, res: res});
                    resolve(res);
                })
            } catch (error) {
                    dispatch({type: CREATE_RESERVATIONS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function fetchReservations() {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/reservations', method: 'GET'}).then(res => {
                    console.log('res is', res)
                    dispatch({type: FETCH_RESERVATIONS_SUCCESS, data: res});
                    resolve(res);
                })
            } catch (error) {
                    dispatch({type: FETCH_RESERVATIONS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}


export function fetchReservationsByRouteId(route_id) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/reservations/get-by-route-id/' + route_id, method: 'GET'}).then(res => {
                    console.log('res is', res)
                    dispatch({type: FETCH_RESERVATIONS_SUCCESS, data: res});
                    resolve(res);
                })
            } catch (error) {
                    dispatch({type: FETCH_RESERVATIONS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}


export function fetchReservationsByUserId(user_id) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/reservations/get-by-user-id/' + user_id, method: 'GET'}).then(res => {
                    console.log('res is', res)
                    dispatch({type: FETCH_RESERVATIONS_SUCCESS, data: res});
                    resolve(res);
                })
            } catch (error) {
                    dispatch({type: FETCH_RESERVATIONS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}


export function editReservationById(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/reservations/' + data.id, method: 'POST', data}).then(res => {
                    if (res === 'OK') {
                        dispatch({type: EDIT_RESERVATIONS_SUCCESS, res: res});
                        resolve(res);
                    }
                    else {
                        dispatch({type: EDIT_RESERVATIONS_FAILED, error: res});
                        reject(error);
                    }
                })
            } catch (error) {
                    dispatch({type: EDIT_RESERVATIONS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}