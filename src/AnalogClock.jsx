import { useEffect, useState } from "react";
import "./analogClock.css";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="clock">
      <div className="dot"></div>
      <div className="hour twelve">12</div>
      <div className="hour one">1</div>
      <div className="hour two">2</div>
      <div className="hour three">3</div>
      <div className="hour four">4</div>
      <div className="hour five">5</div>
      <div className="hour six">6</div>
      <div className="hour seven">7</div>
      <div className="hour eight">8</div>
      <div className="hour nine">9</div>
      <div className="hour ten">10</div>
      <div className="hour eleven">11</div>
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
