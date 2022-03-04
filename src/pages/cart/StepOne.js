import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function StepOne() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Shopping List'} />
          <br />
          <div>fhgkdhfgkhgfdkfkgdhkfdgdk</div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default StepOne;
