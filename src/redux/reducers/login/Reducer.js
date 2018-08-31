import { LOGIN_REQUEST_CODE_ATTEMPT_IN_PROGRESS,
    LOGIN_REQUEST_CODE_ATTEMPT_FAILURE,
    LOGIN_REQUEST_CODE_ATTEMPT_SUCCESS,
    LOGIN_UPDATE_CODE,
    LOGIN_UPDATE_USERNAME} from '../../actions/login/Actions';

const INITIAL_STATE = {
  username: '',
  code: '',
  requestCodeSuccess: false,
  requestCodeFailure: false,
  requestCodeInProgress: false,
  loginSuccess: false,
  loginFailure: false,
  loginInProgress: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_REQUEST_CODE_ATTEMPT_IN_PROGRESS:
            return requestCodeInProgress(action, state);
        case LOGIN_REQUEST_CODE_ATTEMPT_FAILURE:
            return requestCodeFailure(action, state);
        case LOGIN_REQUEST_CODE_ATTEMPT_SUCCESS:
            return requestCodeSuccess(action, state);
        case LOGIN_UPDATE_CODE:
            return updateCode(action, state);
        case LOGIN_UPDATE_USERNAME:
            return updateUsername(action, state);
        default:
            return state;
    }
};

const requestCodeInProgress = (action, state) => {
  return Object.assign(state, {
      requestCodeInProgress: true,
  });
};

const requestCodeSuccess = (action, state) => {
    return Object.assign(state, {
        requestCodeInProgress: false,
        requestCodeSuccess: true,

    });
};

const requestCodeFailure = (action, state) => {
    return Object.assign(state, {
        requestCodeInProgress: false,
        requestCodeFailure: true,
    });
};

const updateUsername = (action, state) => {
    return Object.assign(state, {
        username: action.payload.value,
    });
};

const updateCode = (action, state) => {
    return Object.assign(state, {
        code: action.payload.value,
    });
};

export default loginReducer;
