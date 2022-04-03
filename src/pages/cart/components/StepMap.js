// StepMap.js 選店地址
import React, { useEffect, useState, forwardRef } from 'react';

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import AreaData from '../data/store_area.json';
import MultipleMarkers from './MultipleMarkers';
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
    <Marker position={position} icon={iconNow}>
      <Popup>目前所在位置</Popup>
    </Marker>
  );
}

// 所在位置的icon 圖樣
const iconNow = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
});

const StepMap = forwardRef((props, ref) => {
  // const position = [51.505, -0.09];
  const [init, setInit] = useState(AreaData);
  const [city, setCity] = useState(AreaData.city);
  const [cityId, setCityId] = useState(0);
  const [area, setArea] = useState(AreaData.area);
  const [areaId, setAreaId] = useState(0);
  const [store, setStore] = useState(AreaData.store);
  // const [storeId, setStoreId] = useState('');
  const { storeName, setStoreName } = props;
  // const inputStoreId = useRef(null);
  // const { setGetStoreId, getStoreId}=props
  // getStoreId={getStoreId}
  // setGetStoreId = { setGetStoreId }

  // 縣市+行政區
  useEffect(() => {
    console.log('area:', area);
    let a = init.area.filter(v => {
      // console.log('v.store_city' + v.store_city_id);
      // console.log('cityId' + cityId);
      // console.log(+v.store_city_id === +cityId);
      return v.store_city_id == cityId;
    });
    // console.log('a12332112313213', a);
    setArea(a);
  }, [cityId]);
  // 行政區+門市

  // 門市ID
  useEffect(() => {
    // console.log('store:', store);
    let b = init.store.filter(v => {
      // console.log('v.store_city_id' + v.store_city_id);
      // console.log('v.store_area_id:' + v.store_area_id);
      // console.log('typeof  v.store_', typeof v.store_area_id);
      // console.log('typeof ', typeof +areaId);
      // console.log('area id ===', +v.store_area_id == +areaId);
      return v.store_area_id == +areaId;
    });
    setStore(b);
  }, [areaId]);

  //  縣市 input
  const inputCity = (
    <div className="form-group col">
      <label htmlFor="inputCity">縣市 </label>
      <select
        id="inputCity"
        className="form-control"
        onChange={e => {
          // console.log(1231321313);
          setCityId(+e.target.value);
        }}
      >
        <option>Choose...</option>
        {city.map((v, i) => {
          return (
            <option key={i} value={v.store_city_id}>
              {v.store_city}
            </option>
          );
        })}
      </select>
    </div>
  );
  // 行政區 select input
  const inputArea = (
    <div className="form-group col">
      <label htmlFor="inputArea">行政區 </label>
      <select
        id="inputArea"
        className="form-control "
        onChange={e => {
          setAreaId(e.target.value);
        }}
      >
        <option selected>Choose...</option>
        {area.map((v, i) => {
          return (
            <option key={i} value={v.store_area_id}>
              {v.store_area}
            </option>
          );
        })}
      </select>
    </div>
  );
  // 門市 select input
  const inputStore = (
    <div className="form-group col px-0">
      <label htmlFor="inputStore ">門市</label>
      <select
        id="inputStore"
        className="form-control"
        onChange={e => {
          setStoreName(e.target.value + '門市');
          console.log(e.target);
          const option = e.target.querySelector(
            `option[value=${e.target.value}]`
          );
          console.log('StoreIDDDD', option.getAttribute('data-id'));
          props.setGetStoreId(option.getAttribute('data-id'));
          console.log('fjlkj IDDDDD', e.target.value);
        }}
      >
        <option selected>Choose...</option>
        {store.map((v, i) => {
          return (
            <option key={v.store_id} value={v.store_name} data-id={v.store_id}>
              {v.store_name}門市 ({v.store_address})
            </option>
          );
        })}
      </select>
    </div>
  );

  // 抓出店的XY 改成陣列
  // const positionXY = store.map((v, i) => {
  //   // console.log('lat', +v.store_latitude);
  //   // console.log('lot', +v.store_longtitude);
  //   // console.log('[v.store_latitude, v.store_longtitude]', [
  //   //   +v.store_latitude,
  //   //   +v.store_longtitude,
  //   // ]);
  //   return [+v.store_latitude, +v.store_longtitude];
  // });

  // const Sid = inputStoreId.current?.value;
  // console.log('Sid@@@', Sid); //找出SID 往上傳

  // const { setGetStoreId } = props;

  return (
    <>
      <form className="m-4">
        <div className="row">
          <div className="col-md-12 col-24">
            <div className="store-map" id="map">
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

                <MultipleMarkers
                  store={store}
                  setStoreName={setStoreName}
                  setGetStoreId={props.setGetStoreId}
                />
              </MapContainer>
            </div>
          </div>
          <div className="col-md-12 col-24">
            <div className="form-row d-flex justify-content-between px-0 ch-cont-14">
              {inputCity}
              {inputArea}
            </div>
            {inputStore}
          </div>

          <div className="store-box" style={{ fontSize: '1.6rem' }}>
            <i className="fas fa-shipping-fast"></i>&nbsp;請選擇您的印製取貨門市
            :
            <span
              className="store"
            >
              <input
                type="text"
                hidden
                value={props.getStoreId}
              />
              {storeName }
            </span>
          </div>
        </div>
      </form>
    </>
  );
});
export default StepMap;
