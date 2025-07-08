import Lottie from 'lottie-react';

const AnimatedIcon = ({ animationData, size = 100, style = {} }) => {
  return (
    <Lottie
      animationData={animationData}
      loop
      style={{
        width: size,
        height: size,
        position: 'absolute',
        opacity: 0.4,
        ...style,
      }}
    />
  );
};

export default AnimatedIcon;
