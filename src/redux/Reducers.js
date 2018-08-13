import { combineReducers } from 'redux';
import LoginReducer from '../reducers/login/Reducer.js';

export default combineReducers({
    login: LoginReducer,
});
