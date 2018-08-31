const getState = state => {
    return state.login;
};

export const getUsername = state => {
    return getState(state).username;
};

export const getCode = state => {
    return getState(state).code;
};

export const getRequestCodeSuccess = state => {
    return getState(state).requestCodeSuccess;
};

export const getRequestCodeFailure = state => {
    return getState(state).requestCodeFailure;
};

export const getRequestCodeInProgress = state => {
    return getState(state).requestCodeInProgress;
};

export const getLoginSuccess = state => {
    return getState(state).requestCodeSuccess;
};

export const getLoginFailure = state => {
    return getState(state).requestCodeFailure;
};

export const getLoginInProgress = state => {
    return getState(state).requestCodeInProgress;
};