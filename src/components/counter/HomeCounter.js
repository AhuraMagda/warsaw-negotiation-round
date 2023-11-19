import React from "react";
import { useEffect, useState } from "react";
import iconCalendar from "../../images/icons/icon-calendar.png";
import { calculateRemainingTime } from "./helpers/calculateRemainingTIme";

export default function Counter() {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const eventDate = new Date("2024-04-19T17:00:00");

  const { days, hours, minutes, seconds, counterFinished } = calculateRemainingTime(
    eventDate,
    currentDate
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
        <img src={iconCalendar} alt="calendar" />
        <div className="home__counter__container__text">
          {counterFinished ?
          (
            <h2>April, 19th - 21st 2024</h2>
          ) : (
            <>
              <h3>TOURNAMENT BEGINS IN... </h3>
              <p>
                {days}, {hours},
              </p>
              <p>
                {minutes}, {seconds}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
