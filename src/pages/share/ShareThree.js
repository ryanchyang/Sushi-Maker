import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

import { useState, useEffect, Suspense } from 'react';
// import Sushi from './Sushi';
import { Canvas, useFrame, useStore } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import Scene from './Scene';
import RenderImage from './RenderImage';

function ShareThree() {
  const [sushiGroup, setSushiGroup] = useState([
    {
      map: '/img/rice2.jpg',
      normalMap: '/img/rice-normal.jpg',
    },
  ]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Share'} />
          <div className={`mycontainer`}>
            {/* <Suspense fallback={<div>Loading... </div>}>
              <Canvas
                camera={{ position: [0, 0, 10], near: 0.1, far: 1000 }}
                style={{ height: '80vh' }}
              >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Sushi position={[-1.2, 0, 0]} />
                <Sushi position={[1.2, 0, 0]} />
              </Canvas>
            </Suspense> */}
            <button
              onClick={() =>
                setSushiGroup([
                  ...sushiGroup,
                  { map: '/img/egg.jpg', normalMap: '/img/egg-normal.jpg' },
                ])
              }
            >
              Click to add egg
            </button>
            <button
              onClick={() =>
                setSushiGroup([
                  ...sushiGroup,
                  { map: '/img/meat.jpg', normalMap: '/img/meat-normal.jpg' },
                ])
              }
            >
              Click to add meat
            </button>
            <Canvas
              camera={{ position: [0, 0, 10], near: 0.1, far: 1000 }}
              style={{ height: '80vh' }}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={0.2} />
                <directionalLight />
                <pointLight position={[10, 10, 10]} />
                <RenderImage />
                {sushiGroup.map((sushi, i) => {
                  return (
                    <>
                      <Scene
                        key={i}
                        sushi={sushi}
                        index={i}
                        sushiGroup={sushiGroup}
                        setSushiGroup={setSushiGroup}
                      />
                    </>
                  );
                })}
                <OrbitControls autoRotate />
              </Suspense>
            </Canvas>
          </div>
          <br />
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default ShareThree;
