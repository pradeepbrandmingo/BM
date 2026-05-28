import { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(4); // ✅ start from 4
  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);

  // 👇 Scroll detect (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // 👇 Counter logic
  useEffect(() => {
    if (!startCount) return;

    let start = 85; // ✅ start value
    const end = 92;
    const duration = 2000;
    const increment = (end - start) / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [startCount]);

  return <span ref={ref}>{count}%</span>;
};

export default Counter;
