export const fetchTodosStart = { type: 'FETCH_TODOS_START' };
export const fetchTodosSuccess = (item) => ({ type: 'FETCH_TODOS_SUCCESS', payload: item });
export const fetchTodosError = (error) => ({ type: 'FETCH_TODOS_ERROR', payload: error });

export const addTodoAsync = (title) => ({ type: 'ADD_TODO_ASYNC', payload: title });
export const addTodoError = (error) => ({ type: 'ADD_TODO_ERROR', payload: error });
export const addTodo = (title) => ({ type: 'ADD_TODO', payload: title });

export const deleteTodoAsync = (id) => ({ type: 'DELETE_TODO_ASYNC', payload: id });
export const deleteTodoError = (error) => ({ type: 'DELETE_TODO_ERROR', payload: error });
export const deleteTodo = (id) => ({ type: 'DELETE_TODO', payload: id });

export const checkTodoAsync = (id) => ({ type: 'CHECK_TODO_ASYNC', payload: id });
export const checkTodoError = (id) => ({ type: 'CHECK_TODO_ERROR', payload: id });
export const checkTodo = (id) => ({type: 'CHECK_TODO', payload: id});

export const uncheckTodoAsync = (id) => ({ type: 'UNCHECK_TODO_ASYNC', payload: id });
export const uncheckTodoError = (id) => ({ type: 'UNCHECK_TODO_ERROR', payload: id });
export const uncheckTodo = (id) => ({type: 'UNCHECK_TODO', payload: id});