import React, { useMemo, useEffect, useState } from 'react';
import { useTexture } from '@react-three/drei';
// import config from '../../Config';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';
// All textures are CC0 textures from: https://cc0textures.com/

function RenderImage(props) {
  useTexture([`/img/mtl/three/rice.jpg`, `/img/mtl/three/rice-normal3.jpg`]);
  useTexture([`/img/mtl/three/salmon.jpg`, `/img/mtl/three/salmon-normal.jpg`]);
  useTexture([`/img/mtl/three/meat.jpg`, `/img/mtl/three/meat-normal.jpg`]);
  useTexture(['/img/mtl/three/egg.jpg', '/img/mtl/three/egg-normal.jpg']);
  useTexture([`/img/mtl/three/cheese.jpg`, `/img/mtl/three/cheese-normal.jpg`]);
  useTexture([
    '/img/mtl/three/bottarga.jpg',
    '/img/mtl/three/bottarga-normal.jpg',
  ]);

  // useTexture(['/img/darker/unknown.jpg', '/img/unknown-normal.jpg']);
  useTexture([
    '/img/mtl/three/Pumpkin.jpg',
    '/img/mtl/three/Pumpkin-normal.jpg',
  ]);
  useTexture([`/img/mtl/three/corn.jpg`, `/img/mtl/three/corn-normal.jpg`]);
  useTexture([
    `/img/mtl/three/snapper.jpg`,
    `/img/mtl/three/snapper-normal.jpg`,
  ]);
  useTexture([
    `/img/mtl/three/charsau.jpg`,
    `/img/mtl/three/charsau-normal.jpg`,
  ]);
  useTexture([`/img/mtl/three/pike.jpg`, `/img/mtl/three/pike-normal.jpg`]);
  useTexture([
    `/img/mtl/three/congereel.jpg`,
    `/img/mtl/three/congereel-normal.jpg`,
  ]);
  useTexture([
    `/img/mtl/three/mackerel.jpg`,
    `/img/mtl/three/mackerel-normal.jpg`,
  ]);
  // useTexture([
  //   `/img/mtl/three/chickenchop.jpg`,
  //   `/img/mtl/three/chickenchop-normal.jpg`,
  // ]);
  useTexture([`/img/mtl/three/aji.jpg`, `/img/mtl/three/aji-normal.jpg`]);
  useTexture([`/img/mtl/three/buri.jpg`, `/img/mtl/three/buri-normal.jpg`]);
  useTexture([
    `/img/mtl/three/crabstick.jpg`,
    `/img/mtl/three/crabstick-normal.jpg`,
  ]);
  // useTexture([`/img/mtl/three/shrimp.jpg`, `/img/mtl/three/shrimp-normal.jpg`]);
  useTexture([`/img/mtl/three/shrimp.jpg`, `/img/mtl/three/shrimp-normal.jpg`]);
  useTexture([`/img/mtl/three/tuna.jpg`, `/img/mtl/three/tuna-normal.jpg`]);
  useTexture([
    `/img/mtl/three/flounder.jpg`,
    `/img/mtl/three/flounder-normal.jpg`,
  ]);
  useTexture([`/img/mtl/three/squid.jpg`, `/img/mtl/three/squid-normal.jpg`]);
  useTexture([
    `/img/mtl/three/cuttlefish.jpg`,
    `/img/mtl/three/cuttlefish-normal.jpg`,
  ]);
  useTexture([`/img/mtl/three/tako.jpg`, `/img/mtl/three/tako-normal.jpg`]);

  useTexture([`/img/mtl/three/tamago.jpg`, `/img/mtl/three/tamago-normal.jpg`]);

  useTexture([`/img/mtl/three/cheese.jpg`, `/img/mtl/three/cheese-normal.jpg`]);

  // 裝飾材質
  useTexture([
    `/img/mtl/three/bottarga.jpg`,
    `/img/mtl/three/bottarga-normal.jpg`,
  ]);

  useTexture([`/img/mtl/three/tobiko.jpg`, `/img/mtl/three/tobiko-normal.jpg`]);

  useTexture([`/img/mtl/three/wasabi.jpg`, `/img/mtl/three/wasabi-normal.jpg`]);

  return <></>;
}

export default RenderImage;
