import React from 'react';
import useInView from '../hooks/useInView';

const Reveal = ({
  children,
  delay = 0,
  direction = 'up', // up | left | right | none
  threshold = 0.15,
  style = {},
}) => {
  const [ref, inView] = useInView(threshold);

  const getTransform = () => {
    if (direction === 'up') return 'translateY(40px)';
    if (direction === 'left') return 'translateX(-40px)';
    if (direction === 'right') return 'translateX(40px)';
    return 'none';
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate(0,0)' : getTransform(),
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
