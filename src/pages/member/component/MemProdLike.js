import { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
import '../index.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper';

const MemProdLike = props => {
  const { memLike } = props;

  if (memLike) {
    return (
      <Swiper
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          1: {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
          },
          577: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 3,
          },
        }}
        className="mySwiper swiper"
      >
        {memLike.map(v => {
          return (
            <>
              <SwiperSlide class="active-wrap swiper-slide">
                <Link
                  to={'/classic/detail/' + v.pid}
                  style={{
                    textDecoration: 'none',
                    color: '#212121',
                  }}
                >
                  <div class="memClassic">
                    <div className="activeImg mb-5">
                      <img
                        src={
                          memLike.length !== 0
                            ? 'http://localhost:3500/' + v.c_prod_img_path
                            : ''
                        }
                        alt="cube"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>

                    <div className=" pl-5">
                      <p className="ch-cont-18 ">
                        {memLike.length !== 0 ? v.c_prod_ch_name : ''}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    );
  } else {
    return <div className="ActiveDetail col-md-8"></div>;
  }
};

export default MemProdLike;
