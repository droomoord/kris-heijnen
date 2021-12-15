import { useEffect, useRef } from "react";

const ObserverComponent = ({ children, addClass, options, targetClass }) => {
  const observerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = targetClass
          ? document.querySelector("." + targetClass)
          : entry.target.querySelector("*");
        if (entry.isIntersecting) {
          target.classList.add(...addClass);
        } else if (targetClass && !entry.isIntersecting) {
          target.classList.remove(...addClass);
        }
      });
    }, options);
    observer.observe(observerRef.current);
  }, [addClass, options, targetClass]);
  return <div ref={observerRef}>{children}</div>;
};

export default ObserverComponent;
