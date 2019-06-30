
// first time the reducer is called, state is undefined and therefore we return an empty array as default
export default (state = [], action) => {
    switch (action.type ) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}