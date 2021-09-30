import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import { fetchTodosStart } from '../../redux/todos/todos.actions';
import Header from '../Header/Header';
import Main from '../Main/Main';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodosStart)
    }, [dispatch]);
   
  return (
    <div className="page">
      <Header />
      <Main />
    </div>
  );
}

export default App;
