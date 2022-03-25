/**
 * @author ryumhan
 * @date 2022-03-25
 */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onTime } from "../module/timeOnReducer";

interface ITimerProps {
  onTimeSeq: number;
}

export function Timer({ onTimeSeq }: ITimerProps) {
  const dispatch = useDispatch();

  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (onTimeSeq) {
      setMinutes(10);
      setSeconds(0);
    }
  }, [onTimeSeq]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (Math.floor(seconds) > 0) {
        setSeconds(Math.floor(seconds) - 1);
      }
      if (Math.floor(seconds) === 0) {
        if (Math.floor(minutes) === 0) {
          clearInterval(countdown);
          dispatch(onTime());
        } else {
          setMinutes(Math.floor(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <div className="timer">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
