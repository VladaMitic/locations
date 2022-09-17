import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import {ModalBackdrop} from './ModalBackdrop';
import {ModalOverlay} from './ModalOverlay';

const portalElement = document.getElementById('overlays');

export const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
