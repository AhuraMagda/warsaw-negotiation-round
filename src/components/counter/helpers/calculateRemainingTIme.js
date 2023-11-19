export const calculateRemainingTime = (eventDate, currentdate) => {
  const timeRemaining = eventDate - currentdate;

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
  const seconds = `${secondsNumber}\u00A0seconds${
    secondsNumber === 1 ? "" : "s"
  }`;

  return { days, hours, minutes, seconds };
};
