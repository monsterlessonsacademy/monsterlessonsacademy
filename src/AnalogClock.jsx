import { useEffect, useState } from "react";
import "./analogClock.css";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="clock">
      <div className="dot"></div>
      <span className="twelve hour">12</span>
      <span className="one hour">1</span>
      <span className="two hour">2</span>
      <span className="three hour">3</span>
      <span className="four hour">4</span>
      <span className="five hour">5</span>
      <span className="six hour">6</span>
      <span className="seven hour">7</span>
      <span className="eight hour">8</span>
      <span className="nine hour">9</span>
      <span className="ten hour">10</span>
      <span className="eleven hour">11</span>
      <div
        className="hour-hand"
        style={{
          transform: `rotateZ(${time.getHours() * 30}deg)`,
        }}
      ></div>
      <div
        className="minute-hand"
        style={{
          transform: `rotateZ(${time.getMinutes() * 6}deg)`,
        }}
      ></div>
      <div
        className="second-hand"
        style={{
          transform: `rotateZ(${time.getSeconds() * 6}deg)`,
        }}
      ></div>
    </div>
  );
};

export default AnalogClock;
