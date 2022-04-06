import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import styles from './Share.module.scss';

import { ReactComponent as Delete } from '../../imgs/delete-lg.svg';
import { ReactComponent as HeartOutline } from '../../imgs/heart-outline.svg';
import { ReactComponent as HeartFillWhite } from '../../imgs/heart-fill-white.svg';
import { ReactComponent as Info } from '../../imgs/information.svg';
import { ReactComponent as Message } from '../../imgs/message.svg';
import { ReactComponent as Edit } from '../../imgs/edit.svg';

import NavPage from '../layout/components/NavPage';
import ShareItemImgs from './components/ShareItemImgs';
import ItemDetailsInfo from './components/ItemDetailsInfo';
import ItemDetailsComments from './components/ItemDetailsComments';
import Masonry from './components/Masonry';
import useCurrentWidth from './hooks/useCurrentWidth';
import getCurrentColumns from './helpers/getCurrentColumns';

import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation, Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

import config from '../../Config';

function ShareItems(props) {
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

  // 加入購物車光箱
  const [show, setShow] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  //加入NAVBar漢堡選單開關
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const { navIsOpen, setNavIsOpen } = props; // 解構NAVBAR

  //Get member id
  const memId = localStorage.getItem('mem_id');

  const {
    mem_id: memberId,
    mem_nickname: postMemName,
    mem_photo_img_path: postMemImg,
    share_title: shareTitle,
    share_desc: shareDesc,
    saves_count: savesCount,
    share_order_id: orderId,
    orders_value: orderVal,
    orders_print_time: orderPrint,
    share_imgs: itemImgs = [],
    share_comments: shareComments = [],
    share_tags: shareTags = [],
    isSaved,
  } = itemDetails;

  const { id } = useParams(null);
  let history = useHistory(null);
  const location = useLocation(null);

  const { action = 'VIEW', commentSid = '' } = location.state || {};

  const getItemDetails = async () => {
    const response = await fetch(config.GET_PROD_DETAILS + `${id}/${memId}`, {
      method: 'GET',
    });
    const itemsArr = await response.json();
    return itemsArr;
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleHeartHandler = () => {
    if (isSaved) {
      return (
        <div
          className={`${styles['heart-beat-on']}`}
          onClick={() => {
            toggleSaveItem(id, 'REMOVE');
            setItemDetails({
              ...itemDetails,
              isSaved: false,
              saves_count: savesCount - 1,
            });
          }}
        >
          <HeartFillWhite style={{ padding: '0 12px' }} />
        </div>
      );
    } else {
      return (
        <div
          onClick={() => {
            toggleSaveItem(id, 'ADD');
            setItemDetails({
              ...itemDetails,
              isSaved: true,
              saves_count: savesCount + 1,
            });
          }}
        >
          <HeartOutline style={{ padding: '0 12px' }} />
        </div>
      );
    }
  };

  const toggleSaveItem = async (itemId, action) => {
    try {
      let method;
      if (action === 'ADD') {
        method = 'POST';
      }
      if (action === 'REMOVE') {
        method = 'DELETE';
      }

      const response = await fetch(config.TOGGLE_SAVE, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId: itemId, memberId: memId }),
      });
      if (!response.ok) throw new Error('Something went wrong!');
    } catch (err) {
      console.error(err.message);
    }
  };

  const editHandler = () => {
    return +memberId === +memId ? (
      <div
        className={`${styles['button-default-lg']} d-flex align-items-center mr-3`}
        onClick={() =>
          history.push({
            pathname: '/share/edit',
            state: {
              shareId: id,
              action: 'UPDATE',
              orderId,
              shareTitle,
              shareDesc,
              itemImgs,
              shareTags,
            },
          })
        }
      >
        <Edit className={`mx-3`} />
      </div>
    ) : (
      ''
    );
  };

  const getShareItems = async () => {
    const response = await fetch(config.GET_SHARE_PRODS, {
      method: 'GET',
    });
    const itemsObj = await response.json();
    return itemsObj;
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
          search: '',
        }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const itemsObj = await response.json();

      if (itemsObj.data.length === 1) {
        const result = await getShareItems();
        return result;
      }

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

    if (action === 'COMMENT') setMsgbtn(true);
  }, []);

  // Fetching filterItem data
  useEffect(() => {
    (async () => {
      const result = await getFilterData();
      setFilterItemsData(result.data);
    })();
  }, [itemDetails]);

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

  const modal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="en-cont-30 m-3">提醒</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ margin: '0 3%' }}>
        <div className="en-cont-14 pb-2">
          {isSubmit ? '留言已更改成功' : '您確定要放棄修改?'}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
          onClick={() =>
            history.push({
              pathname: '/share/post',
              action: 'COMMENT',
            })
          }
        >
          {isSubmit ? 'Close' : '確定'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
  return (
    <>
      {modal}
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={'Share'} setNavIsOpen={setNavIsOpen} />
            <div className={`mycontainer ${styles['share-bread']}`}>
              <div className="row">
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <div className="pt-3 pt-md-0">
                      <p className="en-title-14-10 d-flex">
                        <Link
                          to={'/'}
                          style={{ textDecoration: 'none', color: '#575757' }}
                        >
                          HOME/&nbsp;
                        </Link>
                        <Link
                          to={'/share'}
                          style={{ textDecoration: 'none', color: '#575757' }}
                        >
                          SHARE/&nbsp;
                        </Link>
                        <Link
                          to={`/share/items/${id}`}
                          style={{ textDecoration: 'none', color: '#b03342' }}
                        >
                          ITEM
                        </Link>
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      {editHandler()}
                      <Delete
                        className={`${styles['large-del']} mx-md-4 p-2`}
                        onClick={() => history.push('/share')}
                      />
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
                    <div
                      className={`${styles['profile-img']} mb-3 mr-md-3 mr-2`}
                    >
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
                      {toggleHeartHandler()}
                      {/* <Heart style={{ padding: '10px' }} /> */}
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
                    style={
                      !infodiv ? {} : { width: '560px', padding: '0 15px' }
                    }
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
                      itemId={id}
                      action={action}
                      commentSid={commentSid}
                      handleShow={handleShow}
                      setIsSubmit={setIsSubmit}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center en-title-24 my-5">
                You may also like
              </div>
              <div className={`${styles['waterfall-container']}`}>
                <Masonry
                  columns={columns}
                  gap={gap}
                  data={filterItemsData}
                  itemId={id}
                />
              </div>
            </div>
            <Footer />
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
    </>
  );
}

export default ShareItems;
