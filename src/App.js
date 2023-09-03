import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState({ hour: 10, min: 59, second: 55 });
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setTimer({ hour: 0, min: 0, second: 0 });
  };
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        let newSecond = timer.second + 1;
        let newMinute = timer.min;
        let newHour = timer.hour;

        if (newSecond === 60) {
          newSecond = 0;
          newMinute++;
        }

        if (newMinute === 60) {
          newMinute = 0;
          newHour++;
        }

        setTimer({ hour: newHour, min: newMinute, second: newSecond });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timer]);

  return (
    <div className="stopwatch-outer-container">
      <div className="stopwatch-container">
        <div className="time">
          <span className="hours">{timer.hour}</span>:
          <span className="min">{timer.min}</span>:
          <span className="second">{timer.second}</span>
        </div>
        <div className="buttons">
          <button className="btn start" onClick={start}>
            Start
          </button>

          <button className="btn pause" onClick={pause}>
            Pause
          </button>
          <button className="btn reset" onClick={reset}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
