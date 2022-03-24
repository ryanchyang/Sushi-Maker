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
import Masonry from './components/Masonry';
import useCurrentWidth from './hooks/useCurrentWidth';
import getCurrentColumns from './helpers/getCurrentColumns';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import config from '../../Config';

function ShareItems() {
  const [msgbtn, setMsgbtn] = useState(false);
  const [infobtn, setInfobtn] = useState(false);
  const [msgdiv, setMsgdiv] = useState(false);
  const [infodiv, setInfodiv] = useState(false);

  const [itemDetails, setItemDetails] = useState([]);

  //data
  const [filterItemsData, setFilterItemsData] = useState([]);

  //window handler
  const currentWidth = useCurrentWidth();

  //masonry
  const [columns, setColumns] = useState(getCurrentColumns(currentWidth));
  const [gap, setGap] = useState(4);

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

  const getFilterData = async () => {
    try {
      const response = await fetch(config.GET_FILTER_ITEMS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          minPrice: '',
          maxPrice: '',
          tags: shareTags.map(tag => tag.item_hash) ?? [],
          minTime: '',
          maxTime: '',
        }),
      });
      if (!response.ok) throw new Error('No items match your search!');

      const itemsObj = await response.json();

      return itemsObj;
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateDimensions = () => {
    setColumns(getCurrentColumns(currentWidth));
    setGap(getCurrentColumns(currentWidth));
  };

  // Fetching data
  useEffect(() => {
    (async () => {
      const result = await getItemDetails();

      setItemDetails(result.data[0]);
    })();
  }, []);

  // Fetching filterItem data
  useEffect(() => {
    (async () => {
      const result = await getFilterData();
      setFilterItemsData(result.data);
    })();
  }, [shareTags]);

  // Update column with current Width
  useEffect(() => {
    updateDimensions();
  }, [currentWidth]);

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
          <div className="d-flex flex-column">
            <div
              className={`mycontainer ${styles['mb-30']} ${styles['items-box']} d-flex mb-5`}
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
            <div className="d-flex justify-content-center en-title-24 my-5">
              You may also like
            </div>
            <div className={`${styles['waterfall-container']}`}>
              <Masonry columns={columns} gap={gap} data={filterItemsData} />
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

export default ShareItems;
