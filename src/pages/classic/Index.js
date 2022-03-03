import { Header, AsideLeft, AsideRight, Footer } from '../layout/Layout';

function Home() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '75%', height: '1200px' }}>            
            <Footer />
        </div>
        <AsideRight />        
      </div>      
    </>
  );
}

export default Home;