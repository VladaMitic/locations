import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { LoadingSpinner } from '../../UI/LoadingSpinner';
import { ErrorNotification } from '../../UI/ErrorNotification';
import {LocationsTableBody} from '../LocationsTableBody';

import classes from './LocationTable.module.scss';

export const LocationsTable = (props) => {
  const locationStatus = useSelector((state) => state.ui.notificationLocations);
  const { status, title, message } = locationStatus;

  let tableBody;
  let notification;

  if (status === 'pending') {
    notification = (
      <div className={classes.notification}>
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'success') {
    tableBody = (
      <LocationsTableBody
        invisibleBigMobile={classes.invisibleBigMobile}
        invisibleTablet={classes.invisibleTablet}
      />
    );
  }

  if (status === 'error') {
    notification = (
      <div className={classes.notification}>
        <ErrorNotification title={title} message={message} />
      </div>
    );
  }
  return (
    <Fragment>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Име</th>
            <th>Правни назив</th>
            <th>Град/ Општина/ Локација</th>
            <th>Адреса</th>
            <th className={classes.invisibleBigMobile}>Креирао</th>
            <th className={classes.invisibleBigMobile}>Изменио</th>
            <th className={classes.invisibleTablet}>Опис</th>
            <th>Измени</th>
            <th>Обриши</th>
          </tr>
        </thead>
        {tableBody}
      </table>
      {notification}
    </Fragment>
  );
};
