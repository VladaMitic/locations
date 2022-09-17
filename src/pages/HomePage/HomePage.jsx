import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CounterCard } from '../../components/UI/CounterCard';
import { Counter } from '../../components/Counter';
import { PageTitle } from '../../components/UI/PageTitle';
import { fetchAllLocationsData, fetchAllCitiesData } from '../../store/Actions';
import useFilterCitiesByNoLocation from '../../hooks/filterArrayByArray-hook';

import classes from './HomePage.module.scss';

let isInitial = true;

export const HomePage = () => {
  const locations = useSelector((state) => state.locations.locations);
  const cities = useSelector((state) => state.cities.cities);
  //custom hook which filter cities array by cities that do not contains any location from location array
  const filteredCities = useFilterCitiesByNoLocation(cities, locations);
  const locationStatus = useSelector((state) => state.ui.notificationLocations);
  const citiesStatus = useSelector((state) => state.ui.notificationCities);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      dispatch(fetchAllLocationsData());
      dispatch(fetchAllCitiesData());
      isInitial = false;
    }
  }, [dispatch]);

  return (
    <Fragment>
      <PageTitle>Главна страна</PageTitle>
      <section className={classes.cards}>
        <CounterCard>
          <Counter
            text="Градова"
            counter={filteredCities.length}
            statusObject={citiesStatus}
          />
        </CounterCard>
        <CounterCard>
          <Counter
            text="Локација"
            counter={locations.length}
            statusObject={locationStatus}
          />
        </CounterCard>
      </section>
    </Fragment>
  );
};
