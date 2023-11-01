import React from "react";




function Counter() {

    const [currentdate, setCurrentDate] = React.useState(new Date()); 
    const eventDate = new Date("2024-04-19T17:00:00")

    const timeRemaining = eventDate - currentdate

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

   React.useEffect(() => {
        const intervalId = setInterval(()=>{
            setCurrentDate(new Date())
        }, 1000)
        return () => clearInterval(intervalId)
   }, [])

    return (
        <div className="home__counter__container">
            TOURNAMENT IN... {`${days} day${days === 1 ? "" : "s"}, ${hours} hour${hours === 1 ? "" : "s"}, ${minutes} minute${minutes === 1 ? "" : "s"}, ${seconds} second${seconds === 1 ? "" : "s"}`}
        </div>
    )
}

export default Counter;