import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function StepThree() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Payment Info'} />
          <br />
          <div>fhgkdhfgkhgfdkfkgdhkfdgdk</div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default StepThree;
