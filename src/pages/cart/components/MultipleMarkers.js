import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
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
  const { store } = props;
  return store.map((v, i) => {
    const positionXY = [+v.store_longtitude, +v.store_latitude];
    console.log('v', v, positionXY);
    return (
      <Marker
        key={i}
        position={positionXY}
        icon={icon}
        onClick={e => {
          console.log(e.target);
        }}
      >
        <Popup>{v.store_name}</Popup>
      </Marker>
    );
  });
}

export default MultipleMarkers;
