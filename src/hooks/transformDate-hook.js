import { useMemo } from 'react';

const useTransformDate = (date) => {
  return useMemo(() => {
    const created = new Date(date);
    const now = Date.now();
    const difference = now - created.getTime();
    const differenceDays = Math.round(difference / 1000 / 60 / 60 / 24);
    const differenceHours = Math.round(difference / 1000 / 60 / 60);
    const differenceMinutes = Math.round(difference / 1000 / 60);
    const differenceSeconds = Math.round(difference / 1000);
    let displayTime;
    if (differenceDays > 0) {
      displayTime = `${differenceDays} дана`;
    } else if (differenceHours > 0) {
      displayTime = `${differenceHours} сат.`;
    } else if (differenceMinutes > 0) {
      displayTime = `${differenceMinutes} мин.`;
    } else {
      displayTime = `${differenceSeconds} сек.`;
    }

    return displayTime;
  }, [date]);
};
export default useTransformDate;
