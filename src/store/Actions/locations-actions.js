import { locationsActions } from '../Reducers/locations-slice';
import { uiActions } from '../Reducers/ui-slice';
import { fetchAllData, fetchOneItem, deleteOneItem } from '../../services/api';

export const fetchAllLocationsData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotificationLocations({
        status: 'pending',
        title: 'Захтев се шаље...',
        message: 'Слање захтева за подацима о локацијама!',
      })
    );

    try {
      const locations = await fetchAllData('locations');
      dispatch(locationsActions.addLocationsToStore(locations));
      dispatch(
        uiActions.showNotificationLocations({
          status: 'success',
          title: 'Локације су преузете',
          message: 'Успешно су преузете локације',
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotificationLocations({
          status: 'error',
          title: 'Грешка!',
          message: err.message || 'Неуспешно преузимање података о локацијама',
        })
      );
    }
  };
};

export const fetchOneLocationsData = (locationId) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotificationLocation({
        status: 'pending',
        title: 'Захтев се шаље...',
        message: 'Слање захтева за подацима о локацији!',
      })
    );

    try {
      const location = await fetchOneItem('locations', locationId);

      dispatch(locationsActions.addSelectedLocation(location));
      dispatch(
        uiActions.showNotificationLocation({
          status: 'success',
          title: 'Локација је преузета',
          message: 'Успешно је преузета локација',
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotificationLocation({
          status: 'error',
          title: 'Грешка!',
          message: err.message || 'Неуспешно преузимање података о локацији',
        })
      );
    }
  };
};

export const deleteOneLocationData = (locationId) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotificationDelete({
        status: 'pending',
        title: 'Захтев се шаље...',
        message: 'Слање захтева за брисање подацима локације!',
      })
    );

    try {
      await deleteOneItem('locations', locationId);

      dispatch(locationsActions.removeLocationFromLocations(locationId));
      dispatch(
        uiActions.showNotificationDelete({
          status: 'success',
          title: 'Локација је обрисана',
          message: 'Успешно је обрисана локација',
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotificationDelete({
          status: 'error',
          title: 'Грешка!',
          message: err.message || 'Неуспешно брисање података локације',
        })
      );
    }
  };
};
