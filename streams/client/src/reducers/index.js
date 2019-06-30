import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';    //renaming reducer class to FormReducer on the fly
import authReducer from './authReducer';
import streamsReducer from './streamsReducer';

export default combineReducers({
    reducedAuth: authReducer,
    form: FormReducer,
    streams: streamsReducer
});