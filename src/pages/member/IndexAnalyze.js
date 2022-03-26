import {
  Header,
  Title,
  AsideLeft,
  AsideRight,
  Footer,
} from './memLayout/LayoutLight';
import './index.scss';
import MemHead from './component/MemHead';
import ChartForMem from '../../../src/pages/chartjs/ChartMem/ChartForMem'
import { useEffect } from 'react';

function IndexAnalyze() {

  const mem_id = localStorage.getItem('mem_id');

  useEffect(() => {
    
  },[])


  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          {/* <Title title={''} />
              <br /> */}
          <div className="member ">
            <MemHead />
            {/* 以上不動 */}
            <ChartForMem/>
          </div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default IndexAnalyze;
