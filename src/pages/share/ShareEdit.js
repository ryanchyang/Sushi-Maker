import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import styles from './Share.module.scss';
import { ReactComponent as Delete } from '../../imgs/delete-lg.svg';

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
                <div className="col-12">
                  <h2 className="mb-5">新增貼文</h2>
                  <form>
                    <div class={`mb-4 form-group`}>
                      <label htmlFor="title">標題</label>
                      <input
                        type="text"
                        class={`${styles['share-input']} form-control`}
                        id="title"
                      />
                      <div className="text-primary">必填</div>
                    </div>
                    <div class="form-group">
                      <label htmlFor="images">照片</label>
                      <input
                        type="file"
                        class="form-control-file"
                        id="images"
                      />
                      <div>新增、拖曳照片</div>
                    </div>
                    <div class="form-group">
                      <label htmlFor="content">內文</label>
                      <textarea class="form-control" id="content" />
                    </div>
                    <div class="form-group">
                      <label htmlFor="tag">標籤</label>
                      <input type="text" class="form-control" id="tag" />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="col-12 d-flex">
                  <div className="col-12">123</div>
                  <div className="col-12">123</div>
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

export default ShareEdit;
