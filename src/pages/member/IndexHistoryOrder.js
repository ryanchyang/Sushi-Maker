import {
  Header,
  Title,
  AsideLeft,
  AsideRight,
  Footer,
} from './memLayout/LayoutLight';
import './index.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MemHead from './component/MemHead';
import HistoryOrder from './component/HistoryOrder';
import NavPage from '../layout/components/NavPage';

function IndexHistoryOrder(props) {
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

              <div className="mycontainer orderDetailTB mem-min-hi">
                <HistoryOrder />
              </div>
            </div>
            <Footer />
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} isLogin={isLogin} />
        </div>
      </div>
    </>
  );
}

export default IndexHistoryOrder;
