import React, {useReducer} from "react";

import './Input.css';

/* 'inputReducer' is just a function which receives an action which we can dispatch and it receives the current state and then 
we updates the current state based on the action we received, and return the new state. This func has two arguments, one is current state and 2nd this action */
const inputReducer = (state, action) => {
    switch (action.type){
        case 'CHANGE':      // 'CHANGE' is identifier, and we can named this anything of our choice
            return {
                ...state,    // This copies the old state object and copies all key-value pairs of that old object into this new object 
                value: action.val,  // here we dispatch the value with this action
                isValid: true
            };
        default:
            return state;
    }

};

const Input = props => {
    /* when we have more complex state or interconnected states we use useReducer hook instead of useState hook. 
    Just like useState hook, it returns an array with exactly two elements, the two elements we always get from use reducer */
    const [inputState, dispatch] = useReducer(inputReducer, {value:'', isValid: false});  // useReducer is also able to take a second argument, & it's optional, here it is an initial state of input field
    

    const changeHandler = event => {
        dispatch({type: 'CHANGE', val: event.target.value}); /* in changeHandler we want to call dispatch, 
        & here we pass an action objects in this, we have two actions defined, a 'type' and 'val' property. */
    };

    const element = props.element === 'input' ? ( 
     <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder} 
        onChange={changeHandler}
        value= {inputState.value}
     /> 
    ) : ( 
      <textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} value= {inputState.value}/> 
    );

    return (
        <div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`} >
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && <p>{props.errorText}</p>}  {/* here checking if input state is not valid, then set some error text */}
        </div>
    );

}

export default Input;