import React, { useMemo, useEffect, useState } from 'react';
import { useTexture } from '@react-three/drei';
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

  return <></>;
}

export default RenderImage;

