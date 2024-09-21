import { useEffect, useState } from "react";

const WriteAnimation = ({ sentence, delay = 0 }) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    let index = 0;

    const typeLetter = () => {
      if (index < sentence.length) {
        setResult(sentence.slice(0, index + 1)); // Slice the sentence up to the current index
        index++;
      } else {
        clearInterval(interval);
      }
    };

    const interval = setInterval(typeLetter, 200); // Adjust typing speed
    setTimeout(() => {
      typeLetter(); // Start typing immediately after delay
    }, delay);

    return () => clearInterval(interval); // Clean up on unmount

  }, [sentence, delay]);

  return <span className="writeAnimation">{result}</span>;
};

export default WriteAnimation;
