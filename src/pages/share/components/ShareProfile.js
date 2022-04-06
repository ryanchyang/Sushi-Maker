import { ReactComponent as Delete } from '../../../imgs/delete-lg.svg';
import { ReactComponent as Rect } from '../../../imgs/tags/Rectangle_orange.svg';
import styles from '../Share.module.scss';
import config from '../../../Config';

import { NavLink, useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
function ShareProfile() {
  const [activeTopic, setActiveTopic] = useState('saves');

  const memPhoto = localStorage.getItem('mem_photo');
  const memName = localStorage.getItem('mem_name');

  let history = useHistory(null);

  const topicTemplate = topic => {
    return (
      <>
        <div className={`${styles['topic-box']}`}>
          <div
            className={`${styles['topic-rect']} d-none d-sm-block`}
            style={activeTopic === topic ? { opacity: '1' } : { opacity: '0' }}
          >
            <Rect />
          </div>
          <NavLink
            to={`/share/${topic}`}
            className={`${styles['topic-link']}`}
            activeStyle={{ color: '#212121' }}
            isActive={match => {
              if (!match) return false;

              setActiveTopic(topic);
              return true;
            }}
          >
            {topic.toUpperCase()}
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <>
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
                    to={`/share/saves`}
                    style={{ textDecoration: 'none', color: '#b03342' }}
                  >
                    MYSHARE
                  </Link>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <Delete
                  className={`${styles['large-del']} mx-md-4 p-2`}
                  onClick={() => history.push('/share')}
                />
              </div>
            </div>
            <div
              className={`${styles['profile-section']} d-flex justify-content-center flex-sm-column mb-5`}
            >
              <div
                className={`${styles['profile-img-box']} d-flex justify-content-center mr-4 mr-sm-0`}
              >
                <div className={`${styles['profile-img-lg']} mb-4`}>
                  <img
                    className="myself-img"
                    src={config.MEM_PHOTO + `/${memPhoto}`}
                    alt="profile"
                  />
                </div>
              </div>
              <div
                className={` ${styles['profile-name-box']}  d-flex align-items-center justify-content-center`}
              >
                <h2 className={`${styles['profile-name']} mytitle`}>
                  {memName}
                </h2>
              </div>
            </div>
            <div
              className={`${styles['topic-section']} d-flex  ${styles['mb-50']} justify-content-center`}
            >
              {topicTemplate('saves')}
              {topicTemplate('upload')}
              {topicTemplate('post')}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShareProfile;
