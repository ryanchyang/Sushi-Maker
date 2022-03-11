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

function IndexHistoryOrder() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          {/* <Title title={''} />
            <br /> */}
          <div className="mem ">
            <div className="memHead ">
              <div className="memPhotoArea col-md-6">
                <div className="memPhoto">
                  <img
                    className="memImg"
                    src={require('../../imgs/ruka.png')}
                    alt="member-photo"
                  />
                </div>
                <div className="memName">
                  <p className="ch-title-22">RUKA蔣</p>
                </div>
                <button className="btn-primary primeal-btn">照片上傳</button>
              </div>
              <div className="solgan col-md-4 mr-5">
                <p>Good Morning!</p>
              </div>

              <div className="memShare col-md-12 ml-5">
                <div className="divCarou">
                  <div className="carouImg mx-3">
                    <img
                      className="Cimg"
                      src="/img/member/shareImg.png"
                      alt=""
                    />
                  </div>
                  <div className="carouImg mx-3">
                    <img
                      src="/img/member/shareImg.png"
                      className="Cimg"
                      alt=""
                    />
                  </div>
                  <div className="carouImg mx-3">
                    <img
                      src="/img/member/shareImg.png"
                      className="Cimg"
                      alt=""
                    />
                  </div>
                  <div className="carouImg mx-3">
                    <img
                      src="/img/member/shareImg.png"
                      className="Cimg"
                      alt=""
                    />
                  </div>
                </div>
                <button className="btn-sm btn-primary primeal-btn share-btn">
                  觀看全部收藏
                </button>
              </div>
            </div>
            {/* 以上不動 */}

            <div className="mycontainer orderDetailTB">
              <div className="row orderDetailRow">
                <table className="table col-md-20">
                  <thead>
                    <tr>
                      <th scope="col">訂單編號</th>
                      <th scope="col">購買日期</th>
                      <th scope="col">訂單狀態</th>
                      <th scope="col">總價</th>
                      <th scope="col">印製時間</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#0000001</td>
                      <td>2022/4/30</td>
                      <td>已出貨</td>
                      <td>NT$ 1000 元</td>
                      <td>30 分鐘</td>
                      <td>交易明細</td>
                    </tr>
                  </tbody>
                </table>
                <Accordion className="col-md-20">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{ width: '90%', flexShrink: 0 }}>
                      交易明細
                    </Typography>
                    <Typography sx={{ width: '10%', flexShrink: 0 }}>
                      數量
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="w-100">
                    <Typography>{/* 商品詳細資訊 */}</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
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
