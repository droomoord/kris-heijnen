import { useEffect, useRef } from "react";

const ObserverComponent = ({ children, addClass, options }) => {
  const observerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const firstElement = entry.target.querySelector("*");
          firstElement.classList.add(...addClass);
        }
      });
    }, options);
    observer.observe(observerRef.current);
  }, [addClass, options]);
  return <div ref={observerRef}>{children}</div>;
};

export default ObserverComponent;
