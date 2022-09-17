import { useEffect, useState } from 'react';

import classes from './LocationDetailItem.module.scss';

export const LocationDetailItem = (props) => {
  const { key, label, value } = props.item;
  const { onUpdate } = props;

  const [inputValue, setInputValue] = useState({
    [key]: value === 'null' ? '' : value,
  });

  const setInputValueHandler = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onUpdate(inputValue);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue, onUpdate]);

  if (props.item.key !== 'error') {
    return (
      <div className={classes.input}>
        <label htmlFor={key}>{label}:</label>
        <input
          id={key}
          value={inputValue[key]}
          name={key}
          onChange={setInputValueHandler}
          disabled={
            key === 'id' ||
            key === 'municipality' ||
            key === 'createdAt' ||
            key === 'modifiedAt' ||
            key === 'createdBy' ||
            key === 'modifiedBy'
          }
        />
      </div>
    );
  }
};
