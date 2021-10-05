import React, { useState, memo, useCallback } from 'react';
import { FormElement} from '../form-element/form-element';

export const Form = memo(({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (event) => {
        setInputValue(event.value);
    }

    const handleAddItem = useCallback(() => {
        onAddTodo(inputValue || '');
        setInputValue('');
    }, [onAddTodo, inputValue]);

    return (
       <FormElement onChange={handleChange} onHandleAddItem={handleAddItem} inputValue={inputValue}/>
    )
})