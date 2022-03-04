import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './index.css';

function Home() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Classic'} />
          <br />

          <div className='category-box'>
            <div className='en-title-14-10'>SUSHI</div>
            <div className='en-title-14-10'>DESSERT</div>
            <div className='en-title-14-10'>PACKAGE</div>
          </div>



          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default Home;
