import React from 'react';
import Item from '../Item/Item';
import './List.css';

function List(props) {
    return (
        <section className="list">
            <ul className="list__items">
                {props.todos.map((todo) => {
                    return <Item name={todo.name} id={todo.id} checked={todo.checked} key={todo.id}
                                 onDeleteItem={props.onDeleteItem} onCheckItem={props.onCheckItem}
                                 onUncheckItem={props.onUncheckItem}   />
                })}
            </ul>
        </section>
    )
}

export default List;