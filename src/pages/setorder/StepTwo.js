import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function StepTwo() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Just'} />
          <br />
          <div>fhgkdhfgkhgfdkfkgdhkfdgdk</div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default StepTwo;
