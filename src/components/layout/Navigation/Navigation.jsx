import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Сјајне локације</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={classes.active}>
              Главна
            </NavLink>
          </li>
          <li>
            <NavLink to="/locations" activeClassName={classes.active} >
              Локације
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
