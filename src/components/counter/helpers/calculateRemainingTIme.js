const calculateRemainingTime = (eventDate, currentdate) => {
  const timeRemaining = eventDate - currentdate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export const displayRemainingTime = (eventDate, currentdate) => {
  const { days, hours, minutes, seconds } = calculateRemainingTime(
    eventDate,
    currentdate
  );

  const daysAndHours = `${days}\u00A0day${days === 1 ? "" : "s"}, 
    ${hours}\u00A0hour${hours === 1 ? "" : "s"},
    `;
  const minutesAndSeconds = `
    ${minutes}\u00A0minute${minutes === 1 ? "" : "s"}, 
    ${seconds}\u00A0second${seconds === 1 ? "" : "s"}`;

  return { daysAndHours, minutesAndSeconds };
};
