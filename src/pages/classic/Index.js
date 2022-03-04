import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function Home() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Classic'} />
          <br />

          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default Home;
