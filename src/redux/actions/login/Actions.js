import AuthenticationService from '../../../services/AuthenticationService';

export const LOGIN_ATTEMPT_IN_PROGRESS = 'LOGIN_ATTEMPT_IN_PROGRESS';
export const LOGIN_ATTEMPT_SUCCESS = 'LOGIN_ATTEMPT_SUCCESS';
export const LOGIN_ATTEMPT_FAILURE= 'LOGIN_ATTEMPT_FAILURE';

export const LOGIN_REQUEST_CODE_ATTEMPT_IN_PROGRESS = 'LOGIN_REQUEST_CODE_ATTEMPT_IN_PROGRESS';
export const LOGIN_REQUEST_CODE_ATTEMPT_SUCCESS = 'LOGIN_REQUEST_CODE_ATTEMPT_SUCCESS';
export const LOGIN_REQUEST_CODE_ATTEMPT_FAILURE = 'LOGIN_REQUEST_CODE_ATTEMPT_FAILURE';

export const LOGIN_UPDATE_USERNAME = 'LOGIN_UPDATE_USERNAME';
export const LOGIN_UPDATE_CODE = 'LOGIN_UPDATE_CODE';

export const login = (code, email) => {
  return (dispatch) => {

  }
};

export const attemptRequestCode = (email) => {
  return (dispatch) => {
    dispatch(requestCodeInProgress);
    return AuthenticationService.passwordlessLogin(email)
            .then(() => dispatch(requestCodeSuccessful()))
            .catch(() => dispatch(requestCodeFailure()));
  }
}

const requestCodeSuccessful = () => {
    return {
      type: LOGIN_REQUEST_CODE_ATTEMPT_SUCCESS,
      payload: {}
    }
};

const requestCodeInProgress = () => {
    return {
      type: LOGIN_REQUEST_CODE_ATTEMPT_IN_PROGRESS,
      payload: {}
    }
};


const requestCodeFailure = () => {
    return {
        type: LOGIN_REQUEST_CODE_ATTEMPT_FAILURE,
        payload: {}
    }
};

export const updateUsername = (value) => {
    return {
        type: LOGIN_UPDATE_USERNAME,
        payload: {value}
    }
};

export const updateCode = (value) => {
    return {
        type: LOGIN_UPDATE_CODE,
        payload: {value}
    }
};