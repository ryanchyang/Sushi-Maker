import styles from '../Share.module.scss';

function ShareComment() {
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
              商品
              <span className={`${styles['comment-title-wrap']}`}>名稱</span>
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
          <tr>
            <td
              className={`${styles['comment-history-name']} font-weight-normal`}
            >
              鮪魚蛋壽司
            </td>
            <td className={`${styles['cate-disabled']} font-weight-bold`}>
              2022/3/18
            </td>
            <td className={`${styles['comment-history']} `}>
              真的是太美了~~😍真的是太美了~~😍真的是太美了~~😍真的是太美了~~😍真的是太美了~~😍真的是太美了~~😍
            </td>
            <td>
              <button
                className={`${styles['share-item-button']} btn-sm btn-primary mr-md-5`}
              >
                編輯
              </button>
            </td>
          </tr>
          <tr>
            <td
              className={`${styles['comment-history-name']} font-weight-normal`}
            >
              鮭魚壽司
            </td>
            <td className={`${styles['cate-disabled']} font-weight-bold`}>
              2022/3/18
            </td>
            <td className={`${styles['comment-history']}  `}>看起來好好吃🍣</td>
            <td>
              <button
                className={`${styles['share-item-button']} btn-sm btn-primary mr-md-5`}
              >
                編輯
              </button>
              {/* <Trash className="mb-2" /> */}
            </td>
          </tr>
          <tr>
            <td
              className={`${styles['comment-history-name']} font-weight-normal`}
            >
              玉子燒壽司
            </td>
            <td className={`${styles['cate-disabled']} font-weight-bold`}>
              2022/3/18
            </td>
            <td className={`${styles['comment-history']}  `}>
              拍起來光線不錯優
            </td>
            <td>
              <button
                className={`${styles['share-item-button']} btn-sm btn-primary mr-md-5`}
              >
                編輯
              </button>
            </td>
          </tr>
          <tr>
            <td
              className={`${styles['comment-history-name']} font-weight-normal`}
            >
              玉子燒壽司
            </td>
            <td className={`${styles['cate-disabled']} font-weight-bold`}>
              2022/3/18
            </td>
            <td className={`${styles['comment-history']} `}>Looks delicious</td>
            <td>
              <button
                className={`${styles['share-item-button']} btn-sm btn-primary mr-md-5`}
              >
                編輯
              </button>
            </td>
          </tr>
          <tr>
            <td
              className={`${styles['comment-history-name']} font-weight-normal`}
            >
              玉子燒壽司
            </td>
            <td className={`${styles['cate-disabled']} font-weight-bold`}>
              2022/3/18
            </td>
            <td className={`${styles['comment-history']} `}>這個壽司超炫</td>
            <td>
              <button
                className={`${styles['share-item-button']} btn-sm btn-primary mr-md-5`}
              >
                編輯
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ShareComment;
