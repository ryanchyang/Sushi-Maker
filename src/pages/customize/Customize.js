import { Title } from './../layout/Layout';
import './customize.scss';
import MtlLeft from './components/MtlLeft';
import MtlMid from './components/MtlMid';
import MtlRight from './components/MtlRight';

import { useEffect, useState } from 'react';
// import { mtlData } from './sushiMtlTest';
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import config from '../../Config';

function Customize() {
  const [mtlDataSQL, setMtlDataSQL] = useState({});
  const [addMtlData, setAddMtlData] = useState([]);
  //{ mtlId: 1, mtlPct: 1 }
  // 接SQL資料

  const [altTotal, setAltTotal] = useState(1);
  const [indexTotal, setIndexTotal] = useState(0);
  const [sushiGroup, setSushiGroup] = useState([
    {
      map: '/img/rice.jpg',
      normalMap: '/img/rice-normal3.png',
      height: 0.5,
      alt: -0.05, // 預設增加高度
      fixIndex: 0,
    },
  ]);

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

  // console.log('father\'s mtlDataSQL:', mtlDataSQL);
  // console.log('father\'s addMtlData:', addMtlData);

 // 傳送資料至後端
  const postCusData = async () => {
    const res = await fetch(config.POST_CUS_DATA, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        cm_prod: addMtlData,
        memid: localStorage.getItem('mem_id'),
      }),
    });
    const resJson = await res.json();
  };

  let goDetail = useHistory();

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

  // 儲存提示光箱
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
            goDetail.push('./CusMiDetail');
          }}
        >
          確認
        </Button>
      </Modal.Footer>
    </Modal>
  );
  
  return (
    <>
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
          />
        </div>
      </div>
    </>
  );
}

export default Customize;
