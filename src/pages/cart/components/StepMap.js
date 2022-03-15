// StepMap.js 選店地址
import React, { useState } from 'react';
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

// import StoreData from '../data/store.json';

//  點地圖會可以抓到你目前所在的位置
function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

// 資料位置
var arrCoordinates = [
  [25.032, 121.539],
  [25.022, 121.543],
  [25.034, 121.537],
];
// mark icon 圖樣大小
const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
});

function MultipleMarkers() {
  return arrCoordinates.map((coordinates, index) => {
    // console.log('v', v);
    return (
      <Marker key={index} position={coordinates} icon={icon}>
        {/* <Popup>{v.storeName}門市</Popup> */}
      </Marker>
    );
  });
}

function StepMap() {
  // const [store, setStore] = useState([]);
  // const position = [51.505, -0.09];
  // ---------------
  // let map = L.map('map').setView([25.03, 121.54], 13); //初始中心點

  // var Jawg_Sunny = L.tileLayer(
  //   'https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}',
  //   {
  //     attribution:
  //       '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //     minZoom: 0,
  //     maxZoom: 22,
  //     subdomains: 'abcd',
  //     accessToken:
  //       'YR1KwDGBWLiThGFOeyYWRjm7p8MXSWg7PQGaqGXNokIJNZt7xFwLEBYzf1DhJ3t7',
  //   }
  // );

  // Jawg_Sunny.addTo(map);

  // var coordinateArray = [
  //   { coordinate: [25.02, 121.535], storeName: '讚讚門市' }, //門市資料
  //   { coordinate: [25.049187, 121.566344], storeName: '棒棒門市' },
  //   { coordinate: [25.056714, 121.560524], storeName: '鳩鳩門市' },
  //   { coordinate: [25.05639, 121.548287], storeName: '上弘門市' },
  //   { coordinate: [25.04, 121.555], storeName: '寰寰門市' },
  // ];

  // coordinateArray.forEach(ele => {
  //   //將門市資料綁到地標標誌上
  //   L.marker(ele['coordinate'], {
  //     title: ele['storeName'],
  //     opacity: 1.0,
  //   })
  //     // .addTo(map)
  //     .bindPopup(`${ele['storeName']}`)
  //     .on('click', showStore);
  // });

  // function showStore(e) {
  //   var storeName = e.target.getPopup().getContent();
  //   document.querySelector('.store').innerHTML = storeName;
  // }
  // StoreData.map((v, index) => {
  return (
    <>
      <form className="m-4">
        <div className="form-row d-flex justify-content-between px-0 ch-cont-14">
          <div className="form-group col">
            <label htmlFor="inputArea">縣市 </label>
            <select id="inputArea" className="form-control ">
              <option>台北 </option>
              {/* <option>{v.storeCity} </option> */}
            </select>
          </div>
          <div className="form-group col">
            <label htmlFor="inputState">行政區 </label>
            <select id="inputState" className="form-control ">
              <option selected>Choose...</option>
              <option>大安區</option>
              <option>信義區</option>
              <option>中正區</option>

              {/* <option>{v.storeTown}</option> */}
            </select>
          </div>
        </div>
        <div className="form-group col px-0">
          <label htmlFor="inputStore">門市</label>
          <select id="inputStore" className="form-control">
            <option selected>Choose...</option>
            <option selected>12321門市</option>
            <option selected>22231門市</option>

            {/* <option>{v.storeName}門市</option> */}
          </select>
        </div>
        <div
          className="store-map"
          id="map"
          style={
            {
              // width: ' 100 %',
              // height: '600px',
              // backgroundColor: '#c4c4c4',
            }
          }
        >
          <MapContainer
            center={{ lat: 25.03, lng: 121.54 }}
            zoom={13}
            style={{ height: '400px' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
            <Marker
              position={[25.032, 121.539]}
              // icon={greenIcon}
              eventHandlers={{
                click: () => {
                  console.log('marker01');
                  <Popup>Hello world</Popup>;
                },
              }}
            />
            <MultipleMarkers />
          </MapContainer>
        </div>
        <div className="store-box" style={{ fontSize: '1.6rem' }}>
          <i className="fas fa-shipping-fast"></i>&nbsp;請選擇您的印製取貨門市 :
          <span className="store"></span>
        </div>
      </form>
    </>
  );
  // });
}
export default StepMap;
