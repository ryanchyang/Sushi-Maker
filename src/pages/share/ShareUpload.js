import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

import ShareProfile from './components/ShareProfile';

import { ReactComponent as Trash } from '../../imgs/tags/trash-line.svg';

import styles from './Share.module.scss';
import { useState } from 'react';

function ShareUpload() {
  const [uploadItem, setUploadItem] = useState({});

  const creditHandler = item => {
    let credit;

    const cateCredits = [
      { cate: '經典', credit: 300 },
      { cate: '客製', credit: 500 },
      { cate: '套餐', credit: 800 },
    ];
    if (Object.keys(item).length === 0) {
      credit = '5000 pt';
    } else {
      credit = cateCredits.map(cateCredit =>
        cateCredit.cate === item.cate ? `${5000 + cateCredit.credit} pt` : ''
      );
    }

    return (
      <h3 className={`en-cont-28 ${item.cate ? 'text-primary' : ''}`}>
        {credit}
      </h3>
    );
  };

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
                    <img
                      src={uploadItem.img ?? '/img/home/sushi/紅豆抹茶壽司.png'}
                      alt=""
                    />
                  </div>
                </div>

                <div className="ch-cont-14 font-weight-bold mb-5">會員積分</div>
                <div className="d-flex justify-content-center mb-5">
                  {creditHandler(uploadItem)}
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
                    {uploadData.map(data => {
                      return (
                        <tr
                          key={data.id}
                          onMouseEnter={() => setUploadItem(data)}
                          onMouseLeave={() => setUploadItem({})}
                        >
                          <td className="font-weight-normal ">{data.name}</td>
                          <td className="font-weight-bold">{data.date}</td>
                          <td className={`${styles['cate-disabled']} `}>
                            {data.cate}
                          </td>
                          <td style={{ width: '22%' }}>
                            <button
                              className={`${styles['share-item-button']} btn-sm btn-primary mr-md-4`}
                            >
                              分享
                            </button>
                            {data.id === uploadItem.id ? (
                              <Trash
                                className={`${styles['upload-del-button']} mb-2`}
                              />
                            ) : (
                              ''
                            )}
                          </td>
                        </tr>
                      );
                    })}
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

const uploadData = [
  {
    id: 1,
    name: '鮪魚蛋壽司',
    date: '2022/3/18',
    cate: '經典',
    img: '/img/home/sushi/金華火腿壽司.png',
  },
  {
    id: 2,
    name: '玉子燒壽司',
    date: '2022/3/18',
    cate: '套餐',
    img: '/img/home/sushi/牛排壽司.png',
  },
  {
    id: 3,
    name: '鮪魚蛋壽司',
    date: '2022/3/18',
    cate: '經典',
    img: '/img/home/sushi/花枝壽司.png',
  },
  {
    id: 4,
    name: '玉子燒壽司',
    date: '2022/3/18',
    cate: '客製',
    img: '/img/home/sushi/肉排三重奏壽司.png',
  },
  {
    id: 5,
    name: '鮪魚蛋壽司',
    date: '2022/3/18',
    cate: '經典',
    img: '/img/home/sushi/玉子海苔壽司.png',
  },
];

export default ShareUpload;
