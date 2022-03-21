import config from '../../../Config';
import styles from '../Share.module.scss';

function ItemInfoTemplate(props) {
  const { memPhoto, memNickname } = props;
  return (
    <div className="d-flex justify-content-between">
      <div className={`d-flex align-items-center`}>
        <div className={`${styles['profile-img-sm']} mr-3 `}>
          <img src={config.MEM_PHOTO + `/${memPhoto}`} alt=""></img>
        </div>
        <div className="ch-cont-14">{memNickname}</div>
      </div>
    </div>
  );
}

export default ItemInfoTemplate;
