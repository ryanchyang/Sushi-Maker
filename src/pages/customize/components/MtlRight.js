import { ReactComponent as Hamburger } from '../../../imgs/hamburger.svg';
import { ReactComponent as Cart } from '../../../imgs/cart.svg';
import { ReactComponent as Help } from '../../../imgs/help-circle.svg';
import { ReactComponent as Rectangle } from '../../../imgs/rectangle.svg';
import { ReactComponent as ArrL } from '../../../imgs/arrow-left-noccircle.svg';
import MtlRBtn from './MtlRBtn';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../../../Config';
import ChartForCm from '../../chartjs/ChartCs/ChartForCm';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function MtlRight(props) {
  // chartjs
  const [arrayForChart, setArrayForChart] = useState([]);

  const chooseItems = ['選擇食材', '營養分析'];
  const [changeChoose, setChangeChoose] = useState('選擇食材');
  const {
    addMtlData,
    setAddMtlData,
    handleSaveShow,
    handleNextShow,
    postCusData,
    altTotal,
    setAltTotal,
    indexTotal,
    setIndexTotal,
    sushiGroup,
    setSushiGroup,
    navIsOpen,
    setNavIsOpen,
    cart_count,
    setCart_count,
    loginMemid,
    mem_photo,
    openRArea,
    setOpenRArea,
  } = props;

  useEffect(() => {
    const mtls = addMtlData?.map(m => m.mtlId);
    setArrayForChart(mtls);
    // console.log(mtls);
  }, [addMtlData]);

  // 老師修改整理的版本，把加減高度的變數重新整理過
  const changeOrderHandler = (drag, drop) => {
    let originalArr = [...sushiGroup];
    let boxGroupArr;
    let lastArr;
    lastArr =
      drag > drop
        ? [...originalArr].slice(drag + 1)
        : [...originalArr].slice(drop + 1);
    /////////////////////////////////////////////////////
  
    if (lastArr.length) {
      const boxSlicePositionOffset = drag > drop ? 0 : 1;
      const dragWithOffset = drag + boxSlicePositionOffset;
      const dropWithOffset = drop + boxSlicePositionOffset;
      boxGroupArr = [...originalArr].slice(
        Math.min(dragWithOffset, dropWithOffset),
        Math.max(dragWithOffset, dropWithOffset)
      );
  
      const singBoxObj = originalArr[drag];
  
      const boxGroupHeight = boxGroupArr.reduce(
        (total, v) => total + v.height,
        0
      );
  
      const altDirection = drag > drop ? 1 : -1;
  
      singBoxObj.alt = singBoxObj.alt - boxGroupHeight * altDirection;
      const midGroup = boxGroupArr.map(box => {
        return { ...box, alt: box.alt + singBoxObj.height * altDirection };
      });
  
      const finalArr =
        drag > drop
          ? [...originalArr.slice(0, drop), singBoxObj, ...midGroup, ...lastArr]
          : [...originalArr.slice(0, drag), ...midGroup, singBoxObj, ...lastArr];
      setSushiGroup(finalArr);
    }
  
    if (!lastArr.length) {
      if (drag > drop) {
        boxGroupArr = [...originalArr].slice(drop, drag);
      }
      if (drag < drop) {
        boxGroupArr = [...originalArr].slice(drag + 1, drop + 1);
      }
  
      const singBoxHeightObj = originalArr[drag];
  
      const boxGroupHeight = boxGroupArr.reduce(
        (total, v) => total + v.height,
        0
      );
  
      singBoxHeightObj.alt =
        drag > drop
          ? singBoxHeightObj.alt - boxGroupHeight
          : singBoxHeightObj.alt + boxGroupHeight;
  
      const finalBoxGroup = boxGroupArr.map(box =>
        drag > drop
          ? { ...box, alt: box.alt + singBoxHeightObj.height }
          : { ...box, alt: box.alt - singBoxHeightObj.height }
      );
  
      const finalArr =
        drag > drop
          ? [...originalArr.slice(0, drop), singBoxHeightObj, ...finalBoxGroup]
          : [...originalArr.slice(0, drag), ...finalBoxGroup, singBoxHeightObj];
  
      // originalArr.splice(4, 1, sushiGroup[1]);
      setSushiGroup(finalArr);
    }
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const ModifiedAddMtlData = reorder(
      addMtlData,
      result.source.index,
      result.destination.index
    );

    // console.log(addMtlData, result.source.index, result.destination.index);

    changeOrderHandler(
      addMtlData.length - result.source.index - 1,
      addMtlData.length - result.destination.index - 1
    );

    setAddMtlData(ModifiedAddMtlData);
  }

  return (
    <>
      <div
        className={
          'right-area mx-auto px-0' + (openRArea ? ' close-left' : ' open-left')
        }
      >
        <div
          className="ra-btn"
          onClick={() => {
            setOpenRArea(!openRArea);
          }}
        >
          <input type="checkbox" className="la-btn-box" />
          <ArrL className="arrL" />
        </div>
        <div className="ra-menu col px-0">
          <div className="menuMtl">
            <Help className="tech" />
            <Link to={'/cart/stepone'} className="cart">
              <div className="cart-icon-add">
                <Cart className="layout-cart-btn" />
                {cart_count > 0 ? (
                  <span class="cart-num">{cart_count}</span>
                ) : (
                  ''
                )}
              </div>
            </Link>

            {loginMemid ? (
              <Link to={'/member'} className="mem">
                <div className="memimg">
                  <img
                    src={`${config.HOST}/img/member/` + '/' + mem_photo}
                    alt="member-photo"
                  />
                </div>
              </Link>
            ) : (
              <Link to={'/member/login'}>
                <div>
                  <img
                    src={`${config.HOST}/img/home/login.svg`}
                    alt="member-photo"
                  />
                </div>
              </Link>
            )}
            <Hamburger
              className="buger"
              onClick={() => {
                setNavIsOpen(true);
              }}
            />
          </div>
          <div className="mtlBtn-r col p-0">
            <div className="d-flex choose ch-title-16">
              {chooseItems.map((v, i) => {
                return (
                  <div
                    key={i}
                    className="mtlCate col-12"
                    onClick={() => {
                      setChangeChoose(v);
                    }}
                  >
                    <Rectangle
                      className={
                        changeChoose === v
                          ? 'rectangle'
                          : 'rectangle-displaynone'
                      }
                    />
                    <div className={changeChoose === v ? '' : 'mtl-cate-blur'}>
                      {v}
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={
                changeChoose === '選擇食材'
                  ? 'mtlBtnIn-R pt-3 px-2'
                  : 'dis-choosed'
              }
            >
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="list">
                  {provided =>
                    Object.keys(props.addMtlData).length === 0 ? (
                      ''
                    ) : (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {props.addMtlData.map((el, i) => {
                          const takeMtlId =
                            Object.keys(props.mtlData).length === 0
                              ? ''
                              : props.mtlData.find(
                                  p => p.mtl_id === props.addMtlData[i].mtlId
                                );

                          return (
                            <MtlRBtn
                              key={i + Date.now()}
                              mtl_id={takeMtlId.mtl_id}
                              mtl_name={takeMtlId.mtl_name}
                              mtl_cate={takeMtlId.mtl_cate}
                              mtl_img_path={takeMtlId.mtl_img_path}
                              removeMtl={addMtlData}
                              setRemoveMtl={setAddMtlData}
                              el={el}
                              i={i}
                              altTotal={altTotal}
                              setAltTotal={setAltTotal}
                              indexTotal={indexTotal}
                              setIndexTotal={setIndexTotal}
                              sushiGroup={sushiGroup}
                              setSushiGroup={setSushiGroup}
                            />
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    )
                  }
                </Droppable>
              </DragDropContext>
            </div>
            <div
              className={
                changeChoose === '營養分析'
                  ? 'mtlBtnIn-R pt-3 px-2'
                  : 'dis-choosed'
              }
            >
              <div className="nutrition-box pt-3 px-2">
                <div className="nutrition-img-box-mobile">
                  <ChartForCm mtls={arrayForChart} />
                </div>
              </div>
            </div>
          </div>
          <div className="btn">
            <button
              className="btn-sm btn-outline-primary primeal-btn-outline m-2"
              onClick={() => {
                handleSaveShow();
                postCusData();
              }}
            >
              儲存編輯
            </button>
            <button
              className="btn-sm btn-primary primeal-btn m-2"
              onClick={() => {
                handleNextShow();
              }}
            >
              下一步
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MtlRight;
