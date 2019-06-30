import {SIGN_OUT, SIGN_IN, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM} from './types';
import history from '../history';
import streams from '../apis/streams';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

// action is performing async operation, so I have to use dispatch and not just return!
export const createStreamAction = formValues => async ( dispatch, getState ) => {
    const { userId } = getState().reducedAuth;
    const response = await streams.post('/streams', {...formValues, userId: userId });
    dispatch({type: CREATE_STREAM, payload: response.data});
    history.push('/');
}

export const fetchStreamsAction = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({type: FETCH_STREAMS, payload: response.data});
} 

export const fetchStreamAction = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({type: FETCH_STREAM, payload: response.data});
} 

export const editStreamAction = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({type: EDIT_STREAM, payload: response.data});
    history.push('/');
} 

export const deleteStreamAction = id => async dispatch => {
    debugger;
    await streams.delete(`/streams/${id}`);
    dispatch({type: DELETE_STREAM, payload: id});
    history.push('/');
} 