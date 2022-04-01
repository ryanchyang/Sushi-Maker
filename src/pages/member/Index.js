import {
  Header,
  AsideLeft,
  AsideRight,
  Footer,
  Title,
} from './memLayout/LayoutLight';
import './index.scss';
import { findMem, memLike } from '../../WebApi';
import { useEffect, useState } from 'react';
import { getMemId } from '../../utils';
import MemHead from './component/MemHead';
import Events from './component/Events';
import MemProdLike from './component/MemProdLike';
import NavPage from '../layout/components/NavPage';
import { Button, Modal } from 'react-bootstrap';
import { ReactComponent as Info } from '../../imgs/info.svg';

function MemIndex(props) {
  const [memData, setMemData] = useState(null);
  const [toggleForCprod, setToggleForCprod] = useState(false);
  const [memShare, setMemShare] = useState('');
  const { navIsOpen, setNavIsOpen } = props;

  const [rule, setRule] = useState(false);
  const handleClose = () => setRule(false);
  const handleShow = () => setRule(true);

  const mem_id = getMemId('mem_id'); //TODO步驟1. 取得會員登入後存在localStorage的member id

  useEffect(() => {
    findMem(mem_id).then(obj => {
      setMemData(obj[0]);
    });
    memLike(mem_id).then(d => {
      setMemShare(d);
    });
  }, []);

  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };

  return (
    <>
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div className="member-container">
            <Title title={''} />
            <div className="d-md-none" style={{ marginTop: '30%' }}></div>
            <div className="member ">
              <MemHead memShare={memShare} setMemShare={setMemShare} />
              {/* 以上不動 */}

              <div className="mycontainer">
                <div className="memInfoArea col-md-24 col-sm-24 ">
                  <div className="memInfo col-sm-24 col-md-12 mx-md-4 px-5">
                    <table class="table table-borderless col-md-16 mt-4 col-sm-24 tableInfo">
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
                        <tr onClick={handleShow} style={{ cursor: 'pointer' }}>
                          <td>
                            <Info />
                            會員積分規則
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {
                      <Modal show={rule} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title className="ch-title-20 m-3">
                            會員積分說明
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ margin: '0 3%' }}>
                          <table class="table">
                            <thead>
                              <tr>
                                <td className="ch-title-18">執行動作</td>
                                <td className="ch-title-18">週期範圍</td>
                                <td className="ch-title-18">單週獎勵次數</td>
                                <td className="ch-title-18">積分</td>
                              </tr>
                            </thead>
                            <tbody className="ch-cont-16 ">
                              <tr>
                                <td>分享牆貼文</td>
                                <td>無限制</td>
                                <td>無限制</td>
                                <td>+50</td>
                              </tr>
                              <tr>
                                <td>分享牆留言</td>
                                <td>無限制</td>
                                <td>無限制</td>
                                <td>+10</td>
                              </tr>
                              <tr>
                                <td>經典壽司列印</td>
                                <td>無限制</td>
                                <td>無限制</td>
                                <td>+50</td>
                              </tr>
                              <tr>
                                <td>客製壽司列印</td>
                                <td>無限制</td>
                                <td>無限制</td>
                                <td>+50</td>
                              </tr>
                              <tr>
                                <td>套餐訂閱</td>
                                <td>無限制</td>
                                <td>無限制</td>
                                <td>+50</td>
                              </tr>
                              <tr>
                                <td>頭像設置</td>
                                <td>一次性</td>
                                <td>1</td>
                                <td>+5</td>
                              </tr>
                              <tr>
                                <td>每日登入</td>
                                <td>每天</td>
                                <td>1</td>
                                <td>+1</td>
                              </tr>
                            </tbody>
                          </table>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            className="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2"
                            onClick={handleClose}
                          >
                            離開
                          </Button>
                          {/*TODO: 確認門市要送出表單並存到DB mem */}
                        </Modal.Footer>
                      </Modal>
                    }
                  </div>
                  <div className="memSet col-sm-24 col-md-12 mx-md-4 d-flex">
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

                <div className="memActive col-md-24 col-sm-24 mb-5 ">
                  <p className="ch-title-22 mt-4">
                    {toggleForCprod === false ? '近期活動' : '經典收藏'}
                  </p>
                  <button
                    className="btn btn-primary primeal-btn-sm memActiveTBtn"
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
                  <div className="spaceForBtn"></div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
    </>
  );
}

export default MemIndex;
