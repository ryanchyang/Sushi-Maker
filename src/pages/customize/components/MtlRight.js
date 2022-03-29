import { ReactComponent as Hamburger } from '../../../imgs/hamburger.svg';
import { ReactComponent as Cart } from '../../../imgs/cart.svg';
import { ReactComponent as Help } from '../../../imgs/help-circle.svg';
import { ReactComponent as Rectangle } from '../../../imgs/rectangle.svg';
import { ReactComponent as ArrL } from '../../../imgs/arrow-left-noccircle.svg';
import MtlRBtn from './MtlRBtn';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../../../Config';

function MtlRight(props) {
  const [openRArea, setOpenRArea] = useState(false);

  const chooseItems = ['選擇食材', '營養分析'];
  const [changeChoose, setChangeChoose] = useState('選擇食材');
  const { addMtlData, setAddMtlData } = props;
  // console.log(props.addMtlData);
  // console.log(props.mtlData);

  // useEffect(() => {
  //   console.log('12114sdff');
  //   setAddMtlData([{ mtlId: 1, mtlPct: 1 }]);
  // }, []);

  const postCusData = async () => {
    const res = await fetch(config.POST_CUS_DATA, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ mtl_id: props.addMtlData }),
    });
    const resJson = await res.json();
    console.log('resJson: ', resJson);
  };

  return (
    <>
      <div
        className="right-area mx-auto px-0"
        style={
          openRArea
            ? { transform: 'translate(calc( 100% - 30px))' }
            : { transform: 'translate(0%)' }
        }
      >
        <div
          className="ra-btn"
          onClick={() => {
            setOpenRArea(!openRArea);
          }}
        >
          <input type="checkbox" className="la-btn-box" />
          <ArrL className="arrL" />
        </div>
        <div className="ra-menu col px-0">
          <div className="menuMtl">
            <Help className="tech" />
            <Cart className="cart" />
            <div className="mem">
              <img
                src={require('./../../../imgs/ruka.png')}
                alt="member-photo"
              />
            </div>
            <Hamburger className="buger" />
          </div>
          <div className="mtlBtn-r col p-0">
            <div className="d-flex choose ch-title-16">
              {chooseItems.map((v, i) => {
                return (
                  <div
                    key={i}
                    className="mtlCate col-12"
                    onClick={() => {
                      setChangeChoose(v);
                    }}
                  >
                    <Rectangle
                      className={
                        changeChoose === v
                          ? 'rectangle'
                          : 'rectangle-displaynone'
                      }
                    />
                    <div className={changeChoose === v ? '' : 'mtl-cate-blur'}>
                      {v}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mtlBtnIn-R pt-3 px-2">
              {Object.keys(props.addMtlData).length === 0
                ? ''
                : props.addMtlData.map((el, i) => {
                    {
                      /* const { mtl_id, mtl_name, mtl_cate, mtl_img_path } = e; */
                    }
                    const takeMtlId = props.mtlData.find(
                      (p) => p.mtl_id === props.addMtlData[i].mtlId
                    );
                    {
                      /* 每次找到陣列內的第幾項的id都去撈mtl_id數據比對 */
                    }

                    return (
                      <MtlRBtn
                        key={i}
                        mtl_id={takeMtlId.mtl_id}
                        mtl_name={takeMtlId.mtl_name}
                        mtl_cate={takeMtlId.mtl_cate}
                        mtl_img_path={takeMtlId.mtl_img_path}
                        removeMtl={addMtlData}
                        setRemoveMtl={setAddMtlData}
                        el={el}
                        i={i}
                      />
                    );
                  })}
            </div>
          </div>
          <div className="btn">
            <button
              className="btn-sm btn-outline-primary primeal-btn-outline m-2"
              onClick={postCusData}
            >
              儲存編輯
            </button>
            <Link to="./CusMiDetail">
              <button className="btn-sm btn-primary primeal-btn m-2">
                下一步
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MtlRight;
