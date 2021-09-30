import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../Item/Item';
import './List.css';

function List() {
        const allTodos = useSelector((state) => state.todos)

        return (
        <section className="list">
            <ul className="list__items">
                {allTodos.map((todo) => {
                    return <Item name={todo.name} id={todo.id} checked={todo.checked} key={todo.id}/>
                })}
            </ul>
        </section>
    )
}

export default List;