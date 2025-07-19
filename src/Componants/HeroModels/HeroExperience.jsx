import { OrbitControls} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const HeroExperience = () => {
  const isTablet = useMediaQuery({query:'(max-width: 1024px)'});
  const isMobile = useMediaQuery({query:'(max-width: 768px)'});

  const groupRef = useRef();
  
  useEffect(() => {
    if (!groupRef.current) return;

    gsap.to(groupRef.current.rotation, {
      y: 2,
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  }, []);


  return (
    <Canvas camera={{position:[0,0,15], fov: 20}}>
        <OrbitControls
          autoRotateSpeed={3}
          autoRotate={true}
          enableZoom={!isTablet}
          maxDistance={15}
          minDistance={7}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
        <HeroLights/>
        <group
          ref={groupRef}
          scale={isMobile? 0.7 : 2}
          position={[0, 1.4, 0]}
          rotation={[0.25, -Math.PI / -4, 0]}
          >
          <Room />    
        </group>
    </Canvas>
  )
}

export default HeroExperience