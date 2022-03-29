import React, { useMemo, useEffect, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { RoundedBox, useTexture } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
// All textures are CC0 textures from: https://cc0textures.com/

function RenderImage(props) {
  const [egg, eggNormal] = useTexture(['/img/egg.jpg', '/img/egg-normal.jpg']);
  const [rice, riceNormal] = useTexture([
    '/img/rice2.jpg',
    '/img/rice-normal.jpg',
  ]);
  const [meat, meatNormal] = useTexture([
    '/img/meat.jpg',
    '/img/meat-normal.jpg',
  ]);

  return <></>;
}

export default RenderImage;
