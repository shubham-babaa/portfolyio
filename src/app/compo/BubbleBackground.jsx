'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BubbleBackground = () => {
  const numberOfBubbles = 10;
  const [bubblePositions, setBubblePositions] = useState([]);

  useEffect(() => {
    const generateRandomPosition = () => {
      return {
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
      };
    };

    const initialPositions = Array.from({ length: numberOfBubbles }, () =>
      generateRandomPosition()
    );
    setBubblePositions(initialPositions);
  }, [numberOfBubbles]);

  const handleHoverStart = (index) => {
    setBubblePositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[index].y = "100%"; // Move the bubble downwards when hovering
      return newPositions;
    });
  };

  const handleHoverEnd = (index) => {
    setBubblePositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[index].y = `${Math.random() * 100}%`; // Reset the bubble to a random Y position when hover ends
      return newPositions;
    });
  };

  return (
    <div className="bubble-background overflow-x-hidden mx-10 ">
      {bubblePositions.map((position, index) => (
        <motion.div
          key={index}
          className="bubble absolute   bg-white left-5 right-5   rounded-full"
          style={{
            width: "40px",
            height: "40px",
            left: position.x,
            bottom: position.y,
          }}
          initial={{ y: "100%" }}
          animate={{
            y: "-100%",
            x: `+=${Math.random() * 100 - 50}%`,
            rotate: `${Math.random() * 360}deg`,
          }}
          exit={{ y: "100%" }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          onHoverStart={() => handleHoverStart(index)}
          onHoverEnd={() => handleHoverEnd(index)}
        ></motion.div>
      ))}
    </div>
  );
};

export default BubbleBackground;
