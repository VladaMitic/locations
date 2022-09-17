import { citiesActions } from '../Reducers/cities-slice';
import { uiActions } from '../Reducers/ui-slice';
import { fetchAllData } from '../../services/api';

export const fetchAllCitiesData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotificationCities({
        status: 'pending',
        title: 'Захтев се шаље...',
        message: 'Слање захтева за подацима о општинама!',
      })
    );

    try {
      const cities = await fetchAllData('cities');

      dispatch(citiesActions.addCitiesToStore(cities));
      dispatch(
        uiActions.showNotificationCities({
          status: 'success',
          title: 'Општине су преузете',
          message: 'Успешно су преузете општине',
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotificationCities({
          status: 'error',
          title: 'Грешка!',
          message: err.message || 'Неуспешно преузимање података о општинама',
        })
      );
    }
  };
};
