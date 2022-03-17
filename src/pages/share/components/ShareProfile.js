import { ReactComponent as Delete } from '../../../imgs/delete-lg.svg';
import { ReactComponent as Rect } from '../../../imgs/tags/Rectangle_orange.svg';
import styles from '../Share.module.scss';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
function ShareProfile() {
  const [activeTopic, setActiveTopic] = useState('saves');

  const topicTemplate = topic => {
    return (
      <>
        <div className={`${styles['topic-box']}`}>
          <div
            className={`${styles['topic-rect']} d-none d-sm-block`}
            style={
              activeTopic === topic ? { opacity: '100%' } : { opacity: '0' }
            }
          >
            <Rect />
          </div>
          <NavLink
            to={`/share/${topic}`}
            className={`${styles['topic-link']}`}
            style={{ color: '#c4c4c4' }}
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
      <div className={`mycontainer`}>
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between">
              <p className="mytitle en-title-14-10">HOME / SHARE / MY-SHARE</p>
              <div className="d-flex align-items-center">
                <Delete className="mx-md-4 p-2" />
              </div>
            </div>
            <div
              className={`${styles['profile-section']} d-flex justify-content-center flex-sm-column ${styles['mb-50']} `}
            >
              <div
                className={`${styles['profile-img-box']} d-flex justify-content-center mr-4 mr-sm-0`}
              >
                <div className={`${styles['profile-img-lg']} mb-4`}>
                  <img
                    className="myself-img"
                    src="\img\member\ruka.png"
                    alt="profile"
                  />
                </div>
              </div>
              <div
                className={` ${styles['profile-name-box']}  d-flex align-items-center justify-content-center`}
              >
                <h2 className={`${styles['profile-name']} mytitle`}>
                  Xisharp Teng
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
