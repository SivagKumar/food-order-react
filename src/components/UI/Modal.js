import classes from './Modal.module.css';
import ReactDOM from "react-dom";

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return <>
        {/* Portals are created so that overlay is not inside divs
      and it is the top level component - to avoid HTML code being scattered all over the place*/}
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
};

export default Modal;
