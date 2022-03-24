//SetorderFinal 的七天菜單的一行菜單列,包含下拉式選單
import './../SetOrderAll.scss';
import React, { useState } from 'react';
import { ReactComponent as SetContent } from './../../../imgs/setorder/icon-info.svg';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import SetMenuFinal from './SetMenuFinal';
// import Meal from './../SetMeal.json';
function SetMenuList(props) {
  // 套餐光箱
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="en-cont-30">套餐說明</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="setmenulist">
          <div className="set-view-all p-5">
            <div className="bento-img-element mx-auto">
              <img
                src={require('./../img/SetorderBento.png')}
                alt="bento-image"
              />
            </div>
            <div className="bento-view-buttom align-items-center">
              <div className="set-nutrient-btn">
                <div className="set-nutrient-bento-name ch-title-18">
                  鮭魚便當
                </div>
                <div className="btn btn-sm btn-outline-primary primeal-btn-outline-sm set-nutrient float-end">
                  營養成份
                </div>
              </div>
            </div>
            <div className="bento-sushi-menu-all">
              <div className="bento-sushi-menu">
                <div className="set-menu-sushi">
                  <div className="set-menu-sushi-ch ch-cont-16">測試壽司1</div>
                  <div className="set-menu-sushi-en en-cont-16 en-cont-16">
                    English name
                  </div>
                </div>
                <div className="set-menu-sushi">
                  <div className="set-menu-sushi-ch ch-cont-16">測試壽司2</div>
                  <div className="set-menu-sushi-en en-cont-16">
                    English name
                  </div>
                </div>
              </div>

              <div className="bento-sushi-menu-all">
                <div className="bento-sushi-menu">
                  <div className="set-menu-sushi">
                    <div className="set-menu-sushi-ch ch-cont-16">
                      測試壽司1
                    </div>
                    <div className="set-menu-sushi-en en-cont-16">
                      English name
                    </div>
                  </div>
                  <div className="set-menu-sushi">
                    <div className="set-menu-sushi-ch ch-cont-16">
                      測試壽司2
                    </div>
                    <div className="set-menu-sushi-en en-cont-16">
                      English name
                    </div>
                  </div>
                </div>
              </div>
              <div className="bento-sushi-menu-all">
                <div className="bento-sushi-menu">
                  <div className="set-menu-sushi">
                    <div className="set-menu-sushi-ch ch-cont-16">
                      測試壽司1
                    </div>
                    <div className="set-menu-sushi-en en-cont-16">
                      English name
                    </div>
                  </div>
                  <div className="set-menu-sushi">
                    <div className="set-menu-sushi-ch ch-cont-16">
                      測試壽司2
                    </div>
                    <div className="set-menu-sushi-en en-cont-16">
                      English name
                    </div>
                  </div>
                </div>
              </div>
              <div className="bento-sushi-menu-all">
                <div className="bento-sushi-menu">
                  <div className="set-menu-sushi">
                    <div className="set-menu-sushi-ch ch-cont-16">
                      測試壽司1
                    </div>
                    <div className="set-menu-sushi-en en-cont-16">
                      English name
                    </div>
                  </div>
                  <div className="set-menu-sushi">
                    <div className="set-menu-sushi-ch ch-cont-16">
                      測試壽司2
                    </div>
                    <div className="set-menu-sushi-en en-cont-16">
                      English name
                    </div>
                  </div>
                </div>
              </div>
              <div className="bento-sushi-menu-all">
                <div className="bento-sushi-menu">
                  <div className="set-menu-sushi">
                    <div className="set-menu-sushi-ch ch-cont-16">
                      測試壽司1
                    </div>
                    <div className="set-menu-sushi-en en-cont-16">
                      English name
                    </div>
                  </div>
                  <div className="set-menu-sushi">
                    <div className="set-menu-sushi-ch ch-cont-16">
                      測試壽司2
                    </div>
                    <div className="set-menu-sushi-en en-cont-16">
                      English name
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-sm btn-primary primeal-btn-sm mx-5"
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      <div className="setmenulist">
        <div className="select-date"></div>
        <div className="select-box col-24 align-items-center">
          <div className="en-cont-36 set-day">1</div>
          <select name="" id="" className="select ch-cont-18">
            <option value="">測試便當1 English name</option>
            <option value="">測試便當2 English name</option>
            <option value="">測試便當3 English name</option>
            <option value="">測試便當4 English name</option>
            <option value="">測試便當5 English name</option>
            <option value="">測試便當6 English name</option>
            <option value="">測試便當7 English name</option>
          </select>

          {modal}
          <span className="custom-info" onClick={handleShow}>
            <SetContent />
          </span>
        </div>
      </div>
    </>
  );
}

export default SetMenuList;