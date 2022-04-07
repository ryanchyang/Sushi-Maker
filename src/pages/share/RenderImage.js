import React, { useMemo, useEffect, useState } from 'react';
import { useTexture } from '@react-three/drei';
import config from '../../Config';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';
// All textures are CC0 textures from: https://cc0textures.com/

function RenderImage(props) {
  useTexture(['/img/darker/egg.jpg', '/img/egg-normal.jpg']);
  useTexture(['/img/rice.jpg', '/img/rice-normal3.png']);
  useTexture(['/img/darker/meat.jpg', '/img/meat-normal.jpg']);
  useTexture(['/img/darker/bottarga.png', '/img/bottarga-normal.png']);
  useTexture(['/img/salmon-dark.jpg', '/img/salmon-normal.jpg']);
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
    `${config.HOST}/img/mtl/three/mackerel-normal.png`,
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

  return <></>;
}

export default RenderImage;
