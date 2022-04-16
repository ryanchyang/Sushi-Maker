// import * as THREE from 'three';
import React, { useEffect, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, useTexture } from '@react-three/drei';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';
// All textures are CC0 textures from: https://cc0textures.com/
// const name = type => `PavingStones092_1K_${type}.jpg`;

// 單層材料層
function Scene(props) {
  const { sushi, index, sushiGroup, setSushiGroup, isChange, setIsChange } =
    props;
  const { map, normalMap, height, alt, fixIndex } = sushi;
  const [active, setActive] = useState(0); // 舊寫法
  const mesh = useRef();
  const [img, normalImg] = useTexture([map, normalMap]);

  // 用 react-spring 套件新增材料動畫
  const { position } = useSpring({
    from: { position: [0, fixIndex / 8 + alt + 0.125, 0] },
    to: async next => {
      if (active) {
        await next({ position: [0, fixIndex / 8 + alt, 0] });
      }
    },
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });

  // img.wrapS = THREE.RepeatWrapping; //調整材質的大小
  // img.wrapT = THREE.RepeatWrapping;
  // img.repeat.set(1, 1); // 數字越大 單張圖片材質本身越小 重複的次數越多
  // normalImg.wrapS = THREE.RepeatWrapping;
  // normalImg.wrapT = THREE.RepeatWrapping;
  // normalImg.repeat.set(1, 1);

  useFrame(state => {
    const t = state.clock.getElapsedTime();
    // mesh.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
    // mesh.current.rotation.x = Math.cos(t / 4) / 8;
    mesh.current.rotation.y = Math.sin(t / 4) / 8;
    // mesh.current.position.y = (1 + Math.sin(t / 1.5)) / 10 + fixIndex / 2 + alt; //Y軸上下移動
  });
  // console.log(mesh.current?.position.y);
  // const [img, normalImg] = useLoader(TextureLoader, [map, normalMap]);
  // const [
  //   colorMap,
  //   displacementMap,
  //   normalMap,
  //   roughnessMap,
  //   aoMap
  // ] = useTexture([
  //   name("Color"),
  //   name("Displacement"),
  //   name("Normal"),
  //   name("Roughness"),
  //   name("AmbientOcclusion")
  // ]);

  const changeHeightIndexHandler = () => {
    setIsChange([...isChange, index]);
  }; // 舊寫法

  useEffect(() => {
    if (index === sushiGroup.length - 1) setActive(Number(!active));
  }, []); // 舊寫法

  return (
    <>
      <a.mesh
        ref={mesh}
        // position={[0, fixIndex / 2 + alt, 0]}
        position={position}
        onClick={() => {
          changeHeightIndexHandler();
          // setSushiGroup(() => {
          //   let returnGroup = [...sushiGroup];
          //   returnGroup.splice(index, 1);
          //   return returnGroup;
          // });
        }}
      >
        {/* Width and height segments for displacementMap */}
        {/* <sphereBufferGeometry args={[0.5, 100, 100]} />
        <meshStandardMaterial
          displacementScale={0.2}
          map={img}
          normalMap={normalImg}
        /> */}
        {/* Form */}
        <RoundedBox args={[1, height, 1]} radius={0.04} smoothness={4}>
          {/* Material */}
          <meshStandardMaterial
            attach="material"
            normalScale={1}
            map={img}
            normalMap={normalImg}
          />
        </RoundedBox>
      </a.mesh>
    </>
  );
}

export default Scene;
