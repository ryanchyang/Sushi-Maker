import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';


function NewsDetails() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={''} />
          <br />
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default NewsDetails;
