import styles from '../Share.module.scss';

import { ReactComponent as Trash } from '../../../imgs/tags/trash-line.svg';
import { useState } from 'react';

const dateConvertHandler = date => {
  return new Date(date).toLocaleDateString('zh-tw');
};

function ShareComment(props) {
  const { commentsData } = props;

  const [commentItem, setCommentItem] = useState(-1);

  return (
    <>
      <table className={`${styles['saves-table']} table table-hover`}>
        <thead>
          <tr>
            <th
              scope="col"
              className={` ${styles['comment-history-name']}  ch-cont-14`}
              style={{ width: '20%' }}
            >
              貼文
              <span className={`${styles['comment-title-wrap']}`}>標題</span>
            </th>
            <th
              scope="col"
              className={`${styles['cate-disabled']} ch-cont-14`}
              style={{ width: '20%' }}
            >
              留言日期
            </th>
            <th
              scope="col"
              className={`${styles['comment-history']} ch-cont-14`}
            >
              我的
              <span className={`${styles['comment-title-wrap']}`}>留言</span>
            </th>
            <th scope="col" style={{ width: '20%' }}></th>
          </tr>
        </thead>
        <tbody>
          {commentsData.map(
            (
              { sid, comment, item_comment_time: date, share_title: title },
              i
            ) => {
              return (
                <tr
                  key={i}
                  onMouseEnter={() => setCommentItem(i)}
                  onMouseLeave={() => setCommentItem(-1)}
                >
                  <td
                    className={`${styles['comment-history-name']} font-weight-normal`}
                  >
                    {title}
                  </td>
                  <td className={`${styles['cate-disabled']} font-weight-bold`}>
                    {dateConvertHandler(date)}
                  </td>
                  <td className={`${styles['comment-history']} `}>{comment}</td>
                  <td>
                    <button
                      className={`${styles['share-item-button']} btn-sm btn-primary mr-md-5`}
                    >
                      編輯
                    </button>
                    {i === commentItem ? (
                      <Trash
                        className={`${styles['upload-del-button']} mb-2`}
                      />
                    ) : (
                      ''
                    )}
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
}

export default ShareComment;
