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
  const {
    setMsgdiv,
    shareComments,
    itemId,
    action,
    commentSid,
    handleShow,
    setIsSubmit,
  } = props;

  const [itemComments, setItemComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [blink, setBlink] = useState(0);

  const memId = localStorage.getItem('mem_id');
  const memPhoto = localStorage.getItem('mem_photo');
  const memNickname = localStorage.getItem('mem_nickname');

  const uploadComment = async () => {
    const response = await fetch(config.UPLOAD_COMMENT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        itemId,
        commentId: memId,
        comment: commentInput,
        commentTime: Date(Date.now()),
      }),
    });
    const itemsArr = await response.json();
    return itemsArr;
  };

  const updateComment = async () => {
    const response = await fetch(config.UPDATE_COMMENT, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sid: commentSid,
        itemId,
        commentId: memId,
        comment: commentInput,
        commentTime: Date(Date.now()),
      }),
    });
    handleShow();
    const itemsArr = await response.json();
    return itemsArr;
  };

  useEffect(() => {
    setItemComments(shareComments);
    const commentObj = shareComments.find(
      comment => comment.sid === commentSid
    );

    if (action === 'COMMENT' && commentObj) setCommentInput(commentObj.comment);
  }, [shareComments]);

  useEffect(() => {}, [shareComments]);

  return (
    <div className={`${styles['message-section-box']}  d-flex flex-column`}>
      <div className={`d-flex mb-3 border-bottom ${styles['comment-header']}`}>
        <DeleteSm
          className={`${styles['del-button']}`}
          onClick={() => {
            if (action === 'COMMENT') handleShow();
            if (action === 'VIEW') setMsgdiv(false);
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
          (
            {
              blinkId = '',
              sid,
              comment,
              item_comment_time: commentTime,
              mem_nickname: commentName,
              mem_photo_img_path: commentImg,
            },
            i
          ) => {
            return (
              <div
                key={commentTime + i}
                className={`${
                  blink === blinkId ? styles['fade-out-bg'] : ''
                } d-flex mt-5 mb-3`}
              >
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
        <div className="d-flex flex-column flex-grow-1">
          <div className="d-flex mb-3">
            <div className={`${styles['profile-img-sm']} mr-3 `}>
              <img src={config.MEM_PHOTO + `/${memPhoto}`} alt="" />
            </div>
            <TextareaAutosize
              maxRows={1}
              className={`${styles['comment-textarea']} ch-cont-14 flex-grow-1`}
              placeholder=" 我的想法..."
              value={commentInput}
              onChange={e => {
                setCommentInput(e.target.value);
              }}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button
              className={`${styles['save-button-sm-border']} ch-title-14 mr-3 mb-3 btn-sm btn-outline-primary`}
              onClick={() => setCommentInput('')}
            >
              取消
            </button>
            <button
              disabled={commentInput ? false : true}
              style={commentInput ? { opacity: '1' } : { opacity: '0.7' }}
              className={`${styles['save-button-sm']} ch-title-14 mb-3 btn-sm btn-primary`}
              onClick={() => {
                if (action === 'COMMENT') {
                  setIsSubmit(true);
                  updateComment();
                  return;
                }
                setBlink(blink + 1);
                setItemComments([
                  {
                    blinkId: blink + 1,
                    comment: commentInput,
                    item_comment_time: Date(Date.now()),
                    mem_nickname: memNickname,
                    mem_photo_img_path: memPhoto,
                  },
                  ...itemComments,
                ]);
                setCommentInput('');
                uploadComment();
              }}
            >
              {action === 'COMMENT' ? '修改' : '發佈'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailsComments;

// comment
// :
// "最近正是鮪魚最好吃的時候"
// item_comment_time
// :
// "2021-02-12 12:30:00"
// mem_nickname
// :
// "彦歆"
// mem_photo_img_path
// :
// "23.jpg"
// member_id
// :
// 24
// share_item_id
// :
// 3
// sid
// :
// 21
// new entry
// :
