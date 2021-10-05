import React, { memo } from 'react';
import { Todo } from '../todo/todo';
import './todo-list.css';

export const TodoList = memo(({ onMarkTodo, onDeleteTodo, onUnmarkTodo, todos }) => {
    return (
        <section className="todo-list">
            <ul className="todo-list__todos">
                {todos.map((todo) => {
                    return <Todo name={todo.name} id={todo.id} checked={todo.checked} key={todo.id}
                                 onDeleteTodo={onDeleteTodo} onMarkTodo={onMarkTodo}
                                 onUnmarkTodo={onUnmarkTodo} />
                })}
            </ul>
        </section>
    )
});