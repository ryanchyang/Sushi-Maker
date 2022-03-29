import MtlLBtn from './MtlLBtn';
import { ReactComponent as Logo } from '../../../imgs/logo.svg';
import { ReactComponent as Rectangle } from '../../../imgs/rectangle.svg';
import { ReactComponent as ArrR } from '../../../imgs/arrow-right-noccircle.svg';
import { useState, useEffect } from 'react';

function MtlLeft(props) {
  // console.log(props.mtlData);
  const [openLArea, setOpenLArea] = useState(false);

  // 切換食材分類
  const cateItems = ['食材', '裝飾'];
  const [changeCate, setchangeCate] = useState('食材');

  // 選單切換
  const [changeCatePage, setChangeCatePage] = useState([]);
  const catePage = (e) => {
    switch (e) {
      case '裝飾':
        let categoryTop =
          Object.keys(props.mtlData).length === 0 ? [] : [...props.mtlData];
        categoryTop = categoryTop.filter((i) => i.mtl_cate === 'top');
        setChangeCatePage(categoryTop);
        break;
      default:
        let categoryIng =
          Object.keys(props.mtlData).length === 0 ? [] : [...props.mtlData];
        categoryIng = categoryIng.filter((i) => i.mtl_cate === 'ing');
        setChangeCatePage(categoryIng);
    }
  };

  useEffect(() => {
    catePage(changeCate);
  }, [props.mtlData]);

  // 食材選擇
  // const [mtlActive, setMtlActive] = useState([1]);
  // const [mtlActive, setMtlActive] = useState([{ mtlId: 1, mtlPct: 1 }]);
  const { addMtlData, setAddMtlData } = props;

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
              {cateItems.map((v, i) => {
                return (
                  <div
                    key={i}
                    className="mtlCate col-12"
                    onClick={() => {
                      setchangeCate(v);
                      catePage(v);
                    }}
                  >
                    <Rectangle
                      className={
                        changeCate === v ? 'rectangle' : 'rectangle-displaynone'
                      }
                    />
                    <div className={changeCate === v ? '' : 'mtl-cate-blur'}>
                      {v}
                    </div>
                  </div>
                );
              })}
              {/* 舊做法 */}
              {/* <div
                className="dec col-12"
                onClick={() => {
                  setchangeCate(!changeCate);
                }}
              >
                <Rectangle
                  className={changeCate ? 'rectangle' : 'rectangle-displaynone'}
                />
                <div className={changeCate ? '' : 'mtl-cate-blur'}>食材</div>
              </div>
              <div
                className="ing col-12"
                onClick={() => {
                  setchangeCate(!changeCate);
                }}
              >
                <Rectangle
                  className={changeCate ? 'rectangle-displaynone' : 'rectangle'}
                />
                <div className={changeCate ? 'mtl-cate-blur' : ''}>裝飾</div>
              </div> */}
            </div>
            <div className="mtlBtnIn-L d-flex flex-wrap pt-3 px-2">
              {Object.keys(props.mtlData).length === 0
                ? ''
                : changeCatePage.map((e) => {
                    const { mtl_id, mtl_name, mtl_img_path } = e;

                    return (
                      <MtlLBtn
                        key={mtl_id}
                        mtl_id={mtl_id}
                        mtl_name={mtl_name}
                        mtl_img_path={mtl_img_path}
                        setMtlActive={setAddMtlData}
                        mtlActive={addMtlData}
                        // addclass={mtlActive.includes(mtl_id) ? true : false}
                        addclass={
                          addMtlData.some((a) => a.mtlId === mtl_id)
                            ? true
                            : false
                        }
                        // setAddMtlData={setAddMtlData(mtlActive)} // 要加不然資料傳不上去
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
