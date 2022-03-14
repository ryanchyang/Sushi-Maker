import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import styles from './Share.module.scss';
import { ReactComponent as Delete } from '../../imgs/delete-lg.svg';
import { ReactComponent as DeleteSm } from '../../imgs/del.svg';
import { ReactComponent as Plus } from '../../imgs/plus.svg';

function ShareEdit() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Share'} />

          <div className={`mycontainer`}>
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-between">
                  <p className="mytitle en-title-14-10">
                    HOME / SHARE / UPLOAD
                  </p>
                  <div className="d-flex align-items-center">
                    <Delete className="mx-md-4 p-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles['waterfall-container']}`}>
            <div className="container">
              <div className="row">
                <div className="col d-flex flex-column">
                  <div className="col">
                    <h2 className={`${styles['share-edit-header']} mb-5`}>
                      新增貼文
                    </h2>
                  </div>
                  <div className="d-flex">
                    <div className="col-md-12">
                      <form>
                        <div className={`mb-4 form-group`}>
                          <label htmlFor="title" className="ch-cont-14">
                            標題
                          </label>
                          <input
                            type="text"
                            className={`${styles['share-input']} form-control`}
                            id="title"
                          />
                          <div className="text-primary">必填</div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="images" className="ch-cont-14">
                            照片
                          </label>
                          <input
                            type="file"
                            className="form-control-file"
                            id="images"
                          />
                          <div
                            className={`${styles['share-edit-attach']} d-flex flex-column align-items-center justify-content-center`}
                          >
                            <Plus />
                            <div className="ch-cont-14">新增、拖曳照片</div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="content" className="ch-cont-14">
                            內文
                          </label>
                          <textarea
                            className="form-control"
                            id="content"
                            rows={5}
                          />
                        </div>
                        <div className="form-group mb-5">
                          <label htmlFor="tag" className="ch-cont-14">
                            標籤
                          </label>
                          <input
                            type="text"
                            className={`${styles['share-input']} form-control`}
                            id="tag"
                          />
                          <div
                            className={`${styles['hashtag-box']} d-flex mt-4 flex-wrap`}
                          >
                            <div
                              className={`${styles['hashtag-tag']} d-flex align-items-center`}
                            >
                              <div
                                className={`${styles['hashtag-tag-text']} ch-cont-14 mr-2`}
                              >
                                真好吃真好吃真好吃真好吃真好吃真好吃真好吃真好吃
                              </div>
                              <DeleteSm />
                            </div>
                            <div
                              className={`${styles['hashtag-tag']} d-flex align-items-center`}
                            >
                              <div className="ch-cont-14 mr-2">真好吃</div>
                              <DeleteSm />
                            </div>
                            <div
                              className={`${styles['hashtag-tag']} d-flex align-items-center`}
                            >
                              <div className="ch-cont-14 mr-2">真好吃</div>
                              <DeleteSm />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className={`${styles['primeal-btn-outline-sm']} btn-sm btn-outline-primary mr-3`}
                          >
                            清除
                          </button>
                          <button
                            type="submit"
                            className={`${styles['primeal-btn-sm']} btn-sm btn-primary`}
                          >
                            分享
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-12 d-none d-md-block">
                      <label htmlFor="tag" className="ch-cont-14">
                        預覽
                      </label>
                      <div className=" d-flex flex-wrap">
                        <div className="d-flex flex-column">
                          <div className="col">
                            <div
                              className={`${styles['edit-preview-box']}d-flex justify-content-between mb-3`}
                            >
                              <div className="ch-cont-14 font-weight-bold pt-2">
                                1
                              </div>
                              <DeleteSm
                                className={`${styles['edit-del-button']}`}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <div
                                className={`${styles['share-edit-preview']}`}
                              >
                                <img
                                  src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>{' '}
                        <div className="d-flex flex-column">
                          <div className="col">
                            <div
                              className={`${styles['edit-preview-box']}d-flex justify-content-between mb-3`}
                            >
                              <div className="ch-cont-14 font-weight-bold pt-2">
                                1
                              </div>
                              <DeleteSm
                                className={`${styles['edit-del-button']}`}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <div
                                className={`${styles['share-edit-preview']}`}
                              >
                                <img
                                  src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
    desc: 'The Mastering the Mechanics webinar series also describes required sentence elements and varying sentence types. Please see these archived webinars for more information.',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];

export default ShareEdit;
