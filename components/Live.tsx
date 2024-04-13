import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../public/assets/live.json';

interface LiveProps {
  width: number;
  height: number;
}

const Live: React.FC<LiveProps> = ({ width, height }) => {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoPlay
      style={{ width, height }}
    />
  );
};

export default Live;