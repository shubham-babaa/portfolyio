"use client "
import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
    const [displayedText, setDisplayedText] = useState(" ");
  const textToType = `Hello and welcome to my portfolio! My name is Shubham Patel and I'm a web developer  with a passion for front-end development. I specialize in creating engaging and interactive websites that not only look great but also provide a great user experience. I'm excited to showcase some of my recent work and skills on this platform. Thank you for stopping by`;


  useEffect(() => {
    let currentIndex = 0;
    const typingTimer = setInterval(() => {
      if (currentIndex < textToType.length-1) {
        
       setDisplayedText((prevText) => prevText + textToType[currentIndex]);
        currentIndex++;}
       else {
        clearInterval(typingTimer);
      }
    }, 50); // Adjust the typing speed (milliseconds per character)
    return () => {
      clearInterval(typingTimer);
    };
  }, []);

  return (
    <div>
      <h1 className="text-lg">{displayedText}</h1>
    </div>
  );
};

export default TypingAnimation;
