import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function CusMiDetail() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Customization'} />
          <br />

          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default CusMiDetail;
