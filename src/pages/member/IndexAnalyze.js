import {
  Header,
  Title,
  AsideLeft,
  AsideRight,
  Footer,
} from './memLayout/LayoutLight';
import './index.scss';
import MemHead from './component/MemHead';
import ChartForMem from '../../../src/pages/chartjs/ChartMem/ChartForMem';
import { useEffect } from 'react';
import NavPage from '../layout/components/NavPage';

function IndexAnalyze(props) {
  const { navIsOpen, setNavIsOpen, isLogin } = props;
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  return (
    <>
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '75%' }}>
            {/* <Title title={''} />
              <br /> */}
            <div className="member ">
              <MemHead isLogin={isLogin}/>
              {/* 以上不動 */}
              <ChartForMem className="mt-5"/>
            </div>
            <Footer />
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} isLogin={isLogin} />
        </div>
      </div>
    </>
  );
}

export default IndexAnalyze;
