import { Button } from "../ui/button";

interface TimerButtonProps {
  isTimerRunning: boolean;
  stopTimer: () => void;
  startTimer: () => void;
}

const TimerButton = ({
  isTimerRunning,
  stopTimer,
  startTimer,
}: TimerButtonProps) => {
  return (
    <Button onClick={isTimerRunning ? stopTimer : startTimer}>
      {isTimerRunning ? "Stop Timer" : "Start Timer"}
    </Button>
  );
};

export default TimerButton;
