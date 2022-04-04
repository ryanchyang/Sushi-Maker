import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import "./styles.css";
// import required modules
import { FreeMode, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

function Carousel(props) {
  const { memShare, setMemShare } = props;
  return (
    <>
      <div className="divCarou">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="carouContainer mySwiper swiper"
        >
          {memShare &&
            memShare.map((v, i) => {
              return (
                <SwiperSlide className="carouImg mx-3" key={i}>
                  <Link to={'/share/items/' + v.share_item_id}>
                    <img
                      className="Cimg"
                      src={'http://localhost:3500/' + '/' + v.share_imgPath}
                      alt=""
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>

      <button className="btn btn-primary primeal-btn-sm share-btn shareLink">
        <Link
          to="/share/saves"
          style={{
            textDecoration: 'none',
            color: '#f7f6f3',
          }}
        >
          全部收藏
        </Link>
      </button>
    </>
  );
}

export default Carousel;
