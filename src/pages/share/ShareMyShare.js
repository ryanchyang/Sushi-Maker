import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

import Masonry from './components/Masonry';
import { ReactComponent as Delete } from '../../imgs/delete-lg.svg';

function ShareMyShare() {
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
                    HOME / SHARE / MY-SHARE
                  </p>
                  <div className="d-flex align-items-center">
                    <Delete className="mx-4 p-2" />
                  </div>
                </div>
                <div className="bigprofile">123</div>
              </div>
            </div>
          </div>
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default ShareMyShare;
