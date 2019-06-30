import {CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM} from '../actions/types';
import _ from 'lodash';

export default (state={}, action) => {
    switch(action.type){
        case EDIT_STREAM:
            // //create new object because if I only modify redux objects, it doesn't notice I've changed something
            // const newState = { ...state };
            // newState[action.payload.id] = action.payload;
            // return newState;

            return {...state, [action.payload.id]: action.payload}  // ES2015 syntaxt of 3 lines above
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload}
        default:
            return state;
    }

};