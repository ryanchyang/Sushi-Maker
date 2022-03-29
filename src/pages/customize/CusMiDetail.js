import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import { Link } from 'react-router-dom';

function CusMiDetail() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Customization'} />

          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default CusMiDetail;
