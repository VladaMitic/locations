import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LocationsTableRow } from '../LocationsTableRow';
import { Modal } from '../../UI/Modal';
import { DeleteCard } from '../../UI/DeleteCard';
import { deleteOneLocationData } from '../../../store/Actions';

export const LocationsTableBody = (props) => {
  const [showModal, setShowModal] = useState({
    modalIsShowen: false,
    locationId: null,
    locationName: '',
  });
  const locations = useSelector((state) => state.locations.locations);
  const dispatch = useDispatch();

  const showModalHandler = (id, name) => {
    setShowModal({ modalIsShowen: true, locationId: id, locationName: name });
  };

  const hideModalHandler = useCallback(() => {
    setShowModal({
      modalIsShowen: false,
      locationId: null,
      locationName: '',
    });
  }, []);

  const deleteConfirmHandler = () => {
    dispatch(deleteOneLocationData(showModal.locationId));
  };

  const modal = showModal.modalIsShowen && (
    <Modal onClose={hideModalHandler}>
      <DeleteCard
        onClose={hideModalHandler}
        locationId={showModal.locationId}
        locationName={showModal.locationName}
        onDeleteConfirm={deleteConfirmHandler}
      />
    </Modal>
  );

  let rows = locations.map((location) => (
    <LocationsTableRow
      key={location.id}
      invisibleBigMobile={props.invisibleBigMobile}
      invisibleTablet={props.invisibleTablet}
      location={location}
      showModalHandler={showModalHandler}
    />
  ));

  return (
    <tbody>
      {rows}
      {modal}
    </tbody>
  );
};
