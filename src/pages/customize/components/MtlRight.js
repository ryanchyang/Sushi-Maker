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

  const chooseItems = ['Layer', 'Nutrition'];
  const [changeChoose, setChangeChoose] = useState('Layer');
  const {
    addMtlData,
    setAddMtlData,
    downloadImage,
    altTotal,
    setAltTotal,
    indexTotal,
    setIndexTotal,
    sushiGroup,
    setSushiGroup,
    openRArea,
    setOpenRArea,
  } = props;

  useEffect(() => {
    const mtls = addMtlData?.map(m => m.mtlId);
    setArrayForChart(mtls);
    // console.log(mtls);
  }, [addMtlData]);

  // 老師修改整理的版本，把加減高度的變數重新整理過
  // 改變順序
  const changeOrderHandler = (drag, drop) => {
    // 分成四層 最後 群體 單一層 最前  邏輯為群體跟單一層的位置互換，最後與最前不變動
    let originalArr = [...sushiGroup]; // 複製原始陣列
    let boxGroupArr; // 群體
    let lastArr; // 最後
    lastArr =
      drag > drop
        ? [...originalArr].slice(drag + 1)
        : [...originalArr].slice(drop + 1);
    /////////////////////////////////////////////////////

    // 如果是在中間互換
    if (lastArr.length) {
      const boxSlicePositionOffset = drag > drop ? 0 : 1; // 把slice的數字是否 +1 設成變數
      const dragWithOffset = drag + boxSlicePositionOffset;
      const dropWithOffset = drop + boxSlicePositionOffset;
      boxGroupArr = [...originalArr].slice(
        Math.min(dragWithOffset, dropWithOffset),
        Math.max(dragWithOffset, dropWithOffset)
      );

      // if drag = 4, drop = 1 ? boxGroupArr = slice (1,4)
      // if drag = 1, drop = 4 ? boxGroupArr = slice (2,5)

      const singBoxObj = originalArr[drag]; // 單一層

      //  群體高度
      const boxGroupHeight = boxGroupArr.reduce(
        (total, v) => total + v.height,
        0
      );

      const altDirection = drag > drop ? 1 : -1; // 判斷drag 和drop 大小決定要扣除還是增加群體高度

      // 單一層的alt 新增或減少群體高度
      singBoxObj.alt = singBoxObj.alt - boxGroupHeight * altDirection;
      // 群體的alt 新增或減少單層高度
      const midGroup = boxGroupArr.map(box => {
        return { ...box, alt: box.alt + singBoxObj.height * altDirection };
      });
      // 重組順序
      const finalArr =
        drag > drop
          ? [...originalArr.slice(0, drop), singBoxObj, ...midGroup, ...lastArr]
          : [
              ...originalArr.slice(0, drag),
              ...midGroup,
              singBoxObj,
              ...lastArr,
            ];
      setSushiGroup(finalArr);
    }

    // 如果有換到最上層或最下層
    // 分成三層  群體 單一層 最前
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

  // 使用drag 跟 drop 的index 去改變陣列順序
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

    // 3D 陣列的index 跟 dnd 的index 順序顛倒
    changeOrderHandler(
      addMtlData.length - result.source.index - 1, // drag index
      addMtlData.length - result.destination.index - 1 // drop index
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
          <div className="menuMtl"></div>
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
                changeChoose === 'Layer'
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
                changeChoose === 'Nutrition'
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
          <div className="d-flex justify-content-center">
            <button
              className="btn-sm btn-primary primeal-btn m-2"
              onClick={() => {
                // handleSaveShow();
                downloadImage();
              }}
            >
              Download Image
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MtlRight;
