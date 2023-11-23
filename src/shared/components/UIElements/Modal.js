import React from "react";

import { CSSTransition } from "react-transition-group";
import  ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import './Modal.css';

const ModalOverlay = props => {

    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
             {/* In below form if we get any submit function as prop then 1st condition will apply, else we use event.preventDefault */}
            <form  onSubmit={props.onSubmit ? props.onSubmit : event=>event.preventDefault()} >
                <div className={`modal__content ${props.contentClass}`}>
                    {/* here we get actual content of modal, what ever we write between opening & closing modal */}
                    {props.children}
                </div>

                {/* the reason we use footer in form is that, in footer the user(devleoper) should be able to inject footer content, for example
                button that allow the user to confirm to confrim a choice or something.  */}
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
    );

    return ReactDOM.createPortal(content , document.getElementById('modal-hook'));
}
// we use separate component down here because a modal is more than just the overlay, modal also needs a backdrop and animaiton.
const Modal = props => {
   return <React.Fragment>
        {/* checking if we have show prop which is true, in this case we will render backdrop and getting click prop onCancel */}
        {props.show && <Backdrop onClick={props.onCancel} />}

         {/* `in`: A boolean that determines whether the transition is currently in progress, in this case, `in` is being set to props.show, which means the transition will be triggered based on the value of the show prop passed to the component. */}
        <CSSTransition 
            in={props.show}
            mountOnEnter 
            unmountOnExit 
            timeout={200} 
            classNames="modal"
        >
        <ModalOverlay  {...props} /> 
        { /* this '...' is spread operator, '...props' forward all props we get from outside to Modal overlay. In other words, it allows us to set for example footer, footer class, content class, header class & so on, on the exported modal component where we of course don't need it but we then forward it to modal overlay. */ }    

        </CSSTransition>

   </React.Fragment>

}
export default Modal;