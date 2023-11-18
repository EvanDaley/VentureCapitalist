import React, { useState, useEffect } from 'react';
const formatNumber = (number) => {
  return number.toString()
}
const SimpleTimer = () => {
  const [seconds, setSeconds] = useState(0n);
  const [isActive, setIsActive] = useState(false);
  function toggle() {
    setIsActive(!isActive);
  }
  function reset() {
    setSeconds(0n);
    setIsActive(false);
  }
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1n);
      }, 1);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    }
  }, [isActive, seconds]);
  const simpleVal = formatNumber(seconds)
  return (
    <div className="timer">
      <div className="time">
        {simpleVal}
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default SimpleTimer;
