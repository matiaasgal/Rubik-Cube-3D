import React from 'react'
import * as THREE from 'three'

const Cubelet = ({ position, colors }) => {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.95, 0.95, 0.95]} />
        
        {colors.map((col, index) => (
          <meshBasicMaterial 
            key={index} 
            attach={`material-${index}`} 
            color={col} 
          />
        ))}
      </mesh>

      <mesh>
        <boxGeometry args={[0.96, 0.96, 0.96]} />
        <meshBasicMaterial color="black" wireframe />
      </mesh>
    </group>
  )
}

export default Cubelet