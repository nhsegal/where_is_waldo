import { useEffect, useState } from 'react';

const useTimer = (targetDate) => {
  const timerDate = new Date(targetDate).getTime();
  const [timer, setTimer] = useState(
    timerDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timerDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [timerDate]);

  return getReturnValues(timer);
};

const getReturnValues = (timer) => {
  // calculate time left
  const days = Math.floor(timer / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timer % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useTimer };
