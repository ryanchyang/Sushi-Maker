import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import styles from './Share.module.scss';
import { ReactComponent as ArrowRight } from '../../imgs/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../imgs/arrow-left.svg';
import { ReactComponent as Delete } from '../../imgs/delete-lg.svg';
import { ReactComponent as DeleteSm } from '../../imgs/del.svg';
import { ReactComponent as Shin } from './imgs/shin.svg';
import { ReactComponent as Commenter } from './imgs/user.svg';
import { ReactComponent as Heart } from '../../imgs/heart.svg';
import { ReactComponent as Info } from '../../imgs/information.svg';
import { ReactComponent as Message } from '../../imgs/message.svg';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import React, { useState } from 'react';
import { display } from '@mui/system';

function ShareItems() {
  const [msgdiv, setMsgdiv] = useState(false);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Share'} />
          <div className={`mycontainer`}>
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-between">
                  <p className="mytitle en-title-14-10">HOME / SHARE / ITEMS</p>
                  <div className="d-flex align-items-center">
                    <Delete className="mx-4 p-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`mycontainer ${styles['mb-30']} d-flex`}>
            <div
              className={`${styles['img-section']} col d-flex align-items-center flex-column`}
            >
              <Message
                className={`${styles['message-button']}`}
                style={msgdiv ? { display: 'none' } : { display: 'block' }}
                onClick={() => {
                  setMsgdiv(true);
                }}
              />
              <Info
                className={`${styles['info-button']}`}
                style={msgdiv ? { display: 'none' } : { display: 'block' }}
              />
              <div className={`d-flex ${styles['img-info']}`}>
                <div className={`${styles['profile-img']} mb-3 mr-3`}>
                  <Shin />
                </div>
                <div className="d-flex flex-column flex-grow-1 justify-content-around mb-3  mr-3">
                  <h2 className="mytitle ch-title-22 ">
                    印出來的壽司 good job!!
                  </h2>
                  <h3 className="en-cont-14">Shin</h3>
                </div>
                <button
                  className={`${styles['save-button']} mb-3 d-flex align-items-center justify-content-center btn btn-primary`}
                >
                  <Heart style={{ padding: '10px' }} />
                  <div className="en-cont-16 text-white">15</div>
                </button>
              </div>
              <div
                className={`${styles['img-info']} d-flex justify-content-center`}
              >
                <div className={`${styles['img-container']} mb-5`}>
                  <img src="\img\home\mealplan-bento.png" alt="bed"></img>
                </div>
                <ArrowLeft className={`${styles['img-arrow-left']}`} />
                <ArrowRight className={`${styles['img-arrow-right']}`} />
              </div>
              <div
                className={`${styles['img-carousel']} d-flex justify-content-center ${styles['mb-80']}`}
              >
                <div className={`${styles['small-img-container']}`}>
                  <img src="\img\home\mealplan-bento.png" alt="bed"></img>
                </div>
                <div className={`${styles['small-img-container']}`}>
                  <img src={itemData[1].img} alt="bed"></img>
                </div>
                <div className={`${styles['small-img-container']}`}>
                  <img src={itemData[4].img} alt="bed"></img>
                </div>
              </div>
              <div className={`${styles['img-desc']} d-flex ch-cont-16`}>
                這個壽司超炫!!如果下次朋友有揪我一定二話不說再買R!!!這個壽司超炫!!如果下次朋友有揪我一定二話不說再買R!!!
                愛因斯坦講過一句值得人反覆尋思的話，提出一個問題往往比解決一個更重要。
              </div>
            </div>

            <div
              className={`${styles['message-section']}  d-flex flex-column`}
              style={
                !msgdiv
                  ? { width: '0px' }
                  : { width: '560px', padding: '0 15px' }
              }
            >
              <div
                style={{
                  marginLeft: '180px',
                  marginRight: '30px',
                  marginTop: '70px',
                }}
                className={`d-flex flex-column`}
              >
                <div
                  className={`d-flex mb-3 border-bottom ${styles['comment-header']}`}
                >
                  <DeleteSm
                    className={`${styles['del-button']}`}
                    onClick={() => {
                      setMsgdiv(false);
                    }}
                  />
                  <h2 className="mytitle ch-title-18 mr-4 ">評論</h2>
                  <h3 className="mytitle ch-title-18">{'3'}</h3>
                </div>
                <div className={`${styles['comment-section']} mb-4`}>
                  <div className="d-flex mt-5 mb-3">
                    <div className={`${styles['profile-img-sm']} mb-2 mr-3 `}>
                      <Commenter />
                    </div>
                    <div className="d-flex flex-column ">
                      <h2 className="en-cont-14 mb-3 font-weight-bold">
                        Shinder Lin
                      </h2>
                      <p className="ch-cont-14">非常好吃的壽司</p>
                      <p className="en-cont-12">36 mins ago</p>
                    </div>
                  </div>
                  <div className="d-flex mt-5 mb-3">
                    <div className={`${styles['profile-img-sm']} mb-2 mr-3 `}>
                      <Commenter />
                    </div>
                    <div className="d-flex flex-column ">
                      <h2 className="en-cont-14 mb-3 font-weight-bold">
                        Miles Teng
                      </h2>
                      <p className="ch-cont-14">拍得很好看</p>
                      <p className="en-cont-12">1 hour ago</p>
                    </div>
                  </div>
                  <div className="d-flex mt-5 mb-3">
                    <div className={`${styles['profile-img-sm']} mb-2 mr-3 `}>
                      <Commenter />
                    </div>
                    <div className="d-flex flex-column ">
                      <h2 className="en-cont-14 mb-3 font-weight-bold">
                        Joe Shih
                      </h2>
                      <p className="ch-cont-14">Looks amazing✨</p>
                      <p className="en-cont-12">1 hour ago</p>
                    </div>
                  </div>
                  <div className="d-flex mt-5 mb-3">
                    <div className={`${styles['profile-img-sm']} mb-2 mr-3 `}>
                      <Commenter />
                    </div>
                    <div className="d-flex flex-column ">
                      <h2 className="en-cont-14 mb-3 font-weight-bold">
                        Joe Shih
                      </h2>
                      <p className="ch-cont-14">Looks amazing✨</p>
                      <p className="en-cont-12">1 hour ago</p>
                    </div>
                  </div>
                  <div className="d-flex mt-5 mb-3">
                    <div className={`${styles['profile-img-sm']} mb-2 mr-3 `}>
                      <Commenter />
                    </div>
                    <div className="d-flex flex-column ">
                      <h2 className="en-cont-14 mb-3 font-weight-bold">
                        Joe Shih
                      </h2>
                      <p className="ch-cont-14">Looks amazing✨</p>
                      <p className="en-cont-12">1 hour ago</p>
                    </div>
                  </div>
                  <div className="d-flex mt-5 mb-3">
                    <div className={`${styles['profile-img-sm']} mb-2 mr-3 `}>
                      <Commenter />
                    </div>
                    <div className="d-flex flex-column ">
                      <h2 className="en-cont-14 mb-3 font-weight-bold">
                        Joe Shih
                      </h2>
                      <p className="ch-cont-14">Looks amazing✨</p>
                      <p className="en-cont-12">1 hour ago</p>
                    </div>
                  </div>
                  <div className="d-flex mt-5 mb-3">
                    <div className={`${styles['profile-img-sm']} mb-2 mr-3 `}>
                      <Commenter />
                    </div>
                    <div className="d-flex flex-column ">
                      <h2 className="en-cont-14 mb-3 font-weight-bold">
                        Joe Shih
                      </h2>
                      <p className="ch-cont-14">Looks amazing✨</p>
                      <p className="en-cont-12">1 hour ago</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles['my-comment']} d-flex mr-3`}>
                  <div className="d-flex flex-column w-100">
                    <div className="d-flex mb-3">
                      <div className={`${styles['profile-img-sm']} mr-3 `}>
                        <Commenter />
                      </div>
                      <TextareaAutosize
                        maxRows={1}
                        className={`${styles['comment-textarea']} ch-cont-14 w-100`}
                        placeholder=" 我的想法..."
                      />
                    </div>
                    <div className="d-flex">
                      <button
                        className={`${styles['save-button-sm-border']} ch-title-14 mr-3 mb-3 ml-auto btn-sm btn-outline-primary`}
                      >
                        取消
                      </button>
                      <button
                        className={`${styles['save-button-sm']} ch-title-14 mb-3 btn-sm btn-primary`}
                      >
                        發佈
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
    desc: 'The Mastering the Mechanics webinar series also describes required sentence elements and varying sentence types. Please see these archived webinars for more information.',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];
export default ShareItems;
