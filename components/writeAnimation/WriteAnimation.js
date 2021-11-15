import { useEffect, useState } from "react";

const WriteAnimation = ({ sentence, delay }) => {
  const [result, setResult] = useState("");
  useEffect(() => {
    setTimeout(() => {
      let index = 0;
      const interval = setInterval(addLetter, 100);
      function addLetter() {
        if (sentence.length === index) clearInterval(interval);
        setResult((prev) => prev + sentence.charAt(index));
        index++;
      }
    }, delay);
  }, [sentence, delay]);
  return <span className="writeAnimation">{result}</span>;
};
export default WriteAnimation;
