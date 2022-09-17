import { LoadingSpinner } from '../UI/LoadingSpinner';
import { ErrorNotification } from '../UI/ErrorNotification';

import classes from './Counter.module.scss';

export const Counter = (props) => {
  const { status, message, title } = props.statusObject;

  if (status === 'success') {
    return (
      <div className={classes.counter}>
        <div>{props.counter}</div>
        <hr></hr>
        <p>{props.text}</p>
      </div>
    );
  }

  if (status === 'pending') {
    return (
      <div className={classes.counter}>
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'error') {
    return <ErrorNotification title={title} message={message} />;
  }

  /*  return (
    <>
      {status === 'success' && (
        <div className={classes.counter}>
          <div>{props.counter}</div>
          <hr></hr>
          <p>{props.text}</p>
        </div>
      )}
      
    </>
  );*/
};
