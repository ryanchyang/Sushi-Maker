import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import styles from './Share.module.scss';

import { ReactComponent as Delete } from '../../imgs/delete-lg.svg';
import { ReactComponent as DeleteSm } from '../../imgs/del.svg';

import { ReactComponent as Heart } from '../../imgs/heart.svg';
import { ReactComponent as Info } from '../../imgs/information.svg';
import { ReactComponent as Message } from '../../imgs/message.svg';

import ShareItemImgs from './components/ShareItemImgs';
import ItemDetailsInfo from './components/ItemDetailsInfo';
import ItemDetailsComments from './components/ItemDetailsComments';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import config from '../../Config';

function ShareItems() {
  const [msgbtn, setMsgbtn] = useState(false);
  const [infobtn, setInfobtn] = useState(false);
  const [msgdiv, setMsgdiv] = useState(false);
  const [infodiv, setInfodiv] = useState(false);

  const [itemDetails, setItemDetails] = useState([]);

  const {
    mem_nickname: postMemName,
    mem_photo_img_path: postMemImg,
    share_title: shareTitle,
    share_desc: shareDesc,
    saves_count: savesCount,
    orders_value: orderVal,
    orders_print_time: orderPrint,
    share_imgs: itemImgs = [],
    share_comments: shareComments = [],
    share_tags: shareTags = [],
  } = itemDetails;

  const { id } = useParams();

  const getItemDetails = async () => {
    const response = await fetch(config.GET_PROD_DETAILS + `${id}`, {
      method: 'GET',
    });
    const itemsArr = await response.json();
    return itemsArr;
  };

  // Fetching data
  useEffect(() => {
    (async () => {
      const result = await getItemDetails();

      setItemDetails(result.data[0]);
    })();
  }, []);

  const btnMoveTemplate = () => {
    return msgbtn || infobtn
      ? {
          transform: 'translateX(80px)',
          transition: 'transform 0.3s, opacity 0.2s',
          opacity: 0,
        }
      : {
          transform: 'translateX(0px)',
          transition: 'transform 0.3s, opacity 0.2s',
          opacity: 1,
        };
  };

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
                    <Delete className="mx-md-4 p-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`mycontainer ${styles['mb-30']} ${styles['items-box']} d-flex`}
          >
            <div
              className={`${styles['img-section']} col d-flex align-items-center flex-column`}
            >
              <Message
                className={`${styles['message-button']} `}
                style={btnMoveTemplate()}
                onClick={() => {
                  setMsgbtn(true);
                }}
                onTransitionEnd={() => {
                  msgbtn && setMsgdiv(true);
                }}
              />
              <Info
                className={`${styles['info-button']}`}
                style={btnMoveTemplate()}
                onClick={() => {
                  setInfobtn(true);
                }}
                onTransitionEnd={() => {
                  infobtn && setInfodiv(true);
                }}
              />
              <div className={`d-flex ${styles['img-info']}`}>
                <div className={`${styles['profile-img']} mb-3 mr-md-3 mr-2`}>
                  <img src={config.MEM_PHOTO + `/${postMemImg}`} alt="" />
                </div>
                <div
                  className={`${styles['img-title-box']} d-flex flex-column flex-grow-1 justify-content-around mb-3  mr-3`}
                >
                  <h2 className={`${styles['img-title']} pt-2`}>
                    {shareTitle}
                  </h2>
                  <h3 className="en-cont-14">{postMemName}</h3>
                </div>
                <button
                  className={`${styles['save-button']} mb-3 d-flex align-items-center justify-content-center btn btn-primary`}
                >
                  <Heart style={{ padding: '10px' }} />
                  <div className="en-cont-16 text-white d-none d-lg-block">
                    {savesCount}
                  </div>
                </button>
              </div>
              <ShareItemImgs itemImgs={itemImgs} />
              <div
                className={`${styles['img-desc']} d-flex ch-cont-16 justify-content-center`}
              >
                {shareDesc}
              </div>
            </div>
            <div className={`${styles['popup-section']} d-flex`}>
              <div
                className={`${styles['detail-section']}  d-flex flex-column`}
                style={!infodiv ? {} : { width: '560px', padding: '0 15px' }}
                onTransitionEnd={() => {
                  !infodiv && setInfobtn(false);
                }}
              >
                <ItemDetailsInfo
                  orderVal={orderVal}
                  orderPrint={orderPrint}
                  shareTags={shareTags}
                  setInfodiv={setInfodiv}
                />
              </div>
              <div
                className={`${styles['message-section']}  d-flex flex-column`}
                style={!msgdiv ? {} : { width: '560px', padding: '0 15px' }}
                onTransitionEnd={() => {
                  !msgdiv && setMsgbtn(false);
                }}
              >
                <ItemDetailsComments
                  setMsgdiv={setMsgdiv}
                  shareComments={shareComments}
                  postMemImg={postMemImg}
                />
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

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//     title: 'Bed',
//     desc: 'The Mastering the Mechanics webinar series also describes required sentence elements and varying sentence types. Please see these archived webinars for more information.',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//     title: 'Books',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//     title: 'Sink',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//     title: 'Kitchen',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//     title: 'Blinds',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//     title: 'Chairs',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//     title: 'Laptop',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//     title: 'Doors',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//     title: 'Storage',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//     title: 'Candle',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     title: 'Coffee table',
//   },
// ];
export default ShareItems;
