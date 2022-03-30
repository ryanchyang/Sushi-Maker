import React, { useState, useEffect, useRef } from 'react';
import Hammer from 'hammerjs';


const Carousel = ({ selectedIndex = 1 }) => {
  const [status, setStatus] = useState(1);
  const [active, setActive] = useState(selectedIndex);
  const container = useRef(null);
  const SCREEN_WIDTH = window.screen.width;
  const children = [
    '/img/member/shareImg.png',
    '/img/member/shareImg.png',
    '/img/member/shareImg.png',
    '/img/member/shareImg.png',
  ];

  const setTransition = (offset = 0) => {
    function transitionend() {
      // 動畫結束後就關閉動畫
      container.current.style.transitionProperty = 'none';
      // 恢復狀態為1靜止
      setStatus(1);
      // 當前位置在補位的位置時馬上切換到本該在的位置
      if (active === 0) {
        // 使用setTimeout包裹，避免transitionProperty動畫未關閉就切換的閃頻
        setTimeout(() => {
          setActive(children.length);
        }, 0);
      }
      if (active === children.length + 1) {
        setTimeout(() => {
          setActive(1);
        }, 0);
      }
    }
    container.current.removeEventListener(
      'transitionend',
      transitionend,
      false
    );
    // 計算需要移動的距離並進行修改，這是切換的核心
    const distance = (1 - active) * SCREEN_WIDTH;
    container.current.addEventListener('transitionend', transitionend, false);
    container.current.style.transform = `translate3d(${distance+offset}px,0,0)`;
  };

  const handleChangeActive = number => {
    // 當在動畫進行時，不允許切換
    if (status === 2) return;
    // 切換前先把動畫參數打開
    container.current.style.transitionProperty = 'all';
    // 修改狀態為進行時
    setStatus(2);
    // 改變當前位置
    setActive(number);
  };

  useEffect(() => {
    // setTransition();
    const manager = new Hammer(container.current);
    manager.add(new Hammer.Pan());
    manager.on('panend panmove', function (e) {
    // 狀態在進行中時，不允許切換
    // if (status === 2) return;
    // e.eventType 判斷當前狀態
    // INPUT_MOVE 移動中
    // INPUT_END 結束
      if (e.eventType === Hammer.INPUT_MOVE) {
        // 之前的offset參數的在此起到了作用，在手動滑動的時候並不是直接滑動到下一頁，只是跟隨手指進行偏移量改變
        setTransition(e.deltaX);
      } else if (e.eventType === Hammer.INPUT_END) {
        // e.direction 判斷移動方向
        // Hammer.DIRECTION_LEFT 向左
        // Hammer.DIRECTION_RIGHT 向右
        // 當滑動距離大於1/3時，直接滑動到下一頁，否則恢復偏移量
        if (
          e.direction === Hammer.DIRECTION_LEFT &&
          Math.abs(e.deltaX) > SCREEN_WIDTH / 3
        ) {
          handleNext();
        } else if (
          e.direction === Hammer.DIRECTION_RIGHT &&
          Math.abs(e.deltaX) > SCREEN_WIDTH / 3
        ) {
          handlePrev();
        } else {
          setTransition(0);
        }
      }
      return () => {
        manager.off('panmove');
        manager.off('panend');
      };
    });
  }, [active, status]);

  // 為了演示是否成功，添加兩個按鈕來切換
  // 上一頁
  const handlePrev = () => {
    // 對臨界值進行處理
    handleChangeActive(active - 0.25);
    // setActive(active - 0.25);
  };
  // 下一頁
  const handleNext = () => {
    // 對臨界值進行處理
    handleChangeActive(active + 0.25);
    // setActive(active + 0.25);
  }; //左

  return (
    <>
      <div className="divCarou">
        <ul ref={container} className="carouContainer">
          {children.map((v,i) => {
            return (
              <li className="carouImg mx-3">
                <img className="Cimg" src={v} alt="" />
              </li>
            );
          })}
          {/* <li className="carouImg mx-3">
            <img className="Cimg" src="/img/member/shareImg.png" alt="" />
          </li>
          <li className="carouImg mx-3">
            <img src="/img/member/shareImg.png" className="Cimg" alt="" />
          </li>
          <li className="carouImg mx-3">
            <img src="/img/member/shareImg.png" className="Cimg" alt="" />
          </li>
          <li className="carouImg mx-3">
            <img src="/img/member/shareImg.png" className="Cimg" alt="" />
          </li> */}
        </ul>
        {/* <div>
          <button className="buttonLeft " onClick={handleNext}>
            left
          </button>
          <button className="buttonRight " onClick={handlePrev}>
            right
          </button>
        </div> */}
      </div>
      <button className="btn btn-primary primeal-btn-sm share-btn shareLink">
        全部收藏
      </button>
    </>
  );
};

export default Carousel;
