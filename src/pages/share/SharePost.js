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

function SharePost(props) {
  const [subTopic, setSubTopic] = useState('shared');
  const [postItemsData, setPostItemsData] = useState([]);
  const [commentsData, setCommentsData] = useState([]);

  const location = useLocation(null);
  const { action = 'shared' } = location.state || {};

  //加入NAVBar漢堡選單開關
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const { navIsOpen, setNavIsOpen } = props; // 解構NAVBAR

  const getUserSharePost = async () => {
    const response = await fetch(config.GET_USER_SHARE_POST, {
      method: 'GET',
    });
    const itemsArr = await response.json();
    return itemsArr;
  };

  const getUserShareComment = async () => {
    const response = await fetch(config.GET_USER_SHARE_COMMENT, {
      method: 'GET',
    });
    const itemsArr = await response.json();
    return itemsArr;
  };

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
                <div className="col-lg-18">
                  {subTopic === 'shared' ? (
                    <Masonry columns={4} gap={3} data={postItemsData} />
                  ) : (
                    ''
                  )}
                  {subTopic === 'comment' ? (
                    <ShareComment commentsData={commentsData} />
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
            <br />
            <Footer />
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
    </>
  );
}

export default SharePost;
