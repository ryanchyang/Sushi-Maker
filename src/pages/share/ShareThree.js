import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

import { useState, useEffect, Suspense } from 'react';
// import Sushi from './Sushi';
import { Canvas, useFrame, useStore } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import Scene from './Scene';
import RenderImage from './RenderImage';
import { nanoid } from 'nanoid';

function ShareThree() {
  const [altTotal, setAltTotal] = useState(0);
  const [isChange, setIsChange] = useState([]);
  const [indexTotal, setIndexTotal] = useState(0);
  const [sushiGroup, setSushiGroup] = useState([
    {
      map: '/img/rice2.jpg',
      normalMap: '/img/rice-normal.jpg',
      height: 0.5,
      alt: altTotal * 0.5, // 預設增加高度
      fixIndex: 0,
    },
  ]);

  function FillLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        intensity={brightness}
        color={color}
        position={[2, 1, 4]}
        lookAt={[0, 0, 0]}
        penumbra={2}
        castShadow
      />
    );
  }
  function KeyLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        color={color}
        intensity={brightness}
        position={[-2, 0, 5]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
    );
  }
  function RimLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={2}
        height={2}
        intensity={brightness}
        color={color}
        position={[1, 4, -2]}
        rotation={[0, 180, 0]}
        castShadow
      />
    );
  }

  const changeHeightHandler = () => {
    let returnGroup = [...sushiGroup];
    const clickItem = isChange[isChange.length - 1];
    const addHeightObj = returnGroup[clickItem];
    addHeightObj.height = addHeightObj.height + 0.5; // 預設增加高度
    addHeightObj.alt = addHeightObj.alt + 0.25; // 預設增加y軸高度

    const willAddAltArr = [...returnGroup].slice(clickItem + 1);
    const AddedAltArr = willAddAltArr.map(obj => {
      return { ...obj, alt: obj.alt + 0.5 }; // 預設增加高度
    });

    const finalArr = [
      ...returnGroup.slice(0, clickItem),
      addHeightObj,
      ...AddedAltArr,
    ];

    setAltTotal(altTotal + 1);
    setSushiGroup(finalArr);
  };

  const changeOrderHandler = () => {
    let returnGroup = [...sushiGroup];
    const boxGroupArr = [...returnGroup].slice(2, 5); // 互換i 為 1,4的材料
    const lastArr = [...returnGroup].slice(5);

    if (!lastArr.length) {
      const singleBoxHeight = returnGroup[1].height;
      const boxGroupHeight = boxGroupArr.reduce(
        (total, v) => total + v.height,
        0
      );
      // console.log(singleBoxHeight, boxGroupHeight);
      const singBoxHeightObj = returnGroup[1];
      singBoxHeightObj.alt = singBoxHeightObj.alt + boxGroupHeight;
      const finalGroup = boxGroupArr.map(box => {
        return { ...box, alt: box.alt - singleBoxHeight };
      });

      const finalArr = [
        ...returnGroup.slice(0, 1),
        ...finalGroup,
        singBoxHeightObj,
      ];
      // returnGroup.splice(4, 1, sushiGroup[1]);
      setSushiGroup(finalArr);
    }

    if (lastArr.length) {
      const singleBoxHeight = returnGroup[1].height;
      const boxGroupHeight = boxGroupArr.reduce(
        (total, v) => total + v.height,
        0
      );

      const singBoxObj = returnGroup[1];
      singBoxObj.alt = singBoxObj.alt + boxGroupHeight;
      const finalGroup = boxGroupArr.map(box => {
        return { ...box, alt: box.alt - singleBoxHeight };
      });
      const finalRestGroupArr = [...finalGroup];

      finalRestGroupArr.pop();

      const finalRestGroupHeight = finalRestGroupArr.reduce(
        (total, v) => total + v.height,
        0
      );
      const lastBoxObj = finalGroup[finalGroup.length - 1];

      lastBoxObj.alt = lastBoxObj.alt - finalRestGroupHeight;
      const finalAddedAltRestGroup = finalRestGroupArr.map(box => {
        return { ...box, alt: box.alt + lastBoxObj.height };
      });

      const finalArr = [
        ...returnGroup.slice(0, 1),
        lastBoxObj,
        ...finalAddedAltRestGroup,
        singBoxObj,
        ...lastArr,
      ];

      setSushiGroup(finalArr);
    }
  };

  const deleteHandler = index => {
    let returnGroup = [...sushiGroup];
    const deleteBox = returnGroup[index];
    const boxGroupArr = [...returnGroup].slice(index + 1);

    const finalGroupBox = boxGroupArr.map(box => {
      return { ...box, alt: box.alt - deleteBox.height };
    });

    const finalArr = [...returnGroup.slice(0, index), ...finalGroupBox];

    setIndexTotal(indexTotal - 1);
    const deleteAltAmount = deleteBox.height / 0.5 - 1;
    setAltTotal(altTotal - deleteAltAmount);
    setSushiGroup(finalArr);
  };

  useEffect(() => {
    if (isChange.length) changeHeightHandler();
  }, [isChange]);

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
              onClick={() => {
                setIndexTotal(indexTotal + 1);
                setSushiGroup([
                  ...sushiGroup,
                  {
                    map: '/img/egg.jpg',
                    normalMap: '/img/egg-normal.jpg',
                    height: 0.5,
                    alt: altTotal * 0.5, // 預設增加高度
                    fixIndex: indexTotal + 1,
                  },
                ]);
              }}
            >
              Click to add egg
            </button>
            <button
              onClick={() => {
                setIndexTotal(indexTotal + 1);
                setSushiGroup([
                  ...sushiGroup,
                  {
                    map: '/img/meat.jpg',
                    normalMap: '/img/meat-normal.jpg',
                    height: 0.5,
                    alt: altTotal * 0.5, // 預設增加高度
                    fixIndex: indexTotal + 1,
                  },
                ]);
              }}
            >
              Click to add meat
            </button>
            <button
              onClick={() => {
                setIndexTotal(indexTotal + 1);
                setSushiGroup([
                  ...sushiGroup,
                  {
                    map: '/img/bottarga.png',
                    normalMap: '/img/bottarga-normal.png',
                    height: 0.5,
                    alt: altTotal * 0.5, // 預設增加高度
                    fixIndex: indexTotal + 1,
                  },
                ]);
              }}
            >
              Click to add 鮭魚卵
            </button>
            <button
              onClick={() => {
                setIndexTotal(indexTotal + 1);
                setSushiGroup([
                  ...sushiGroup,
                  {
                    map: '/img/salmon.jpg',
                    normalMap: '/img/salmon-normal.jpg',
                    height: 0.5,
                    alt: altTotal * 0.5, // 預設增加高度
                    fixIndex: indexTotal + 1,
                  },
                ]);
              }}
            >
              Click to add 鮭魚
            </button>
            <button
              onClick={() => {
                setIndexTotal(indexTotal + 1);
                setSushiGroup([
                  ...sushiGroup,
                  {
                    map: '/img/unknown.jpg',
                    normalMap: '/img/unknown-normal.jpg',
                    height: 0.5,
                    alt: altTotal * 0.5, // 預設增加高度
                    fixIndex: indexTotal + 1,
                  },
                ]);
              }}
            >
              Click to add 未知
            </button>
            <button
              onClick={() => {
                setIndexTotal(indexTotal + 1);
                setSushiGroup([
                  ...sushiGroup,
                  {
                    map: '/img/Pumpkin.jpg',
                    normalMap: '/img/Pumpkin-normal.jpg',
                    height: 0.5,
                    alt: altTotal * 0.5, // 預設增加高度
                    fixIndex: indexTotal + 1,
                  },
                ]);
              }}
            >
              Click to add 南瓜
            </button>
            <button onClick={() => changeOrderHandler()}>Change order</button>
            <button onClick={() => deleteHandler(1)}>Delete 1 one</button>
            <Canvas
              shadows
              camera={{ position: [0, 20, 100], fov: 3, near: 0.1 }}
              style={{
                height: '80vh',
              }}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={0.3} />
                {/* <pointLight posit ion={[150, 150, 150]} intensity={0.55} /> */}

                <directionalLight />

                <pointLight position={[10, 10, 10]} />
                <RenderImage />
                {sushiGroup.map((sushi, i) => {
                  return (
                    <Scene
                      key={i}
                      sushi={sushi}
                      index={i}
                      sushiGroup={sushiGroup}
                      setSushiGroup={setSushiGroup}
                      isChange={isChange}
                      setIsChange={setIsChange}
                    />
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
