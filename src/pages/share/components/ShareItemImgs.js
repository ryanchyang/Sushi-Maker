import styles from '../Share.module.scss';
import { ReactComponent as ArrowRight } from '../../../imgs/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../../imgs/arrow-left.svg';
import config from '../../../Config';
import { useState } from 'react';

function ShareItemImgs(props) {
  const { itemImgs } = props;
  const [selectedImg, setSelectedImg] = useState(0);

  const transformHandler = e => {
    const arrow = e.currentTarget.dataset.arrow;
    if (arrow === 'left') {
      if (selectedImg === 0) {
        setSelectedImg(itemImgs.length - 1);
      } else {
        setSelectedImg(selectedImg - 1);
      }
    }
    if (arrow === 'right')
      if (selectedImg === itemImgs.length - 1) {
        setSelectedImg(0);
      } else {
        setSelectedImg(selectedImg + 1);
      }
  };

  return (
    <>
      <div className={`${styles['img-info']} d-flex justify-content-center`}>
        <div className={`${styles['img-container-mask']} mb-5 d-flex`}>
          {itemImgs.map(imgObj => {
            return (
              <div
                className={` ${styles['img-container']}`}
                style={{ transform: `translateX(${-100 * selectedImg}%)` }}
              >
                <img src={config.HOST + `/${imgObj.share_imgPath}`} alt="" />
              </div>
            );
          })}
        </div>
        <div
          data-arrow="left"
          onClick={e => {
            transformHandler(e);
          }}
        >
          <ArrowLeft className={`${styles['img-arrow-left']}`} />
        </div>
        <div
          data-arrow="right"
          onClick={e => {
            transformHandler(e);
          }}
        >
          <ArrowRight
            className={`${styles['img-arrow-right']}`}
            data-arrow="right"
          />
        </div>
      </div>
      <div
        className={`${styles['img-carousel']} d-flex justify-content-center ${styles['mb-80']}`}
      >
        {itemImgs.map((imgObj, i) => {
          return (
            <div
              className={`${styles['small-img-container']}`}
              style={selectedImg === i ? { outline: '3px solid #eed19a' } : {}}
              onClick={() => {
                setSelectedImg(i);
              }}
            >
              <img src={config.HOST + `/${imgObj.share_imgPath}`} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShareItemImgs;
