import { Header, AsideLeft, AsideRight, Footer ,Title } from './memLayout/LayoutLight';
import './index.scss';
import { findMem } from '../../WebApi';
import { useEffect, useState } from 'react';
import { getMemId } from '../../utils';
import MemHead from './component/MemHead';
import Events from './component/Events';
import MemProdLike from './component/MemProdLike';

function MemIndex() {
  const [memData, setMemData] = useState(null);
  const [toggleForCprod, setToggleForCprod] = useState(false);
  const mem_id = getMemId('mem_id'); //TODO步驟1. 取得會員登入後存在localStorage的member id

  useEffect(() => {
    findMem(mem_id).then(obj => {
      setMemData(obj[0]);
    });
  }, []);

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ widtd: '100%' }}>
          <Title title={''}/>
          <div className="member ">
            <MemHead />
            {/* 以上不動 */}

            <div className="mycontainer">
              <div className="memInfoArea">
                <div className="memInfo col-md-12 col-24 mx-3 px-5">
                  <table class="table table-borderless col-16 mt-4">
                    <thead>
                      <tr>
                        <td className="ch-title-22">會員資訊</td>
                      </tr>
                    </thead>
                    <tbody className="ch-cont-18 ">
                      <tr>
                        <td>會員暱稱:</td>
                        <td>{memData ? memData.mem_nickname : ''}</td>
                      </tr>
                      <tr>
                        <td>會員等級:</td>
                        <td>{memData ? memData.mem_level : ''}</td>
                      </tr>
                      <tr>
                        <td>會員總積分:</td>
                        <td>{memData ? memData.mem_total_credit : ''}</td>
                      </tr>
                      <tr>
                        <td>會員現有積分:</td>
                        <td>{memData ? memData.mem_credit : ''}</td>
                      </tr>
                      <tr>
                        <td>會員積分規則:</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="memSet col-md-12 col-24 mx-3 d-flex">
                  <div className="setImg">
                    <img src="/img/member/orderSet.png" alt="cube" />
                  </div>
                  <div className="setDetail ch-cont-18">
                    <p className="ch-title-22">訂閱套餐</p>
                    <p>訂閱方案</p>
                    <p>訂閱時間</p>
                  </div>
                </div>
              </div>
              <div className="memActive col-md-24 mb-5">
                <p className="ch-title-22 mt-4">
                  {toggleForCprod === false ? '近期活動' : '經典收藏'}
                </p>
                <button
                  className="btn btn-primary primeal-btn-sm"
                  style={{ position: 'absolute', top: '10%', right: '2%' }}
                  onClick={() => {
                    setToggleForCprod(true);
                    if (toggleForCprod === true) {
                      setToggleForCprod(false);
                    }
                  }}
                >
                  {toggleForCprod === false ? '經典收藏' : '近期活動'}
                </button>
                <div className="memActiveArea">
                  <div className="ActiveDetail col-md-24 mt-5">
                    {toggleForCprod === false ? <Events /> : <MemProdLike />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default MemIndex;
