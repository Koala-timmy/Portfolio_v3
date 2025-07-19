import { useGLTF } from '@react-three/drei'

export function Room(props) {
  const { nodes, materials } = useGLTF('/models/CubeShape.glb');

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.015}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh geometry={nodes.Cube_Cubo_0.geometry} material={materials.Cubo} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/CubeShape.glb')
