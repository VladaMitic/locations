import { useMemo } from 'react';

const useFilterCitiesByNoLocation = (arrayToFilter, filterCriteriaArray) => {
  return useMemo(() => {
    const idsForFilter = filterCriteriaArray.map(
      (item) => item.municipality.id
    );

    const filteredArray = arrayToFilter.filter(
      (item) =>
        !idsForFilter.includes(item.id) &&
        item.name !== 'Недефинисано' &&
        item.name !== 'Све општине'
    );

    return filteredArray;
  }, [arrayToFilter, filterCriteriaArray]);
};
export default useFilterCitiesByNoLocation;
