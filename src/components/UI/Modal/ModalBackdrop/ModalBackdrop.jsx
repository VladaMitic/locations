import classes from './ModalBackdrop.module.scss';

export const ModalBackdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
