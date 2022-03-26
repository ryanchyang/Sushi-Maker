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

function IndexAnalyze() {
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
