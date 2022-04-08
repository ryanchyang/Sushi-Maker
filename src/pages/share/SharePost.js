import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

import NavPage from '../layout/components/NavPage';
import Masonry from './components/Masonry';
import ShareProfile from './components/ShareProfile';
import ShareComment from './components/ShareComment';

import { ReactComponent as Rect } from '../../imgs/tags/Rectangle_orange.svg';
import styles from './Share.module.scss';
import config from '../../Config';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Button, Modal } from 'react-bootstrap';

function SharePost(props) {
  const [subTopic, setSubTopic] = useState('shared');
  const [postItemsData, setPostItemsData] = useState([]);
  const [commentsData, setCommentsData] = useState([]);
  const [deleteComment, setDeleteComment] = useState('');

  const location = useLocation(null);
  const { action = 'shared' } = location.state || {};

  // 加入購物車光箱
  const [show, setShow] = useState(false);

  //加入NAVBar漢堡選單開關
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const { navIsOpen, setNavIsOpen } = props; // 解構NAVBAR

  //Get member id
  const memId = localStorage.getItem('mem_id');

  const getUserSharePost = async () => {
    const response = await fetch(config.GET_USER_SHARE_POST + `${memId}`, {
      method: 'GET',
    });
    const itemsArr = await response.json();
    return itemsArr;
  };

  const getUserShareComment = async () => {
    const response = await fetch(config.GET_USER_SHARE_COMMENT + `${memId}`, {
      method: 'GET',
    });
    const itemsArr = await response.json();
    return itemsArr;
  };

  // fetch(config.DELETE_CART_PROD, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     memId: mid,
  //     cartid: cartid,
  //     pid: prodid,
  //     category: category,
  //   }),
  // })

  const deleteShareComment = async () => {
    await fetch(config.DELETE_COMMENT, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sid: deleteComment }),
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = commentSid => setShow(true);

  const modal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="en-cont-30 m-3">提醒</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ margin: '0 3%' }}>
        <div className="en-cont-14 pb-2">您確定要刪除該則留言?</div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
          onClick={async () => {
            handleClose();
            await deleteShareComment();
            setCommentsData(
              commentsData.filter(comment => comment.sid !== deleteComment)
            );
            setDeleteComment('');
          }}
        >
          確定
        </Button>
      </Modal.Footer>
    </Modal>
  );

  // Fetching data
  useEffect(() => {
    (async () => {
      const resultPost = await getUserSharePost();
      const resultComment = await getUserShareComment();

      setPostItemsData(resultPost.data);
      setCommentsData(resultComment.data);
    })();
    if (action === 'COMMENT') setSubTopic('comment');
  }, []);

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
            <ShareProfile />
            <div className={`mycontainer ${styles['upload-min-height']}`}>
              <div className="myshare-layout d-flex">
                <div className="col-6 flex-column d-none d-lg-flex">
                  <div className={`${styles['topic-box']} mb-5`}>
                    <div
                      className={`${styles['topic-rect']} d-none d-sm-block`}
                      style={
                        subTopic === 'shared'
                          ? { opacity: '1' }
                          : { opacity: '0' }
                      }
                    >
                      <Rect />
                    </div>
                    <div
                      className={`${styles['subtopic-link']}`}
                      onClick={() => setSubTopic('shared')}
                      style={
                        subTopic === 'shared'
                          ? { color: '#212121' }
                          : { color: '#c4c4c4' }
                      }
                    >
                      已分享貼文
                    </div>
                  </div>
                  <div className={`${styles['topic-box']}`}>
                    <div
                      className={`${styles['topic-rect']} d-none d-sm-block`}
                      style={
                        subTopic === 'comment'
                          ? { opacity: '1' }
                          : { opacity: '0' }
                      }
                    >
                      <Rect />
                    </div>
                    <div
                      className={`${styles['subtopic-link']}`}
                      onClick={() => setSubTopic('comment')}
                      style={
                        subTopic === 'comment'
                          ? { color: '#212121' }
                          : { color: '#c4c4c4' }
                      }
                    >
                      留言紀錄
                    </div>
                  </div>
                </div>
                <div className="col-lg-17">
                  {subTopic === 'shared' ? (
                    <Masonry columns={4} gap={3} data={postItemsData} />
                  ) : (
                    ''
                  )}
                  {subTopic === 'comment' ? (
                    <ShareComment
                      commentsData={commentsData}
                      handleShow={handleShow}
                      setDeleteComment={setDeleteComment}
                    />
                  ) : (
                    ''
                  )}
                </div>
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

export default SharePost;
