import { Title } from './../layout/Layout';
import './customize.scss';
import MtlLeft from './components/MtlLeft';
import MtlMid from './components/MtlMid';
import MtlRight from './components/MtlRight';

import { useEffect, useState, useRef } from 'react';
// import { mtlData } from './sushiMtlTest';
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import config from '../../Config';
import NavPage from '../layout/components/NavPage';
import { data } from './data';

function Customize(props) {
  // 判斷登入

  const loginMemid = localStorage.getItem('mem_id');
  const mem_photo = localStorage.getItem('mem_photo');
  const history = useHistory();

  // nav
  const { navIsOpen, setNavIsOpen } = props;
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };

  // 材料Data
  const [mtlDataSQL, setMtlDataSQL] = useState(data.rows);
  const [addMtlData, setAddMtlData] = useState([]);

  // 3D
  /*
   邏輯為當增加一層材料時記錄下他的位置高度參數alt，及當下index為fixIndex，
   並且結合 alt 跟 fixIndex 算出每次渲染的材料層在3D環境中的y軸位置
   alt 用來紀錄當材料層增加減少厚度或換位置時所必須增加或減少高度的值
   ////////////////////////////////////////////////////////
   增加單層 MtlLBtn.js 
   改變順序 MtlRight.js
   增加減少厚度 刪減單層 MtlRBtn.js
  */
  const canvasRef = useRef(null);
  const [altTotal, setAltTotal] = useState(1); // 增加一層時的當前alt所需的紀錄狀態 // MtlLBtn.js 46
  const [indexTotal, setIndexTotal] = useState(0); // 增加一層時的當前index所需的紀錄狀態  // MtlLBtn.js 47
  const [sushiGroup, setSushiGroup] = useState([
    {
      map: `/img/mtl/three/rice.jpg`, // 彩色照片
      normalMap: `/img/mtl/three/rice-normal3.jpg`, // 凹凸光線照片
      height: 0.5, // 單層高度
      alt: -0.05, // altitude 預設增加或減少的位置高度
      fixIndex: 0, // 當前狀況下的index
    },
  ]); // 3D物件陣列，每層為一個物件，第一層為米飯

  let goDetail = useHistory(); // 換頁用

  // 左右選單
  const [openLArea, setOpenLArea] = useState(false);
  const [openRArea, setOpenRArea] = useState(false);

  useEffect(() => {
    setAddMtlData([{ mtlId: 1, mtlPct: 1 }]);
  }, []);

  // 轉換blob格式
  function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  // 傳送資料至後端
  // download image

  const downloadImage = async () => {
    const dataUrl = canvasRef.current.toDataURL('image/jpeg', 0.5); // 將canvas轉成url
    const a = document.createElement('a');
    a.download = 'sushi-you-make.png';
    a.href = dataUrl;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div className="mtlHeader">
          <Title />
        </div>
        <div className="container-fluid customize">
          <div className="row mtlView">
            <MtlLeft
              altTotal={altTotal}
              setAltTotal={setAltTotal}
              indexTotal={indexTotal}
              setIndexTotal={setIndexTotal}
              sushiGroup={sushiGroup}
              setSushiGroup={setSushiGroup}
              mtlData={mtlDataSQL}
              addMtlData={addMtlData}
              setAddMtlData={setAddMtlData}
              openLArea={openLArea}
              setOpenLArea={setOpenLArea}
            />

            <MtlMid
              mtlData={mtlDataSQL}
              addMtlData={addMtlData}
              altTotal={altTotal}
              setAltTotal={setAltTotal}
              indexTotal={indexTotal}
              setIndexTotal={setIndexTotal}
              sushiGroup={sushiGroup}
              setSushiGroup={setSushiGroup}
              ref={canvasRef}
            />
            <MtlRight
              mtlData={mtlDataSQL}
              addMtlData={addMtlData}
              setAddMtlData={setAddMtlData}
              altTotal={altTotal}
              setAltTotal={setAltTotal}
              indexTotal={indexTotal}
              setIndexTotal={setIndexTotal}
              sushiGroup={sushiGroup}
              setSushiGroup={setSushiGroup}
              downloadImage={downloadImage}
              navIsOpen={navIsOpen}
              setNavIsOpen={setNavIsOpen}
              loginMemid={loginMemid}
              mem_photo={mem_photo}
              openRArea={openRArea}
              setOpenRArea={setOpenRArea}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Customize;
