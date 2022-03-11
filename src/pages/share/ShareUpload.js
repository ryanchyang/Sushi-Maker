import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

import Masonry from './components/Masonry';
import ShareProfile from './components/ShareProfile';

import { ReactComponent as Trash } from '../../imgs/tags/trash-line.svg';

import styles from './Share.module.scss';

function ShareUpload() {
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
                <div className="ch-cont-14 font-weight-bold mb-5">商品預覽</div>
                <div className="d-flex justify-content-center mb-5">
                  <div className={`${styles['preview-img']} col-18 `}>
                    <img src="/img/home/sushi/金華火腿壽司.png" alt="" />
                  </div>
                </div>

                <div className="ch-cont-14 font-weight-bold mb-5">會員積分</div>
                <div className="d-flex justify-content-center mb-5">
                  <h3 className="en-cont-28">5000 pt</h3>
                </div>
              </div>
              <div className="col-lg-18">
                <table className={`${styles['saves-table']} table table-hover`}>
                  <thead>
                    <tr>
                      <th scope="col" className="ch-cont-14">
                        商品名稱
                      </th>
                      <th scope="col" className="ch-cont-14">
                        訂購日期
                      </th>
                      <th
                        scope="col"
                        className={`${styles['cate-disabled']} ch-cont-14`}
                      >
                        產品類別
                      </th>
                      <th scope="col" className=""></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-weight-normal ">鮪魚蛋壽司</td>
                      <td className="font-weight-bold">2022/3/18</td>
                      <td className={`${styles['cate-disabled']} `}>經典</td>
                      <td style={{ width: '20%' }}>
                        <button
                          className={`${styles['share-item-button']} btn-sm btn-primary mr-md-5`}
                        >
                          分享
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-weight-normal ">鮭魚壽司</td>
                      <td className="font-weight-bold">2022/3/18</td>
                      <td className={`${styles['cate-disabled']} `}>客製</td>
                      <td style={{ width: '20%' }}>
                        <button
                          className={`${styles['share-item-button']} btn-sm btn-primary mr-md-5`}
                        >
                          分享
                        </button>
                        {/* <Trash className="mb-2" /> */}
                      </td>
                    </tr>
                    <tr>
                      <td className="font-weight-normal ">玉子燒壽司</td>
                      <td className="font-weight-bold">2022/3/18</td>
                      <td className={`${styles['cate-disabled']} `}>套餐</td>
                      <td style={{ width: '20%' }}>
                        <button
                          className={`${styles['share-item-button']} btn-sm btn-primary mr-md-5`}
                        >
                          分享
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-weight-normal ">玉子燒壽司</td>
                      <td className="font-weight-bold">2022/3/18</td>
                      <td className={`${styles['cate-disabled']} `}>經典</td>
                      <td style={{ width: '20%' }}>
                        <button
                          className={`${styles['share-item-button']} btn-sm btn-primary mr-md-5`}
                        >
                          分享
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-weight-normal ">玉子燒壽司</td>
                      <td className="font-weight-bold">2022/3/18</td>
                      <td className={`${styles['cate-disabled']} `}>經典</td>
                      <td style={{ width: '20%' }}>
                        <button
                          className={`${styles['share-item-button']} btn-sm btn-primary mr-md-5`}
                        >
                          分享
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

export default ShareUpload;
