//選擇菜單的頁面的components(有下拉式選單選擇便當)
import './../SetOrderAll.scss';
import React, { useState } from 'react';
import { ReactComponent as SetContent } from './../../../imgs/setorder/icon-info.svg';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import SetMenuFinal from './SetMenuFinal';

function SetMenuList(props) {
  // console.log('props-compo', props);

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
            <div className="lightbox-bento-img-element mx-auto">
              <img
                className="setorderlist-set-bento-img"
                src={`http://localhost:3500/img/home/mealplan-bento.png`}
                alt="product-image"
              />
            </div>
            <div className="bento-view-buttom align-items-center">
              <div className="set-nutrient-btn">
                <div className="set-nutrient-bento-name ch-title-18">
                  {props.selectTitle}
                </div>
                {/* <div className="btn btn-sm btn-outline-primary primeal-btn-outline-sm set-nutrient float-end">
                  營養成份
                </div> */}
              </div>
            </div>
            <div className="bento-sushi-menu-all">
              <div className="bento-sushi-menu">
                
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
  //套餐光箱結束
  console.log('props.choose', props.choose);
  //菜單選擇
  function menuChange(e) {
    const newdata = [...props.answer];

    const selectedBento = props.choose.find(
      bento => +bento.bento_id === +e.target.value
    );
    //一坨便當的物件(七天的)
    newdata[props.index] = selectedBento;
    props.setAnswer(newdata);
    props.setSelect(selectedBento.sushiList);
    props.setSelectTitle(selectedBento.bento_ch_name);
  }

  // function listChange(e) {
  //   console.log('hello');
  // }
  return (
    <>
      <div className="setmenulistname">
        <div className="select-date"></div>
        <div className="select-box col-24 align-items-center">
          <div className="en-cont-36 set-day">{props.index + 1}</div>
          <select
            name=""
            id=""
            className="select ch-cont-18"
            onChange={menuChange}
          >
            {props.choose?.map((b, i) => {
              return (
                <option value={b.bento_id} key={b.sid}>
                  {b.bento_ch_name}&nbsp;&nbsp;
                  {b.bento_en_name}
                </option>
              );
            })}
          </select>

          {/* 光箱的 */}
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
