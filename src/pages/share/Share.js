import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function Share() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Share'} />
          <p className="ch-cont-14">Share分享牆</p>
          <br />
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default Share;
