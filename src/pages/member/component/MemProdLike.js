import { useState, useEffect, useRef } from 'react';
import { memCprodLike } from '../../../WebApi';
import { Link } from 'react-router-dom';
import '../index.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

const mem_id = localStorage.getItem('mem_id');

const MemProdLike = () => {
  const [memLike, setMemLike] = useState();

  useEffect(() => {
    memCprodLike(mem_id).then(obj => {
      console.log(obj);
      setMemLike(obj);
    });
  }, []);

  if (memLike) {
    return (
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={false}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper swiper"
      >
        {memLike.map(v => {
          return (
            <>
              <SwiperSlide class="active-wrap swiper-slide ">
                <Link
                  to={'/classic/detail/' + v.pid}
                  style={{
                    textDecoration: 'none',
                    color: '#212121',
                  }}
                >
                  <div className="activeImg mb-5">
                    <img
                      src={
                        memLike.length !== 0
                          ? 'http://localhost:3500/' + v.c_prod_img_path
                          : ''
                      }
                      alt="cube"
                      style={{ width: '100px' }}
                    />
                  </div>
                </Link>
                <div className="mt-2 pl-5">
                  <p className="ch-cont-18 ">
                    {memLike.length !== 0 ? v.c_prod_ch_name : ''}
                  </p>
                </div>
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
