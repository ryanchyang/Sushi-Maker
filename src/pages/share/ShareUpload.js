import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

import ShareProfile from './components/ShareProfile';
import NavPage from '../layout/components/NavPage';

import { ReactComponent as Trash } from '../../imgs/tags/trash-line.svg';

import config from '../../Config';
import styles from './Share.module.scss';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const dateConvertHandler = date => {
  return new Date(date).toLocaleDateString('zh-tw');
};

const cateConvertHandler = cate => {
  if (!cate) return;
  const cateArr = [
    { cate: 'cs', name: '經典' },
    { cate: 'cm', name: '客製' },
    { cate: 'set', name: '套餐' },
  ];

  const cateName = cateArr.find(cateObj => cateObj.cate === cate);

  return cateName.name;
};

const creditHandler = cate => {
  let credit;

  const cateCredits = [
    { cate: 'cs', credit: 300 },
    { cate: 'cm', credit: 500 },
    { cate: 'set', credit: 800 },
  ];
  if (!cate) {
    credit = '5000 pt';
  } else {
    credit = cateCredits
      .map(cateCredit =>
        cateCredit.cate === cate ? `${5000 + cateCredit.credit} pt` : ''
      )
      .join('');
  }

  return (
    <h3 className={`en-cont-28 ${cate ? 'text-primary' : ''}`}>{credit}</h3>
  );
};

function ShareUpload(props) {
  const [uploadItem, setUploadItem] = useState(-1);
  const [uploadItemsData, setUploadItemsData] = useState([]);
  let history = useHistory(null);

  //加入NAVBar漢堡選單開關
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const { navIsOpen, setNavIsOpen } = props; // 解構NAVBAR

  //Get member id
  const memId = localStorage.getItem('mem_id');

  const getUserShareUpload = async () => {
    const response = await fetch(config.GET_USER_SHARE_UPLOAD + `${memId}`, {
      method: 'GET',
    });
    const itemsArr = await response.json();
    return itemsArr;
  };

  // Fetching data
  useEffect(() => {
    (async () => {
      const result = await getUserShareUpload();

      setUploadItemsData(result.data);
    })();
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
              <div className={`${styles['myshare-layout']} d-flex`}>
                <div className="col-6 flex-column d-none d-lg-flex">
                  <div className="ch-cont-14 font-weight-bold mb-5">
                    商品預覽
                  </div>
                  <div className="d-flex justify-content-center mb-5">
                    <div className={`${styles['preview-img']} col-18 `}>
                      <img
                        key={uploadItem}
                        src={
                          config.HOST +
                          `${
                            uploadItemsData[uploadItem]?.img_path ??
                            uploadItemsData[0]?.img_path // default image
                          }`
                        }
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="ch-cont-14 font-weight-bold mb-5">
                    會員積分
                  </div>
                  <div className="d-flex justify-content-center mb-5">
                    {creditHandler(
                      uploadItemsData[uploadItem]?.orders_category
                    )}
                  </div>
                </div>
                <div className="col-lg-18">
                  <table
                    className={`${styles['saves-table']} table table-hover`}
                  >
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
                      {uploadItemsData.map(
                        (
                          {
                            orders_id: id,
                            orders_category: cate,
                            prod_name: name,
                            orders_date: date,
                          },
                          i
                        ) => {
                          return (
                            <tr
                              key={id}
                              onMouseEnter={() => setUploadItem(i)}
                              onMouseLeave={() => setUploadItem(-1)}
                            >
                              <td className="font-weight-normal ">{name}</td>
                              <td className="font-weight-bold">
                                {dateConvertHandler(date)}
                              </td>
                              <td className={`${styles['cate-disabled']} `}>
                                {cateConvertHandler(cate)}
                              </td>
                              <td style={{ width: '22%' }}>
                                <button
                                  className={`${styles['share-item-button']} btn-sm btn-primary mr-md-5`}
                                  onClick={() => {
                                    history.push({
                                      pathname: '/share/edit',
                                      state: {
                                        orderId: id,
                                        orderName: name,
                                        orderCate: cate,
                                      },
                                    });
                                  }}
                                >
                                  分享
                                </button>
                                {i === uploadItem ? (
                                  <Trash
                                    className={`${styles['upload-del-button']} mb-2 ml-4`}
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

export default ShareUpload;
