import { useRef, useEffect, useState } from 'react';

export function useStaggeredAnimation(
  threshold: number = 0.1,
  rootMargin: string = '0px 0px -50px 0px'
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Une fois visible, on arrête d'observer
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return [containerRef, isVisible] as const;
}
