"use client";
import { motion, useAnimation } from "framer-motion";
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
  const controls = useAnimation();

  useEffect(() => {
    // Start the number animation from 0 to the target number
    controls.start({
      number: targetNumber,
      transition: {
        duration: duration, // Duration of the animation
        ease: "easeInOut",
      },
    });
  }, [targetNumber, duration, controls]);

  return (
    <motion.div
      animate={controls}
      initial={{ number: 0 }} // Start from 0
      onUpdate={(latest: { number: number }) => {
        // Update the state with the current value of the animation
        setCurrentNumber(Math.round(latest.number));
      }}
      className="font-space-mono font-semibold text-[34px]"
    >
      {/* Display the animated number */}
      {currentNumber}K+
    </motion.div>
  );
};

export default AnimatedNumber;
