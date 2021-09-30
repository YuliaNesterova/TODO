const initialState = [];
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TODOS_SUCCESS':
            return [...action.payload];
        case 'FETCH_TODOS_ERROR':
            console.log('Error: ', action.payload);
            return state;
        case 'ADD_TODO':
            return [...action.payload];
        case 'ADD_TODO_ERROR':
            console.log('Error: ', action.payload);
            return state;
        case 'DELETE_TODO':
            return [...action.payload];
        case 'DELETE_TODO_ERROR':
            console.log('Error: ', action.payload);
            return state;
        case 'CHECK_TODO':
            return [...action.payload];
        case 'CHECK_TODO_ERROR':
            console.log('Error: ', action.payload);
            return state;
        case 'UNCHECK_TODO':
            return [...action.payload];
        case 'UNCHECK_TODO_ERROR':
            console.log('Error: ', action.payload);
            return state;
        default:
            return state;
    }
}
export default todosReducer;