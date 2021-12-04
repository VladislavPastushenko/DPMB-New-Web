import Api from "../../Api";

export const CREATE_QUESTIONS_FROM_USER_SUCCESS = 'CREATE_QUESTIONS_FROM_USER_SUCCESS'
export const CREATE_QUESTIONS_FROM_USER_FAILED = 'CREATE_QUESTIONS_FROM_USER_FAILED'

const api = new Api();

export function createQuestionFromUser(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/questions-from-users', method: 'POST', data: data}).then(res => {
                    if (res === "OK") {
                        dispatch({type: CREATE_QUESTIONS_FROM_USER_SUCCESS, data: res});
                        resolve(res);
                    }
                    else {
                        dispatch({type: CREATE_QUESTIONS_FROM_USER_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: CREATE_QUESTIONS_FROM_USER_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

