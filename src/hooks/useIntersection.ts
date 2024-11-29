import { useState, useEffect } from 'react';

export const useIntersection = (ref: React.RefObject<Element>, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Отслеживаем, когда элемент появляется на экране
      },
      { rootMargin }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [ref, rootMargin]);

  return isVisible;
};
