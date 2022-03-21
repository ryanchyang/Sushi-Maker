import { ReactComponent as HeartOutlineBk } from '../../../imgs/heart-outline-bk.svg';
import styles from '../Share.module.scss';

function ItemSavesTemplate(props) {
  const { savesCount } = props;
  return (
    <div className="d-flex justify-content-between mt-3">
      <div className="d-flex align-items-center">
        <HeartOutlineBk style={{ padding: '0 3px' }} />
        <div className="en-cont-14">{savesCount}</div>
      </div>
    </div>
  );
}

export default ItemSavesTemplate;
