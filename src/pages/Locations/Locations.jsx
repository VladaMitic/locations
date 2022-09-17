import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { LocationsTable } from '../../components/Locations/LocationsTable';
import { PageTitle } from '../../components/UI/PageTitle';
import { fetchAllLocationsData } from '../../store/Actions';

import classes from './Locations.module.scss';

let isInitial = true;

export const Locations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      dispatch(fetchAllLocationsData());
      isInitial = false;
    }
  }, [dispatch]);

  return (
    <Fragment>
      <PageTitle>Локације</PageTitle>
      <section className={classes.center}>
        <LocationsTable />
      </section>
    </Fragment>
  );
};
