//cart/components/MultipleMarkers.js 地圖中的選擇行政區要出現多比mark選
import React, { useEffect, useState } from 'react';

import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// mark icon 圖樣大小
const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
});
function MultipleMarkers(props) {
  const { store, setStoreName, setStoreId
} = props;

  return store.map((v, i) => {
    const positionXY = [+v.store_longtitude, +v.store_latitude];
    // console.log('v', v, positionXY);
    return (
      <Marker
        key={i}
        value={v.store_name}
        position={positionXY}
        icon={icon}
        data={v.store_id}
        eventHandlers={{
          click: e => {
            console.log('MMMMdata', e.target.options.data);
            props.setStoreName(e.target.options.value + '門市');
            props.setGetStoreId(e.target.options.data);
          },
        }}
      >
        <Popup>{v.store_name}門市</Popup>
      </Marker>
    );
  });
}

export default MultipleMarkers;
