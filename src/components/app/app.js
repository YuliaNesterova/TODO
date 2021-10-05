import React, { useEffect, memo } from 'react';
import { useDispatch,
         useSelector } from 'react-redux';
import './app.css';
import { fetchTodosStart,
         addTodoAsync,
         deleteTodoAsync,
         checkTodoAsync,
         uncheckTodoAsync } from '../../redux/todos/actions';
import { Header } from '../header/header';
import { Main } from '../main/main';

export const App = memo(() => {
    const dispatch = useDispatch();
    const allTodos = useSelector(state => state.todos);

    function handleAddTodo(todo) {
        dispatch(addTodoAsync(todo));
    }

    function handleDeleteTodo(id) {
        dispatch(deleteTodoAsync(id))
    }

    function handleMarkTodo(id) {
        dispatch(checkTodoAsync(id));
    }

    function handleUnmarkTodo(id) {
        dispatch(uncheckTodoAsync(id));
    }

    useEffect(() => {
        dispatch(fetchTodosStart)
    }, [dispatch]);
   
  return (
    <div className="page">
      <Header />
      <Main onAddTodo={handleAddTodo} onDeleteTodo={handleDeleteTodo} onMarkTodo={handleMarkTodo} onUnmarkTodo={handleUnmarkTodo}
            todos={allTodos} />
    </div>
  );
})
