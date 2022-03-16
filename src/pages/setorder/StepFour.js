import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function StepFour() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Just'} />
          <br />
          <div></div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default StepFour;
