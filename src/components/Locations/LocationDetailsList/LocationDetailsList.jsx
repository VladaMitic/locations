import {useState, useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import useTranslateTransformLocation from '../../../hooks/locationTranslateTransform-hook';

import { Button } from '../../UI/Button';
import { LocationDetailItem } from '../LocationDetailItem';
import { LoadingSpinner } from '../../UI/LoadingSpinner';
import { ErrorNotification } from '../../UI/ErrorNotification';
import { locationsActions } from '../../../store/Reducers/locations-slice'

import classes from './LocationDetailsList.module.scss';

export const LocationDetailsList = () => {
  const location = useSelector(state => state.locations.selectedLocation);
  const locationStatus = useSelector((state) => state.ui.notificationLocation);
  const history = useHistory();
  const dispatch = useDispatch();
  //custom hook that transform original object into array of objects for each original object property. New object also contain property with translated key into Serbian language, to use it in label. Also provide transformation of date values in form of 'date у time'
  const transformedLocation = useTranslateTransformLocation(location);
  const [inputValues, setInputValues] = useState(location);

  const { status, title, message } = locationStatus;

  const backToLocationHandler = () => {
    dispatch(locationsActions.clearSelectedLocation());
    history.push('/locations');
  }

  const onUpdateHandler = useCallback((receivedInputValue) => {
    setInputValues((prevState) => {
      return {
        ...prevState,
        ...receivedInputValue,
      };
    });
  }, []);

  //this console.log is placed in purpose to show changes in location object, based on input change on dinamicly rendered input components. This could be used for submit changes of location data
  console.log(inputValues);

  let detailList;

  if (status === 'success') {
    detailList = transformedLocation.map((item) => (
      <LocationDetailItem key={item.key} item={item} onUpdate={onUpdateHandler}/>
    ));
  }

  if (status === 'pending') {
    detailList = <LoadingSpinner />;
  }

  if (status === 'error') {
    detailList = (
      <ErrorNotification title={title} message={message} />
    );
  }

  return (
    <div className={classes.detail}>
      <div className={classes.list}>{detailList}</div>
      <div className={classes.buttonContainer}>
        <Button onClick={backToLocationHandler}>Изађи</Button>
      </div>
    </div>
  );
};
