export const calculateRemainingTime = (endDate, startDate) => {
  if (!(endDate instanceof Date) || isNaN(endDate)) {
    return { counterFinished: true };
  }

  if (!(startDate instanceof Date) || isNaN(startDate)) {
    return { counterFinished: true };
  }

  const timeRemaining = endDate - startDate;

  const daysNumber = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hoursNumber = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesNumber = Math.floor(
    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsNumber = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const days = `${daysNumber}\u00A0day${daysNumber === 1 ? "" : "s"}`;
  const hours = `${hoursNumber}\u00A0hour${hoursNumber === 1 ? "" : "s"}`;
  const minutes = `${minutesNumber}\u00A0minute${
    minutesNumber === 1 ? "" : "s"
  }`;
  const seconds = `${secondsNumber}\u00A0second${
    secondsNumber === 1 ? "" : "s"
  }`;

  const counterFinished =
    daysNumber === 0 &&
    hoursNumber === 0 &&
    (minutesNumber === 0) & (secondsNumber === 0);

  return { days, hours, minutes, seconds, counterFinished };
};
