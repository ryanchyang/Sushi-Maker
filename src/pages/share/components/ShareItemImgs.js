import styles from '../Share.module.scss';
import { ReactComponent as ArrowRight } from '../../../imgs/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../../imgs/arrow-left.svg';
import config from '../../../Config';
import { useState } from 'react';

function ShareItemImgs(props) {
  const { itemImgs } = props;
  const [selectedImg, setSelectedImg] = useState(0);
  const [transitionNone, setTransitionNone] = useState(false);

  const transformHandler = e => {
    const arrow = e.currentTarget.dataset.arrow;
    if (arrow === 'left') {
      if (selectedImg === -1) {
        setSelectedImg(itemImgs.length - 1);
      } else {
        setSelectedImg(selectedImg - 1);
      }
    }
    if (arrow === 'right')
      if (selectedImg === itemImgs.length) {
        setSelectedImg(0);
      } else {
        setSelectedImg(selectedImg + 1);
      }

    setTransitionNone(false);
  };

  const checkTransition = () => {
    if (selectedImg < 0) {
      setSelectedImg(itemImgs.length - 1);
      setTransitionNone(true);
    } else if (selectedImg > itemImgs.length - 1) {
      setSelectedImg(0);
      setTransitionNone(true);
    } else {
      setTransitionNone(false);
    }
  };

  const transformTemplate = () => {
    return transitionNone
      ? {
          transform: `translateX(${-100 * selectedImg - 100}%)`,
          transition: 'none',
        }
      : {
          transform: `translateX(${-100 * selectedImg - 100}%)`,
        };
  };

  return (
    <>
      <div className={`${styles['img-info']} d-flex justify-content-center`}>
        <div className={`${styles['img-container-mask']} mb-5 d-flex`}>
          <div
            className={`${styles['img-big-container']} d-flex`}
            style={transformTemplate()}
            onTransitionEnd={() => {
              checkTransition();
            }}
          >
            {
              <div className={` ${styles['img-container']}`}>
                <img
                  src={
                    config.HOST +
                    `/${itemImgs[itemImgs.length - 1]?.share_imgPath ?? ''}`
                  }
                  alt=""
                />
              </div>
            }
            {itemImgs.map(imgObj => {
              return (
                <div key={imgObj.sid} className={` ${styles['img-container']}`}>
                  <img
                    src={config.HOST + `/${imgObj.share_imgPath}` ?? ''}
                    alt=""
                  />
                </div>
              );
            })}
            {
              <div className={` ${styles['img-container']}`}>
                <img
                  src={config.HOST + `/${itemImgs[0]?.share_imgPath}` ?? ''}
                  alt=""
                />
              </div>
            }
          </div>
        </div>
        <div
          data-arrow="left"
          onClick={e => {
            transformHandler(e);
          }}
        >
          {itemImgs.length > 1 && (
            <ArrowLeft className={`${styles['img-arrow-left']}`} />
          )}
        </div>
        <div
          data-arrow="right"
          onClick={e => {
            transformHandler(e);
          }}
          onTransitionEnd={e => transformHandler(e)}
        >
          {itemImgs.length > 1 && (
            <ArrowRight
              className={`${styles['img-arrow-right']}`}
              data-arrow="right"
            />
          )}
        </div>
      </div>
      <div
        className={`${styles['img-carousel']} d-flex justify-content-center ${styles['mb-80']}`}
      >
        {itemImgs.map((imgObj, i) => {
          return (
            <div
              key={i}
              className={`${styles['small-img-container']}`}
              style={selectedImg === i ? { outline: '3px solid #eed19a' } : {}}
              onClick={() => {
                setSelectedImg(i);
                checkTransition();
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
