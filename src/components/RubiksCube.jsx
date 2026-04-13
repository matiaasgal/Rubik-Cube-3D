import React from 'react';
import Cubelet from './Cubelet';
import { getFaceColors } from '../utils/CubeUtils.js';

const RubiksCube = () => {
  const cubeSize = 3;
  const nodes = [];

  for (let x = 0; x < cubeSize; x++) {
    for (let y = 0; y < cubeSize; y++) {
      for (let z = 0; z < cubeSize; z++) {
        nodes.push({
          id: `${x}-${y}-${z}`,
          position: [x - 1, y - 1, z - 1],
          colors: getFaceColors(x, y, z, cubeSize)
        });
      }
    }
  }

  return (
    <group>
      {nodes.map((node) => (
        <Cubelet 
          key={node.id} 
          position={node.position} 
          colors={node.colors} 
        />
      ))}
    </group>
  );
};

export default RubiksCube;