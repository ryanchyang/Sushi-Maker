//選擇菜單的頁面的components(有下拉式選單選擇便當)
import './../SetOrderAll.scss';
import React, { useEffect, useState } from 'react';
import { ReactComponent as SetContent } from './../../../imgs/setorder/icon-info.svg';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import SetMenuFinal from './SetMenuFinal';
import { PropaneRounded } from '@mui/icons-material';

function SetMenuList(props) {
  // 套餐光箱
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [lightBoxCa, setLightBoxCa] = useState();
  const modal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="en-cont-30">便當內容</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="setmenulist">
          <div className="set-view-all p-5">
            <div className="lightbox-bento-img-element mx-auto">
              <img
                className="setorderlist-set-bento-img"
                src={`http://localhost:3500/img/setorder/bento_img/${
                  props.answer[props.index]?.bento_id
                }.png`}
                alt="product-image"
              />
            </div>
            <div className="bento-view-buttom align-items-center">
              <div className="set-nutrient-btn"></div>
            </div>
            <div className="bento-sushi-menu-all">
              <div className="light-title">
                {' '}
                <div className="light_bento_days en-cont-28">
                  Day{props.index + 1}
                </div>
                <div className="light-set-nutrient-bento-name en-cont-28">
                  {props.answer[props.index]?.bento_ch_name}
                </div>
                <div className="light-set-nutrient-bento-name en-cont-18">
                  {props.answer[props.index]?.bento_en_name}
                </div>
              </div>

              <div className="bento-sushi-menu">
                {/* nswer[props.index].sushiList */}
                {props.answer[props.index]?.sushiList.map((selects, i) => {
                  return (
                    <div className="set-menu-sushi col-12 col-12" key={i}>
                      <div className="set-menu-sushi col-12-ch ch-cont-16 mb-5">
                        {selects.c_prod_ch_name}
                      </div>
                      {/* <div className="set-menu-sushi col-12-en en-cont-12">
                                {selects.c_prod_en_name}
                              </div> */}
                    </div>
                  );
                })}
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
    props.setSelectImg(selectedBento.bento_img);
    props.setSelectId(selectedBento.bento_id);

    const AllCA =
      selectedBento.sushiList[0].mtl_calories +
      selectedBento.sushiList[1].mtl_calories +
      selectedBento.sushiList[2].mtl_calories +
      selectedBento.sushiList[3].mtl_calories +
      selectedBento.sushiList[4].mtl_calories +
      selectedBento.sushiList[5].mtl_calories +
      selectedBento.sushiList[6].mtl_calories +
      selectedBento.sushiList[7].mtl_calories;
    props.setSelectmtlCalories(AllCA * 3);
    setLightBoxCa(AllCA * 3);
  }

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
