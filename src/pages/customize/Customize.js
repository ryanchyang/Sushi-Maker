import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function Customize() {
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

export default Customize;