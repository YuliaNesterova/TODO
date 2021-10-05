const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TODOS_SUCCESS':
            return [...action.payload];
        case 'FETCH_TODOS_ERROR':
            console.log('Error: ', action.payload);
            return state;
        default:
            return state;
    }
}
export default todosReducer;