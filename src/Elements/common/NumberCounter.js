import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

const wait = async (ms = 1000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, ms);
  });

export const NumberCounter = (value, durationMs = 1400) => {
  const [number, setNumber] = useState(0);
  const numRef = useRef(null);

  useEffect(() => {
    const element = numRef.current;

    if (!element) return;

    const observer = new MutationObserver(async (mutations) => {
      mutations.map(async (mutation) => {
        if (mutation.attributeName === 'class') {
          const targetElement = mutation.target;
          if (targetElement.classList.contains('visible')) {
            for (let i = 0; i < value; i++) {
              setNumber(i + 1);
              await wait(durationMs / value);
            }
          }
        }
      });
    });

    observer.observe(element, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <span className="animated" ref={numRef}>
      {number}
    </span>
  );
};
