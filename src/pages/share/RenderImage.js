import React, { useMemo, useEffect, useState } from 'react';
import { useTexture } from '@react-three/drei';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';
// All textures are CC0 textures from: https://cc0textures.com/

function RenderImage(props) {
  useTexture(['/img/egg.jpg', '/img/egg-normal.jpg']);
  useTexture(['/img/rice2.jpg', '/img/rice-normal.jpg']);
  useTexture(['/img/meat.jpg', '/img/meat-normal.jpg']);
  useTexture(['/img/bottarga.png', '/img/bottarga-normal.png']);
  useTexture(['/img/salmon.jpg', '/img/salmon-normal.jpg']);
  useTexture(['/img/unknown.jpg', '/img/unknown-normal.jpg']);
  useTexture(['/img/Pumpkin.jpg', '/img/Pumpkin-normal.jpg']);

  return <></>;
}

export default RenderImage;
