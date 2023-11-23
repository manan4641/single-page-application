import React from "react";

import ReactDOM from "react-dom";
import './Backdrop.css';
import closeBtn from "../../icon-close3.png";

/* in this component we are adding 'background div' with 'close icon' for closing mob menu and modal on click */

const Backdrop = props => {

    /* "{props.onClick}" is a reference to a function that is passed down as a prop from the parent component to the child component. 
        In our case in MainNavigation component. This function is called when the user clicks, "onClick" event is triggered on the child component.
        And the function that was passed down as a prop from the parent component is called.
    */
    const content = <div className="backdrop" onClick={props.onClick} >  
        <img className="close-btn" src={closeBtn} alt="close-button" />
    </div>;

    return ReactDOM.createPortal(content, document.getElementById('backdrop-hook'));

}

export default Backdrop;