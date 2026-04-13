import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center } from '@react-three/drei'
import RubiksCube from './components/RubiksCube'

function App() {

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111' }}>
      <Canvas camera={{ position: [4, 4, 4] }}>
        <ambientLight intensity={0.5} />
        
        <Center>
          <RubiksCube/>
        </Center>

        {/* esto controla la camara*/}
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  )
}

export default App