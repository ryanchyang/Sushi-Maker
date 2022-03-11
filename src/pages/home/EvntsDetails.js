import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function EvntsDetails() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Events'} />
          <div className="news">
            <div className="mycontainer">
              {/* lastest-news top */}
              <div className="lastest-news-nav d-flex justify-content-between align-items-center">
                <div className="lastest-news-nav-breadcrumbs">
                  <p className="en-title-14-10">HOME / LATEST NEWS / EVENTS</p>
                </div>
                <div className="lastest-news-nav-right d-flex align-items-center">
                  <div className="search mx-2">
                    <img src="/img/home/search-icon.svg" alt="search" />
                  </div>
                  <div className="filter">
                    <img src="/img/home/filter-icon.svg" alt="filter" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default EvntsDetails;
