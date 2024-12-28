import { useState } from "react";
import TimerButton from "./TimerButton";

const Timer = () => {
  const minutes = 12 * 60 * 1000;
  const [timer, setTimer] = useState<number>(minutes);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  const startTimer = () => {
    const id = setInterval(() => setTimer((prev) => prev - 1000), 1000);
    setTimerInterval(id);
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    if (timerInterval != null) {
      clearInterval(timerInterval as unknown as number);
    }
    setIsTimerRunning(false);
  };

  const timerDate = new Date(timer);

  return (
    <div className="flex flex-col w-full items-center justify-center gap-8">
      <div className="w-full">
        <h1 className="font-bold text-9xl text-primary-800">
          {timerDate.getMinutes().toString().padStart(2, "0")}:
          {timerDate.getSeconds().toString().padStart(2, "0")}
        </h1>
      </div>
      <div className="flex flex-col w-full h-full items-center justify-center gap-2">
        <TimerButton isTimerRunning={isTimerRunning} startTimer={startTimer} stopTimer={stopTimer} />
      </div>
    </div>
  );
};

export default Timer;
