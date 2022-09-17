import {useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '../Button';
import { LoadingSpinner } from '../LoadingSpinner';
import { ErrorNotification } from '../ErrorNotification';

import classes from './DeleteCard.module.scss';

export const DeleteCard = (props) => {
  const [confirmed, setConfirmed] = useState(false);
  const deleteStatus = useSelector((state) => state.ui.notificationDelete);
  const {status, title, message} = deleteStatus;
  const {onClose} = props;

  const onConfirmHandler = () => {
    props.onDeleteConfirm()
    setConfirmed(true);
  };
  
  let notification;
  if (confirmed) {
    if (status === 'pending') {
      notification = (
          <LoadingSpinner />
      );
    }
  
    if (status === 'error') {
      notification = (
          <ErrorNotification title={title} message={message} />
      );
    }
  }
  
  useEffect(() => {
    if (confirmed && status === 'success') {
      onClose();
    }
  }, [confirmed, status, onClose]);

  return (
    <div className={classes.card}>
      <div className={classes.content}>
        <div>
          <h2>Брисање локације</h2>
        </div>
        <div className={classes.centered}>
          <p>
            Да ли сте сигурни да желите да избришете локацију "
            {props.locationName}?"
          </p>
          {notification}
        </div>
        <hr></hr>
        <div className={classes.actions}>
          <Button onClick={onConfirmHandler}>Обриши</Button>
          <Button onClick={props.onClose} className={classes.cancel}>
            Одустани
          </Button>
        </div>
      </div>
    </div>
  );
};
