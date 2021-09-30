import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../../redux/todos/todos.actions';
import './Form.css';
import { SimpleInput, ButtonLink, BasicPlusIcon } from '@wildberries/ui-kit';

function Form() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState('');
    
    function handleChange(e) {
        setInputValue(e.value);
    }

    function handleAddItem() {
        dispatch(addTodoAsync(inputValue));
        setInputValue('');
    }

    return (
        <div className="form">
            <SimpleInput type="text" name="item-input" placeholder="Добавить задачу" onChange={(e) => handleChange(e)} value={inputValue || ''}/>
            <ButtonLink type="submit" rightIcon={BasicPlusIcon} onClick={handleAddItem}/>
        </div>

    )
}

export default Form;