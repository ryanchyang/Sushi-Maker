import React, { useMemo, useEffect, useState } from 'react';
import { useTexture } from '@react-three/drei';
import config from '../../Config';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';
// All textures are CC0 textures from: https://cc0textures.com/

function RenderImage(props) {
  useTexture([
    `${config.HOST}/img/mtl/three/rice.jpg`,
    `${config.HOST}/img/mtl/three/rice-normal3.png`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/salmon.jpg`,
    `${config.HOST}/img/mtl/three/salmon-normal.jpg`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/meat.jpg`,
    `${config.HOST}/img/mtl/three/meat-normal.jpg`,
  ]);
  useTexture(['/img/darker/egg.jpg', '/img/egg-normal.jpg']);
  useTexture([
    `${config.HOST}/img/mtl/three/cheese.jpg`,
    `${config.HOST}/img/mtl/three/cheese-normal.jpg`,
  ]);
  useTexture(['/img/darker/bottarga.png', '/img/bottarga-normal.png']);

  useTexture(['/img/darker/unknown.jpg', '/img/unknown-normal.jpg']);
  useTexture(['/img/darker/Pumpkin.jpg', '/img/Pumpkin-normal.jpg']);
  useTexture([
    `${config.HOST}/img/mtl/three/corn.jpg`,
    `${config.HOST}/img/mtl/three/corn-normal.png`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/snapper.jpg`,
    `${config.HOST}/img/mtl/three/snapper-normal.jpg`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/charsau.png`,
    `${config.HOST}/img/mtl/three/charsau-normal.png`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/pike.jpg`,
    `${config.HOST}/img/mtl/three/pike-normal.jpg`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/congereel.png`,
    `${config.HOST}/img/mtl/three/congereel-normal.png`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/mackerel.jpg`,
    `${config.HOST}/img/mtl/three/mackerel-normal.jpg`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/chickenchop.png`,
    `${config.HOST}/img/mtl/three/chickenchop-normal.png`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/aji.jpg`,
    `${config.HOST}/img/mtl/three/aji-normal.jpg`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/buri.jpg`,
    `${config.HOST}/img/mtl/three/buri-normal.jpg`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/crabstick.png`,
    `${config.HOST}/img/mtl/three/crabstick-normal.png`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/shrimp.png`,
    `${config.HOST}/img/mtl/three/shrimp-normal.png`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/shrimp.png`,
    `${config.HOST}/img/mtl/three/shrimp-normal.png`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/tuna.png`,
    `${config.HOST}/img/mtl/three/tuna-normal.png`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/flounder.png`,
    `${config.HOST}/img/mtl/three/flounder-normal.png`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/squid.jpg`,
    `${config.HOST}/img/mtl/three/squid-normal.png`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/cuttlefish.jpg`,
    `${config.HOST}/img/mtl/three/cuttlefish-normal.png`,
  ]);
  useTexture([
    `${config.HOST}/img/mtl/three/tako.jpg`,
    `${config.HOST}/img/mtl/three/tako-normal.png`,
  ]);

  useTexture([
    `${config.HOST}/img/mtl/three/tamago.jpg`,
    `${config.HOST}/img/mtl/three/tamago-normal.jpg`,
  ]);

  useTexture([
    `${config.HOST}/img/mtl/three/cheese.png`,
    `${config.HOST}/img/mtl/three/cheese-normal.png`,
  ]);

  // 裝飾材質
  useTexture([
    `${config.HOST}/img/mtl/three/bottarga.png`,
    `${config.HOST}/img/mtl/three/bottarga-normal.png`,
  ]);

  useTexture([
    `${config.HOST}/img/mtl/three/tobiko.png`,
    `${config.HOST}/img/mtl/three/tobiko-normal.png`,
  ]);

  useTexture([
    `${config.HOST}/img/mtl/three/wasabi.jpg`,
    `${config.HOST}/img/mtl/three/wasabi-normal.jpg`,
  ]);

  return <></>;
}

export default RenderImage;
