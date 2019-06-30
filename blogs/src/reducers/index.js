import { combineReducers } from 'redux';
import postReducer from './postReducer'
import userReducer from './userReducer'

export default combineReducers({
    posts: postReducer,    //to trick redux he has at least one reducer
    users: userReducer
}); 