import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import clasess from './Modal.module.css';

const Backdrop = props => {
    return <div className={clasess.backdrop} onClick={props.onClickCloseBkDrpCustomEvt} />
};

const ModalOverlay = props => {
    return <div className={clasess.modal} >
        <div className={clasess.content}>
            {props.children}
        </div>
    </div >
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop  onClickCloseBkDrpCustomEvt={props.onClickCloseCustomEvt}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}


    </Fragment>
};

export default Modal;