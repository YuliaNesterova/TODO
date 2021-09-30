import React, { useEffect } from 'react';
import { useDispatch,
         useSelector } from 'react-redux';
import './App.css';
import { fetchTodosStart,
         addTodoAsync,
         deleteTodoAsync,
         checkTodoAsync,
         uncheckTodoAsync } from '../../redux/todos/todos.actions';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
    const dispatch = useDispatch();
    const allTodos = useSelector(state => state.todos);

    function handleAddItem(item) {
        dispatch(addTodoAsync(item));
    }

    function handleDeleteItem(id) {
        dispatch(deleteTodoAsync(id))
    }

    function handleCheckItem(id) {
        dispatch(checkTodoAsync(id));
    }

    function handleUncheckItem(id) {
        dispatch(uncheckTodoAsync(id));
    }

    useEffect(() => {
        dispatch(fetchTodosStart)
    }, [dispatch]);
   
  return (
    <div className="page">
      <Header />
      <Main onAddItem={handleAddItem} onDeleteItem={handleDeleteItem} onCheckItem={handleCheckItem} onUncheckItem={handleUncheckItem}
            todos={allTodos}/>
    </div>
  );
}

export default App;
