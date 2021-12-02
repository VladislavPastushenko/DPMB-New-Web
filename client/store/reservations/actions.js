import Api from "../../Api";

export const CREATE_RESERVATIONS_SUCCESS = 'CREATE_RESERVATIONS_SUCCESS'
export const CREATE_RESERVATIONS_FAILED = 'CREATE_RESERVATIONS_FAILED'

export const FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS'
export const FETCH_RESERVATIONS_FAILED = 'FETCH_RESERVATIONS_FAILED'

export const EDIT_RESERVATIONS_SUCCESS = 'EDIT_RESERVATIONS_SUCCESS'
export const EDIT_RESERVATIONS_FAILED = 'EDIT_RESERVATIONS_FAILED'

export const DELETE_RESERVATION_SUCCESS = 'DELETE_RESERVATION_SUCCESS'
export const DELETE_RESERVATION_FAILED = 'DELETE_RESERVATION_FAILED'

const api = new Api();

export function createReservation(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/reservations', method: 'POST', data}).then(res => {
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

export function fetchReservations(query = '') {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/reservations?' + query, method: 'GET'}).then(res => {
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
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: EDIT_RESERVATIONS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function deleteReservation(id) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/reservations/' + id, method: 'DELETE'}).then(res => {
                    if (res === "OK") {
                        dispatch({type: DELETE_RESERVATION_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        dispatch({type: DELETE_RESERVATION_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: DELETE_RESERVATION_FAILED, error: error});
                    reject(error);
                }
            })
    };
}