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

function Customize(props) {
  // 購物車數字變化
  const [cart_count, setCart_count] = useState(0);
  useEffect(() => {
    setCart_count(localStorage.getItem('cart_count'));
  }, [props.changeCartCount]);

  // 判斷登入
  const isLogin = localStorage.getItem('loginStatus');
  const loginMemid = localStorage.getItem('mem_id');
  const mem_photo = localStorage.getItem('mem_photo');
  const history = useHistory();

  // nav
  const { navIsOpen, setNavIsOpen } = props;
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };

  // 材料Data
  const [mtlDataSQL, setMtlDataSQL] = useState({});
  const [addMtlData, setAddMtlData] = useState([]);

  // 3D
  const canvasRef = useRef(null);
  const [altTotal, setAltTotal] = useState(1);
  const [indexTotal, setIndexTotal] = useState(0);
  const [sushiGroup, setSushiGroup] = useState([
    {
      map: `${config.HOST}/img/mtl/three/rice.jpg`,
      normalMap: `${config.HOST}/img/mtl/three/rice-normal3.png`,
      height: 0.5,
      alt: -0.05, // 預設增加高度
      fixIndex: 0,
    },
  ]);

  let goDetail = useHistory(); // 換頁用

  // 左右選單
  const [openLArea, setOpenLArea] = useState(false);
  const [openRArea, setOpenRArea] = useState(false);

  // 接SQL資料
  useEffect(() => {
    const catchData = async () => {
      const mtlRes = await fetch(config.GET_MTLS);
      const mtlObj = await mtlRes.json();
      const mtlDatas = mtlObj.rows;

      setMtlDataSQL(mtlDatas);
    };
    catchData();
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
  const postCusData = async () => {
    const dataUrl = canvasRef.current.toDataURL('image/jpeg', 0.5);
    const blobImg = dataURLtoBlob(dataUrl);
    console.log(blobImg);
    const fd = new FormData();

    // insert order id and images into formdata
    fd.append('canvasImage', blobImg, 'sushi.jpg');
    fd.append('cm_prod', JSON.stringify(addMtlData));
    fd.append('memid', localStorage.getItem('mem_id'));

    const res = await fetch(config.POST_CUS_DATA, {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
      body: fd,
    });
    const resJson = await res.json();
  };

  // 儲存提示光箱
  const [saveShow, setSaveShow] = useState(false);
  const handleSaveClose = () => setSaveShow(false);
  const handleSaveShow = () => setSaveShow(true);
  const saveModel = (
    <Modal show={saveShow} onHide={handleSaveClose}>
      <Modal.Header closeButton>
        <Modal.Title className="en-cont-30 m-3">提醒</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ margin: '0 3%' }}>
        <div className="en-cont-14 pb-2">已為您儲存當前資料</div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
          onClick={handleSaveClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  // 換頁提示光箱
  const [nextShow, setNextShow] = useState(false);
  const handleNextClose = () => setNextShow(false);
  const handleNextShow = () => setNextShow(true);
  const nextModel = (
    <Modal show={nextShow} onHide={handleNextClose}>
      <Modal.Header closeButton>
        <Modal.Title className="en-cont-30 m-3">提醒</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ margin: '0 3%' }}>
        <div className="en-cont-14 pb-2">
          即將離開製作頁面，請問是否要前往取名頁面？
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2"
          onClick={handleNextClose}
        >
          取消
        </Button>
        <Button
          variant=" btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2 m-3"
          className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
          onClick={() => {
            postCusData();
            handleNextClose();
            goDetail.push('./cusmidetail');
          }}
        >
          確認
        </Button>
      </Modal.Footer>
    </Modal>
  );

  if (!isLogin) {
    history.push('/member/login');
    return <></>;
  } else {
    return (
      <>
        {navIsOpen && (
          <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
        )}
        <div style={navIsOpen ? hiddenBlock : showBlock}>
          {saveModel}
          {nextModel}
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
                handleSaveShow={() => setSaveShow(true)}
                handleNextShow={() => setNextShow(true)}
                postCusData={postCusData}
                navIsOpen={navIsOpen}
                setNavIsOpen={setNavIsOpen}
                cart_count={cart_count}
                setCart_count={setCart_count}
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
}

export default Customize;
