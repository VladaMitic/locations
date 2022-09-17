import classes from './ErrorNotification.module.scss';

export const ErrorNotification = (props) => {
  return (
    <div className={classes.error}>
      <div>
        <p className={classes.bold}>{props.title}</p>
      </div>
      <p>{props.message}</p>
    </div>
  );
};
