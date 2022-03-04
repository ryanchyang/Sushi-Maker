import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function Index() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'EVENT'} />
          <br />

          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default Index;