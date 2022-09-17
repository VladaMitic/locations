import { Fragment } from 'react';

import { Navigation } from '../Navigation';

import classes from './Layout.module.scss';

export const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};
