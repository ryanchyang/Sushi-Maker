import MtlLBtn from './MtlLBtn';
import { ReactComponent as Logo } from '../../../imgs/logo.svg';
import { ReactComponent as Rectangle } from '../../../imgs/rectangle.svg';
import { ReactComponent as ArrR } from '../../../imgs/arrow-right-noccircle.svg';
import { useState } from 'react';

function MtlLeft(props) {
  // console.log(props.mtlData);
  const [openLArea, setOpenLArea] = useState(false);
  // const [chooseMtl, setChooseMtl] = useState(false);
  const [mtlActive, setMtlActive] = useState([1]);
  const { setAddMtlData } = props;

  return (
    <>
      <div
        className="left-area mx-auto px-0"
        style={
          openLArea
            ? { transform: 'translate(calc( -100% + 30px))' }
            : { transform: 'translate(0%)' }
        }
      >
        <div className="la-menu col px-0">
          <div className="logoMtl">
            <Logo className="logoMtl-box" />
            <div className="col-12" />
          </div>
          <div className="mtlBtn-l col p-0">
            <div className="d-flex choose ch-title-16">
              <div
                className="dec col-12"
                // onClick={() => {
                //   setChooseMtl(!chooseMtl);
                // }}
              >
                <Rectangle
                  className="rectangle"
                  // style={chooseMtl ? { display: 'none' } : { display: 'inline' }}
                />
                <div
                // style={
                //   chooseMtl ? { color: '#c4c4c4' } : { color: '#575757' }
                // }
                >
                  食材
                </div>
              </div>
              <div className="ing col-12">
                <Rectangle className="rectangle" />
                <div>裝飾</div>
              </div>
            </div>
            <div className="mtlBtnIn-L d-flex flex-wrap pt-3 px-2">
              {Object.keys(props.mtlData).length === 0
                ? ''
                : props.mtlData.map((e) => {
                    const { mtl_id, mtl_name, mtl_cate, mtl_img_path } = e;

                    return (
                      <MtlLBtn
                        key={mtl_id}
                        mtl_id={mtl_id}
                        mtl_name={mtl_name}
                        mtl_cate={mtl_cate}
                        mtl_img_path={mtl_img_path}
                        setMtlActive={setMtlActive}
                        mtlActive={mtlActive}
                        setAddMtlData={setAddMtlData(mtlActive)} // 要加不然資料傳不上去
                      />
                    );
                  })}
            </div>
          </div>
        </div>
        <div
          className="la-btn"
          onClick={() => {
            setOpenLArea(!openLArea);
          }}
        >
          <input type="checkbox" className="la-btn-box" />
          <ArrR className="arrR" />
        </div>
      </div>
    </>
  );
}

export default MtlLeft;
