import { useMemo } from 'react';

const useTranslateTransformLocation = (location) => {
  return useMemo(() => {
    const translation = (key) => {
      switch (key) {
        case 'readyForAuthorization':
          return 'Спреман за ауторизацију';
        case 'id':
          return 'ИД';
        case 'name':
          return 'Име';
        case 'legalName':
          return 'Правни назив';
        case 'city':
          return 'Град';
        case 'municipality':
          return 'Општина';
        case 'geoLocation':
          return 'Локација';
        case 'address':
          return 'Адреса';
        case 'createdBy':
          return 'Креирао';
        case 'createdAt':
          return 'Креирано дана';
        case 'modifiedBy':
          return 'Изменио';
        case 'modifiedAt':
          return 'Измењено дана';
        case 'description':
          return 'Опис';
        case 'interestsIds':
          return 'Интересовања';
        default:
          return 'error';
      }
    };

    const list = [];

    for (let [key, value] of Object.entries(location)) {
      const label = translation(key);
      let newValue;
      if (key === 'municipality') {
        newValue = value.name;
      } else if (key === 'createdAt' || key === 'modifiedAt') {
        const date = new Date(value);
        const locales = 'sr-RS';
        const transformedTime = date.toLocaleTimeString(locales);
        const transformedDate = date.toLocaleDateString(locales);
        newValue = `${transformedDate} у ${transformedTime}`;
      } else {
        newValue = value;
      }
      list.push({ key: key, label: label, value: newValue });
    }

    return list;
  }, [location]);
};
export default useTranslateTransformLocation;
