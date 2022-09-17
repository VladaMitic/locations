import {Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import useTransformDate from '../../../hooks/transformDate-hook';
import {Button} from '../../UI/Button';

import classes from './LocationsTableRow.module.scss';

export const LocationsTableRow = (props) => {

  const history = useHistory();
  //custom hook transform date field from date string into string in form 'before X days/hours/minutes/seconds'
  const displayCreatedAtDate = useTransformDate(props.location.createdAt);
  const displayModifiedAtDate = useTransformDate(props.location.modifiedAt);

  const showModalHandler = () => {
    props.showModalHandler(props.location.id, props.location.name);
  }

  const showDetailHandler = () => {
    history.push(`/locations/${props.location.id}`);
  };

  return (
    <Fragment>
      <tr>
        <td>{props.location.name}</td>
        <td>{props.location.legalName}</td>
        <td>
          {props.location.city}/{props.location.municipality.name}/
          {props.location.geoLocation === 'null'
            ? 'непозната'
            : props.location.geoLocation}
        </td>
        <td>{props.location.address}</td>
        <td className={props.invisibleBigMobile}>
          {props.location.createdBy} пре {displayCreatedAtDate}
        </td>
        <td className={props.invisibleBigMobile}>
          {props.location.modifiedBy} пре {displayModifiedAtDate}
        </td>
        <td className={props.invisibleTablet}>
          {props.location.description === 'null'
            ? ''
            : props.location.description}
        </td>
        <td>
          <Button className={classes.button} onClick={showDetailHandler}>
            Измени
          </Button>
        </td>
        <td>
          <Button className={classes.button} onClick={showModalHandler}>
            Обриши
          </Button>
        </td>
      </tr>
    </Fragment>
  );
};
