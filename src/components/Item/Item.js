import './Item.css';
import { Checkbox,
         ButtonLink,
         BasicTrashIcon } from '@wildberries/ui-kit';

function Item(props) {
    return (
        <li className="list__item" id={props?.id}>
            <p className={`list__item-text ${props.checked ? 'checked' : ''}`}>{props?.name}</p>
            <div className="list__item-buttons">
                <Checkbox checked={props?.checked} onClick={() => {props?.checked ? props.onUncheckItem(props?.id) : props.onCheckItem(props?.id)}}/>
                <ButtonLink rightIcon={BasicTrashIcon} size="small" onClick={() => props.onDeleteItem(props?.id)}/>
            </div>
        </li>
    )
}

export default Item;