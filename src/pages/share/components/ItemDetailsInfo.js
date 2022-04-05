import styles from '../Share.module.scss';

import { ReactComponent as PriceTag } from '../../../imgs/priceTag.svg';
import { ReactComponent as TimeClock } from '../../../imgs/timeClock.svg';
import { ReactComponent as DeleteSm } from '../../../imgs/del.svg';

function ItemDetailsInfo(props) {
  const { orderVal, orderPrint, shareTags, setInfodiv } = props;

  return (
    <div className={`${styles['detail-section-box']} d-flex flex-column`}>
      <div className={`d-flex mb-3 border-bottom ${styles['detail-header']}`}>
        <DeleteSm
          className={`${styles['del-button']}`}
          onClick={() => {
            setInfodiv(false);
          }}
        />
        <h2 className="en-title-18 mr-4">Info</h2>
      </div>
      <div className={`${styles['info-section']} mb-5`}>
        <div className="d-flex mt-3 mb-5">
          <div className="d-flex flex-grow-1">
            <PriceTag className="mr-3" />
            <h3 className="en-cont-18">{`NT_$${orderVal}`}</h3>
          </div>
          <div className="d-flex  flex-grow-1">
            <TimeClock className="mr-3" />
            <h3 className="en-cont-18">{`${orderPrint}_SEC`}</h3>
          </div>
        </div>
        <div className={`${styles['tag-box']}`}>
          {shareTags.map(tag => {
            return (
              <div
                key={tag.sid}
                className={`${styles['tag']} ch-title-16`}
              >{`#${tag.item_hash}`}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ItemDetailsInfo;
