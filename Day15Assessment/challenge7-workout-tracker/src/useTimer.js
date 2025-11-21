import { useState, useEffect, useRef } from "react";

export default function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    timerRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setSeconds(0);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return { seconds, start, stop, reset };
}
