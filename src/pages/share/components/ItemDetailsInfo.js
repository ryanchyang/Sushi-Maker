import styles from '../Share.module.scss';

import { ReactComponent as PriceTag } from '../../../imgs/priceTag.svg';
import { ReactComponent as TimeClock } from '../../../imgs/timeClock.svg';

function ItemDetailsInfo(props) {
  const { orderVal, orderPrint } = props;

  return (
    <div className={`${styles['info-section']} mb-5`}>
      <div className="d-flex mt-3 mb-5">
        <div className="d-flex flex-grow-1">
          <PriceTag className="mr-3" />
          <h3 className="en-cont-18">{`NT_$${orderVal}`}</h3>
        </div>
        <div className="d-flex  flex-grow-1">
          <TimeClock className="mr-3" />
          <h3 className="en-cont-18">{`${orderPrint}_MIN`}</h3>
        </div>
      </div>
      <div className={`${styles['tag-box']}`}>
        <div className={`${styles['tag']} ch-title-16`}>#超好吃</div>
        <div className={`${styles['tag']} ch-title-16`}>#下次再揪阿</div>
        <div className={`${styles['tag']} ch-title-16`}> #香</div>
        <div className={`${styles['tag']} ch-title-16`}>
          #最近有活動!!大家趕快去買!
        </div>
      </div>
    </div>
  );
}

export default ItemDetailsInfo;
