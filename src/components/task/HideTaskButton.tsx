import { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface HideTaskButtonProps {
  onVisibilityChange: (isHidden: boolean) => void;
}

const HideTaskButton = ({ onVisibilityChange }: HideTaskButtonProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(
    JSON.parse(localStorage.getItem("isHidden") || "false")
  );

  useEffect(() => {
    // Persist visibility in localStorage
    localStorage.setItem("isHidden", JSON.stringify(!isHidden));
    onVisibilityChange(isHidden)
  }, [isHidden, onVisibilityChange]);

  const toggleListVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Button onClick={toggleListVisibility} size={"sm"} variant={"ghost"}>
      {isHidden ? "Show Tasks" : "Hide Tasks"}
    </Button>
  );
};

export default HideTaskButton;
