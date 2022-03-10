//CartDetail.js
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ProdItemInfo from './ProdItemInfo';

function CartDetail() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>交易明細</Typography>
        </AccordionSummary>
        <AccordionDetails className="w-100">
          <Typography>
            {/* 商品詳細資訊 */}
            <ProdItemInfo />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default CartDetail;
