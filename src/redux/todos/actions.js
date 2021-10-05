export const fetchTodosStart = { type: 'FETCH_TODOS_START' };
export const fetchTodosSuccess = (item) => ({ type: 'FETCH_TODOS_SUCCESS', payload: item });
export const fetchTodosError = (error) => ({ type: 'FETCH_TODOS_ERROR', payload: error });
export const addTodoAsync = (title) => ({ type: 'ADD_TODO_ASYNC', payload: title });
export const deleteTodoAsync = (id) => ({ type: 'DELETE_TODO_ASYNC', payload: id });
export const checkTodoAsync = (id) => ({ type: 'CHECK_TODO_ASYNC', payload: id });
export const uncheckTodoAsync = (id) => ({ type: 'UNCHECK_TODO_ASYNC', payload: id });
