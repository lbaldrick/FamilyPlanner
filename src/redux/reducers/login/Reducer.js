import { LOGIN_REQUEST_CODE_ATTEMPT_IN_PROGRESS,
  LOGIN_REQUEST_CODE_ATTEMPT_FAILURE,
  LOGIN_REQUEST_CODE_ATTEMPT_SUCCESS } from '../actions/login/actions';

const INITIAL_STATE = {
  username: null,
  password: null,
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
            return loadNewsArticlesSuccess(action, state);
        case NEWS_ACTION_ENUM.LOAD_NEWS_ARTICLES_FAILURE:
            return loadNewsArticlesFailure(action, state);
        case NEWS_ACTION_ENUM.LOAD_NEWS_SOURCES_SUCCESS:
            return loadNewsSourcesSuccess(action, state);
        case NEWS_ACTION_ENUM.LOAD_NEWS_SOURCES_FAILURE:
            return loadNewsSourcesFailure(action, state);
        case NEWS_ACTION_ENUM.FILTER_NEWS_ARTICLES_SUCCESS:
            return filterNewsArticlesSuccess(action, state);
        case NEWS_ACTION_ENUM.FILTER_NEWS_ARTICLES_FAILURE:
            return filterNewsArticlesFailure(action, state);
        case NEWS_ACTION_ENUM.CLEAR_NEWS_SEARCH:
            return clearNewsSearch(state);
        default:
            return state;
    }
};

const loginAttemptInProgress = (state, action) => {
  return Object.assign(state, {loginInProgress: true});
}

export default loginReducer;
