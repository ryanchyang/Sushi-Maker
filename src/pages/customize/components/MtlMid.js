import { Suspense, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from '../../share/Scene';
import RenderImage from '../../share/RenderImage';
import config from '../../../Config';

const MtlMid = forwardRef((props, ref) => {
  const { sushiGroup, setSushiGroup } = props;

  return (
    <>
      <div className="mid-area">
        <div className="layout-title navtitle">Customization</div>
        <div className="trail">
          {' '}
          <Link to={'/'} style={{ textDecoration: 'none', color: '#575757' }}>
            HOME
          </Link>{' '}
          /{' '}
          <Link
            to={'/customize'}
            style={{ textDecoration: 'none', color: '#b03342' }}
          >
            CUSTOMIZATION
          </Link>
        </div>
        <div className="threedArea">
          <Canvas
            ref={ref}
            gl={{ preserveDrawingBuffer: true }} // 讓截圖照不要空白
            shadows
            camera={{ position: [0, 25, 100], fov: 2.5, near: 0.3 }}
            // style={{
            //   width: '50vw',
            //   height: '100vh',
            // }}
            className="view"
          >
            {/* BackgroundColor */}
            <color attach="background" args={['#f7f6f3']} />
            <Suspense fallback={null}>
              {/* Light */}
              {/*An ambient light that creates a soft light against the object */}
              <ambientLight intensity={0.5} />
              {/*An directional light which aims form the given position */}
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <directionalLight position={[-10, 10, 5]} intensity={0.3} />
              {/*An point light, basically the same as directional. This one points from under */}
              <pointLight position={[0, 0, 5]} intensity={0.8} />
              <spotLight
                position={[0, 10, 10]}
                angle={0.5}
                intensity={0.5}
                castShadow
                penumbra={1}
              />
              {/* Preload the images to prevent empty canvas */}
              <RenderImage />
              {sushiGroup.map((sushi, i) => {
                return (
                  <Scene
                    key={i}
                    sushi={sushi}
                    index={i}
                    sushiGroup={sushiGroup}
                    setSushiGroup={setSushiGroup}
                  />
                );
              })}
              <OrbitControls autoRotate />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
});

export default MtlMid;
