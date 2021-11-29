import Api from "../../Api";

export const FETCH_STOPS_SUCCESS = 'FETCH_STOPS_SUCCESS'
export const FETCH_STOPS_FAILED = 'FETCH_STOPS_FAILED'

const api = new Api();

export function fetchStops() {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/stops', method: 'GET'}).then(res => {
                    //console.log('res is', res)
                    dispatch({type: FETCH_STOPS_SUCCESS, data: res});
                    resolve(res);
                })
            } catch (error) {
                    dispatch({type: FETCH_STOPS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

