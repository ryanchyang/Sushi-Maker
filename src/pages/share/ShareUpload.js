import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

import Masonry from './components/Masonry';
import ShareProfile from './components/ShareProfile';

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
              <div className="col-6 d-flex flex-column">
                <div className="ch-title-20 mb-5">商品預覽照</div>
                <div className="d-flex justify-content-center mb-5">
                  <div className={`${styles['preview-img']} col-18 `}>
                    <img src="/img/home/sushi/金華火腿壽司.png" alt="" />
                  </div>
                </div>

                <div className="ch-title-20 mb-5">會員積分</div>
                <div className="d-flex justify-content-center mb-5">
                  <h3 className="en-cont-28">5000 pt</h3>
                </div>
              </div>
              <div className="col-18">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
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
