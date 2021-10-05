import { memo } from 'react';
import {BasicTrashIcon, ButtonLink, Checkbox} from "@wildberries/ui-kit";
import './todo-item.css';

export const TodoItem = memo(({textClassName, id, name, checked, onCheckBoxClick, onDeleteTodo}) => {
    return (
        <li className="todo" id={id}>
            <p className={textClassName}>{name}</p>
            <div className="todo__buttons">
                <Checkbox checked={checked} id={`${id}-checkbox`} name="todo" onClick={onCheckBoxClick}/>
                <ButtonLink rightIcon={BasicTrashIcon} size="small" onClick={onDeleteTodo}/>
            </div>
        </li>
    )
});