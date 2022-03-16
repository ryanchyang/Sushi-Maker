import styles from '../Share.module.scss';
import '../../classic/index.scss';
import '../ShareRangeInput.scss';

import { ReactComponent as DeleteSm } from '../../../imgs/del.svg';

function ShareColController(props) {
  const { colControl, setColControl, columns, setColumns, gap, setGap } = props;
  return (
    <>
      <div
        className={`${styles['col-controller-panel']} d-flex justify-content-center`}
        style={!colControl ? { top: '-30%' } : { top: '0' }}
      >
        <div
          className={`mt-5 col-8 d-flex flex-column align-items-center mr-5`}
        >
          <label htmlFor="col" className="en-title-18">
            Column
          </label>
          <input
            type="range"
            min={2}
            max={6}
            id="col"
            defaultValue={columns}
            onChange={e => setColumns(e.target.value)}
          />
        </div>
        <div className={`mt-5 col-8 d-flex flex-column align-items-center`}>
          <label htmlFor="gap" className="en-title-18">
            Gap
          </label>
          <input
            type="range"
            min={2}
            max={6}
            id="gap"
            defaultValue={gap}
            onChange={e => setGap(e.target.value)}
          />
        </div>
        <div className={`${styles['col-controller-del-btn']} `}>
          <DeleteSm
            className={`${styles['button-default-lg']}`}
            onClick={() => setColControl(!colControl)}
          />
        </div>
      </div>
    </>
  );
}

export default ShareColController;
