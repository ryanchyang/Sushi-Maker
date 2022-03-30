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
import HistoryOrder from './component/HistoryOrder'

function IndexHistoryOrder() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '75%' }}>
          {/* <Title title={''} />
            <br /> */}
          <div className="member ">
            <MemHead />
            {/* 以上不動 */}

            <div className="mycontainer orderDetailTB">
              <HistoryOrder/>
            </div>
          </div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default IndexHistoryOrder;
