import classes from './PageTitle.module.scss';

export const PageTitle = (props) => {
  return (
    <div className={classes.title}>
      <h1>{props.children}</h1>
    </div>
  );
};
