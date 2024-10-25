"use client";
import { useEffect, useState } from "react";

// Props interface for type safety
interface AnimatedNumberProps {
  targetNumber: number; // The target number passed as a prop
  duration?: number; // Optional duration for the animation
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  targetNumber,
  duration = 3, // Default duration is 3 seconds
}) => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);

  useEffect(() => {
    const totalSteps = 100; // Number of steps for the animation
    const increment = (targetNumber - currentNumber) / totalSteps; // Increment value per step
    const intervalTime = (duration * 1000) / totalSteps; // Time per step in milliseconds

    const interval = setInterval(() => {
      setCurrentNumber((prev) => {
        const nextNumber = Math.round(prev + increment);
        // Stop the animation when we reach or exceed the target number
        if (nextNumber >= targetNumber) {
          clearInterval(interval);
          return targetNumber; // Ensure we set it to the exact target
        }
        return nextNumber;
      });
    }, intervalTime);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [targetNumber, duration, currentNumber]);

  return (
    <div className="font-space-mono font-semibold text-[34px]">
      {/* Display the animated number */}
      {currentNumber}K+
    </div>
  );
};

export default AnimatedNumber;
