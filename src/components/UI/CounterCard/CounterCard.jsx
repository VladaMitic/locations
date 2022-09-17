import classes from './CounterCard.module.scss';

export const CounterCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
