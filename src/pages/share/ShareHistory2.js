import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

import ShareProfile from './components/ShareProfile';
import { ReactComponent as Delete } from '../../imgs/delete-lg.svg';
import { ReactComponent as Rect } from '../../imgs/tags/Rectangle_orange.svg';
import styles from './Share.module.scss';

function ShareHistory() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Share'} />
          <ShareProfile />
          <div className={`mycontainer`}>
            <div className="myshare-layout d-flex">
              <div className="col-6 flex-column d-none d-lg-flex">
                <div className="d-flex">
                  <div className="d-none d-sm-block">
                    <div className="d-flex align-items-center mr-3 ">
                      <Rect />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="ch-cont-16 font-weight-bold mb-5">
                      已分享貼文
                    </div>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="d-none d-sm-block">
                    <div className="d-flex align-items-center mr-3 ">
                      <Rect />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="ch-cont-16 font-weight-bold mb-5">
                      留言紀錄
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-18">
                <table className={`${styles['saves-table']} table table-hover`}>
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className={` ${styles['comment-history-name']}  ch-cont-14`}
                        style={{ width: '20%' }}
                      >
                        商品
                        <span className={`${styles['comment-title-wrap']}`}>
                          名稱
                        </span>
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
                        <span className={`${styles['comment-title-wrap']}`}>
                          留言
                        </span>
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
                      <td
                        className={`${styles['cate-disabled']} font-weight-bold`}
                      >
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
                      <td
                        className={`${styles['cate-disabled']} font-weight-bold`}
                      >
                        2022/3/18
                      </td>
                      <td className={`${styles['comment-history']}  `}>
                        看起來好好吃🍣
                      </td>
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
                      <td
                        className={`${styles['cate-disabled']} font-weight-bold`}
                      >
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
                      <td
                        className={`${styles['cate-disabled']} font-weight-bold`}
                      >
                        2022/3/18
                      </td>
                      <td className={`${styles['comment-history']} `}>
                        Looks delicious
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
                      <td
                        className={`${styles['cate-disabled']} font-weight-bold`}
                      >
                        2022/3/18
                      </td>
                      <td className={`${styles['comment-history']} `}>
                        這個壽司超炫
                      </td>
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
              </div>
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

export default ShareHistory;
