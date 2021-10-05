import React, {memo} from 'react';
import './form-element.css';
import {BasicPlusIcon, ButtonLink, SimpleInput} from "@wildberries/ui-kit";

export const FormElement = memo(({onChange, inputValue, onHandleAddItem}) => {
    return (
        <div className="form">
            <SimpleInput type="text" name="todo-input" placeholder="Add todo" onChange={onChange} value={inputValue} id="todo-input"/>
            <ButtonLink type="submit" rightIcon={BasicPlusIcon} onClick={onHandleAddItem}/>
        </div>
    )
});