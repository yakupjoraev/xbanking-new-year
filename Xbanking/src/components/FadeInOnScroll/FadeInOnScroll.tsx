import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeInOnScroll({ children, delay = 0 }: FadeInOnScrollProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : 20}px)`,
        transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
