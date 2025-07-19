import * as THREE from 'three'
const HeroLights = () => {
  return (
    <>
      {/* Soft overall ambient light */}
      <ambientLight intensity={1} />

      {/* Main directional "sun" light */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={150}
        
      />

      {/* Fill light from opposite side */}
      <directionalLight
        position={[-5, 5, -5]}
        intensity={5}
      />

      {/* Optional back/rim light for depth */}
      <pointLight
        position={[0, 5, -10]}
        intensity={0.5}
      />
    </>
  )
}

export default HeroLights