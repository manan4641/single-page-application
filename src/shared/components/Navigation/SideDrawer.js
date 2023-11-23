import React from "react";

import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import './SideDrawer.css';

/* This component is for adding mobile menu */

const SideDrawer = props => {

    const content =  ( // we use CSS Transition in react as component. and below these are transition properties
        <CSSTransition 
            in={props.show} // passing this 'show' prop to Child Component (MainNavigation)
            timeout={200} 
            classNames="slide-in-left" 
            mountOnEnter  // mountOnEnter means show this jsx code(html) in DOM when sideDrawer is visible
            unmountOnExit  // this means remove this below <aside> html from DOM when sideDrwaer is invisible
        >
            <aside className="side-drawer" onClick={props.click}> {props.children} </aside>
        </CSSTransition>
    );
    
    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));

}

export default SideDrawer;