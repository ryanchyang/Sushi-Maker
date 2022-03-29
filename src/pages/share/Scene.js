import React, { Suspense, useMemo, useEffect, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { RoundedBox, useTexture } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
// All textures are CC0 textures from: https://cc0textures.com/
const name = type => `PavingStones092_1K_${type}.jpg`;

function Scene(props) {
  const { sushi, index, sushiGroup, setSushiGroup } = props;
  const { map, normalMap } = sushi;
  console.log(sushi);

  const [img, normalImg] = useTexture([map, normalMap]);

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

  return 1 ? (
    <>
      <mesh
        position={[0, index / 2, 0]}
        onClick={() => {
          console.log(index);
          setSushiGroup(() => {
            let returnGroup = [...sushiGroup];
            returnGroup.splice(index, 1);
            return returnGroup;
          });
        }}
      >
        {/* Width and height segments for displacementMap */}
        {/* <sphereBufferGeometry args={[1, 100, 100]} />
        <meshStandardMaterial
          displacementScale={0.2}
          map={colorMap}
          normalMap={normalMap}
        /> */}
        <RoundedBox args={[1, 0.5, 1]} radius={0.05} smoothness={4}>
          <meshStandardMaterial
            bumpScale={0.05}
            map={img}
            normalMap={normalImg}
          />
        </RoundedBox>
      </mesh>
    </>
  ) : (
    ''
  );
}

export default Scene;
