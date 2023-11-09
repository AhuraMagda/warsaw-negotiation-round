import React from "react";
import { useEffect } from "react";
import iconCalendar from "../../images/icons/icon-calendar.png";
import { displayRemainingTime } from "./helpers/calculateRemainingTIme";

export default function Counter() {
  const [currentdate, setCurrentDate] = React.useState(new Date());
  const eventDate = new Date("2024-04-19T17:00:00");

  const { daysAndHours, minutesAndSeconds } = displayRemainingTime(
    eventDate,
    currentdate
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="home__counter">
      <div className="home__counter__container">
        <div>
          <h3>TOURNAMENT BEGINS IN... </h3>
          <p>{daysAndHours}</p>
          <p>{minutesAndSeconds}</p>
        </div>
        <img src={iconCalendar} alt="calendar" />
      </div>
    </section>
  );
}
