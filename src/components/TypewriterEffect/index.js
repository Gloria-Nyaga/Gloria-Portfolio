import React, { useState, useEffect } from 'react';

function TypewriterEffect({ text, className }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [text]);

  return <div className={className}>{displayText}</div>;
}

export default TypewriterEffect;