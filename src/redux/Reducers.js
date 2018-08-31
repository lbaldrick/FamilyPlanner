import { combineReducers } from 'redux';
import LoginReducer from './reducers/login/Reducer';

export default combineReducers({
    login: LoginReducer,
});
