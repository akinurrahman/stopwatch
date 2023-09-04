import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour clock format
  const formattedHours = hours % 12 || 12;

  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1 className="title">Digital Clock</h1>
        <div className="time">
          <span>{formattedHours}</span>:<span>{minutes}</span>:<span>{seconds}</span> {ampm}
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;
