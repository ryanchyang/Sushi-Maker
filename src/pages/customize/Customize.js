import { Title } from './../layout/Layout';
import './customize.scss';
import MtlLeft from './components/MtlLeft';
import MtlMid from './components/MtlMid';
import MtlRight from './components/MtlRight';
import { useEffect, useState } from 'react';
import config from '../../Config';

function Customize() {
  const [mtlDataSQL, setMtlDataSQL] = useState({});
  const [addMtlData, setAddMtlData] = useState({});

  useEffect(() => {
    const catchData = async () => {
      const mtlRes = await fetch(config.GET_MTLS);
      const mtlObj = await mtlRes.json();
      const mtlDatas = mtlObj.rows;

      setMtlDataSQL(mtlDatas);
    };
    catchData();
  }, []);

  return (
    <>
      <div className="mtlHeader">
        <Title />
      </div>
      <div className="container-fluid customize">
        <div className="row mtlView">
          <MtlLeft
            mtlData={mtlDataSQL}
            addMtlData={addMtlData}
            setAddMtlData={setAddMtlData}
          />
          <MtlMid
            mtlData={mtlDataSQL}
            addMtlData={addMtlData}
            setAddMtlData={setAddMtlData}
          />
          <MtlRight
            mtlData={mtlDataSQL}
            addMtlData={addMtlData}
            setAddMtlData={setAddMtlData}
          />
        </div>
      </div>
    </>
  );
}

export default Customize;
