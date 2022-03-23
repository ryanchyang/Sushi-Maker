import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ children, selectedIndex = 1 }) => {
  const [active, setActive] = useState(selectedIndex);
  const container = useRef(null);
  const SCREEN_WIDTH = window.screen.width;

  useEffect(() => {
    setTransition();
  }, [active]);
  const setTransition = () => {
    const distance = (1 - active) * SCREEN_WIDTH;
    container.current.style.transform = `translate3d(${distance}px,0,0)`;
  };

  // 為了演示是否成功，添加兩個按鈕來切換
  // 上一頁
  const handlePrev = () => {
    // 對臨界值進行處理
    setActive(active - 0.1);
  };
  // 下一頁
  const handleNext = () => {
    // 對臨界值進行處理
    setActive(active + 0.1);
  };

  return (
    <>
      <div className="divCarou">
        <div ref={container} className="carouContainer">
          <div className="carouImg mx-3">
            <img className="Cimg" src="/img/member/shareImg.png" alt="" />
          </div>
          <div className="carouImg mx-3">
            <img src="/img/member/shareImg.png" className="Cimg" alt="" />
          </div>
          <div className="carouImg mx-3">
            <img src="/img/member/shareImg.png" className="Cimg" alt="" />
          </div>
          <div className="carouImg mx-3">
            <img src="/img/member/shareImg.png" className="Cimg" alt="" />
          </div>
        </div>
        <div>
          <button className="buttonLeft" onClick={handleNext}>
            Left
          </button>
          <button className="buttonRight" onClick={handlePrev}>
            Right
          </button>
        </div>
      </div>
      <button className="btn btn-primary primeal-btn-sm share-btn">
        觀看全部收藏
      </button>
    </>
  );
};

export default Carousel;
