import React, { useState, useEffect } from 'react';

const Timer = ({ onEnd }) => {
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute timer

  useEffect(() => {
    if (timeLeft === 0) {
      onEnd();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onEnd]);

  return <div>Time Left: {timeLeft}s</div>;
};

export default Timer;
