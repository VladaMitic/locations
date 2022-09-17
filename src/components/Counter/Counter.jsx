import { useMemo, Fragment } from 'react';

import { LoadingSpinner } from '../UI/LoadingSpinner';
import { ErrorNotification } from '../UI/ErrorNotification';

import classes from './Counter.module.scss';

export const Counter = (props) => {
  const { status, message, title } = props.statusObject;
  const { text, counter } = props;

  const content = useMemo(() => {
    switch (status) {
      case 'pending':
        return (
          <div className={classes.counter}>
            <LoadingSpinner />
          </div>
        );
      case 'error':
        return <ErrorNotification title={title} message={message} />;
      case 'success':
        return (
          <div className={classes.counter}>
            <div>{counter}</div>
            <hr></hr>
            <p>{text}</p>
          </div>
        );
      default:
        return null;
    }
  }, [status, title, message, counter, text]);

  return (
    <Fragment>
      { content }
    </Fragment>
  );
};
