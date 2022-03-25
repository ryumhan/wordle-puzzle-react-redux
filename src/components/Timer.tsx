/**
 * @author ryumhan
 * @date 2022-03-25
 */

import { useEffect, useState, useRef } from "react";

export function Timer({}) {
  const [min, setMin] = useState(10);
  const [sec, setSec] = useState(0);

  const time = useRef(600);
  const timerId = useRef<any>(0);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(Math.floor(time.current / 60));
      setSec(time.current % 60);

      time.current -= 1;
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (time.current <= 0) {
      console.log("타임 아웃");
      clearInterval(timerId.current);
    }
  }, [sec]);

  return (
    <div className="timer">
      {min} 분 {sec} 초
    </div>
  );
}
