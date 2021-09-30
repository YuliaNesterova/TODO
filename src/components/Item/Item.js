import './Item.css';
import { useDispatch } from 'react-redux';
import { deleteTodoAsync, checkTodoAsync, uncheckTodoAsync } from '../../redux/todos/todos.actions';
import { Checkbox, ButtonLink, BasicTrashIcon } from '@wildberries/ui-kit';

function Item(props) {
    const dispatch = useDispatch();

    function handleDeleteItem(id) {
        dispatch(deleteTodoAsync(id))
    }

    function handleCheckItem(id) {
        dispatch(checkTodoAsync(id));
    }

    function handleUncheckItem(id) {
        dispatch(uncheckTodoAsync(id));
    }

    return (
        <li className="list__item" id={props?.id}>
            <p className={`list__item-text ${props.checked ? 'checked' : ''}`}>{props?.name}</p>
            <div className="list__item-buttons">
                <Checkbox checked={props?.checked} onClick={() => {props?.checked ? handleUncheckItem(props?.id) : handleCheckItem(props?.id)}}/>
                <ButtonLink rightIcon={BasicTrashIcon} size="small" onClick={() => handleDeleteItem(props?.id)}/>
            </div>
        </li>
    )
}

export default Item;