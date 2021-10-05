import { memo, useCallback } from 'react';
import './todo.css'
import { TodoItem } from "../todo-item/todo-item";

export const Todo = memo(({ checked, id, name, onMarkTodo, onUnmarkTodo, onDeleteTodo }) => {
    const textClassName = `todo__text ${checked ? 'checked' : ''}`;

    const checkboxClickFunction = useCallback(() => checked ? onUnmarkTodo(id) : onMarkTodo(id), [onMarkTodo, onUnmarkTodo, id, checked])
    const handleDeleteTodo = useCallback(() => onDeleteTodo(id), [onDeleteTodo, id])

    return (
       <TodoItem textClassName={textClassName} name={name} id={id} checked={checked} onCheckBoxClick={checkboxClickFunction} onDeleteTodo={handleDeleteTodo}/>
    )
});