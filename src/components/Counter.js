import React from "react";
import iconCalendar from "../images/icons/icon-calendar.png";

function Counter() {
  //TODO make helpers
  const [currentdate, setCurrentDate] = React.useState(new Date());
  const eventDate = new Date("2024-04-19T17:00:00");

  const timeRemaining = eventDate - currentdate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home__counter__container">
      <div>
        <h3>TOURNAMENT BEGINS IN... </h3>
        <p>
          {`${days}\u00A0day${days === 1 ? "" : "s"}, 
                    ${hours}\u00A0hour${hours === 1 ? "" : "s"},
                    `}
        </p>
        <p>
          {`
                    ${minutes}\u00A0minute${minutes === 1 ? "" : "s"}, 
                    ${seconds}\u00A0second${seconds === 1 ? "" : "s"}`}
        </p>
      </div>
      <img src={iconCalendar} alt="calendar" />
    </div>
  );
}

export default Counter;
