import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { PageTitle } from '../../components/UI/PageTitle';
import {LocationDetailsList} from '../../components/Locations/LocationDetailsList';
import { fetchOneLocationsData } from '../../store/Actions';

import classes from './LocationDetail.module.scss';

export const LocationDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { locationId } = params;

  useEffect(() => {
    dispatch(fetchOneLocationsData(locationId));
  }, [locationId, dispatch]);

  return (
    <Fragment>
      <PageTitle>Детаљи локације</PageTitle>
      <section className={classes.centered}>
        <LocationDetailsList />
      </section>
    </Fragment>
  );
};
