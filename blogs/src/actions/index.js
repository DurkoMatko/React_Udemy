import jsonPlaceholder from '../apis/jsonPlaceholder'
import _ from 'lodash';


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log("About to Fetch posts");
    await dispatch(fetchPosts());
    console.log("Fetched posts");
    console.log(getState().posts);

    const userIds = _.uniq(getState().posts, ' userId')
    userIds.forEach(id => dispatch(fetchUser(id)))
}

export const fetchPosts = () => async dispatch => {
    // BAD APPROACH
    //const response = await jsonPlaceholder.get('/posts');

    //using redux-thunk to return function as an action (redux-think resolves the function and re-dispatches is as an action)
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUser = userId => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
}; 


/* Memoized way of preventing repetitive request to ge tuser data */
// export const fetchUser = (userId) => dispatch => {
//     return _fetchUser(userId, dispatch);        //memoized function
// }; 
// const _fetchUser = _.memoize(async (userId, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${userId}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// });