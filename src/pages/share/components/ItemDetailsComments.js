import styles from '../Share.module.scss';
import { useState, useEffect } from 'react';

import { ReactComponent as DeleteSm } from '../../../imgs/del.svg';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import config from '../../../Config';

const timeDifference = (current, previous) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + ' days ago';
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + ' months ago';
  } else {
    return Math.round(elapsed / msPerYear) + ' years ago';
  }
};

const timeConvertHandler = time => {
  const commentTimeStamp = Date.parse(time);
  const now = Date.now();
  return timeDifference(now, commentTimeStamp);
};

function ItemDetailsComments(props) {
  const { setMsgdiv, shareComments, postMemImg } = props;

  const [itemComments, setItemComments] = useState(shareComments);

  useEffect(() => {
    setItemComments(shareComments);
  }, [shareComments]);

  return (
    <div className={`${styles['message-section-box']}  d-flex flex-column`}>
      <div className={`d-flex mb-3 border-bottom ${styles['comment-header']}`}>
        <DeleteSm
          className={`${styles['del-button']}`}
          onClick={() => {
            setMsgdiv(false);
          }}
        />
        <h2 className="en-title-18 mr-4 ">Comments</h2>
        <h3 className="en-title-18">{itemComments.length}</h3>
      </div>
      <div className={`${styles['comment-section']} mb-4`}>
        {itemComments.length === 0 ? (
          <div className="ch-cont-16 my-3" style={{ color: '#c4c4c4' }}>
            成為第一個留言的人吧~
          </div>
        ) : (
          ''
        )}
        {itemComments.map(
          ({
            sid,
            comment,
            item_comment_time: commentTime,
            mem_nickname: commentName,
            mem_photo_img_path: commentImg,
          }) => {
            return (
              <div key={sid} className="d-flex mt-5 mb-3">
                <div className={`${styles['profile-img-sm']} mb-2 mr-3 `}>
                  <img src={config.MEM_PHOTO + `/${commentImg}`} alt="" />
                </div>
                <div className="d-flex flex-column ">
                  <h2 className="en-cont-14 mb-3 font-weight-bold">
                    {commentName}
                  </h2>
                  <p className="ch-cont-14">{comment}</p>
                  <p className="en-cont-12">
                    {timeConvertHandler(commentTime)}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className={`${styles['my-comment']} d-flex mr-3`}>
        <div className="d-flex flex-column w-100">
          <div className="d-flex mb-3">
            <div className={`${styles['profile-img-sm']} mr-3 `}>
              <img src={config.MEM_PHOTO + `/${postMemImg}`} alt="" />
            </div>
            <TextareaAutosize
              maxRows={1}
              className={`${styles['comment-textarea']} ch-cont-14 flex-grow-1`}
              placeholder=" 我的想法..."
            />
          </div>
          <div className="d-flex justify-content-end">
            <button
              className={`${styles['save-button-sm-border']} ch-title-14 mr-3 mb-3 btn-sm btn-outline-primary`}
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
  );
}

export default ItemDetailsComments;
