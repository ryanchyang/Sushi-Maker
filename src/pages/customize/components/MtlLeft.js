import MtlLBtn from './MtlLBtn';
import { ReactComponent as Logo } from '../../../imgs/logo.svg';
import { ReactComponent as Rectangle } from '../../../imgs/rectangle.svg';
import { ReactComponent as ArrL } from '../../../imgs/arrow-left-noccircle.svg';

function MtlLeft() {
  return (
    <>
      <div className="left-area mx-auto px-0">
        <div className="la-menu col px-0">
          <div className="logoMtl">
            <Logo className="logoMtl-box" />
            <div className="col-12" />
          </div>
          <div className="mtlBtn-l col p-0">
            <div className="d-flex choose ch-title-16">
              <div className="dec col-12">
                <Rectangle className="rectangle" />
                <div>食材</div>
              </div>
              <div className="ing col-12">
                <Rectangle className="rectangle" />
                <div>裝飾</div>
              </div>
            </div>
            <div className="mtlBtnIn-L d-flex flex-wrap pt-3 px-2">
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
              <MtlLBtn />
            </div>
          </div>
        </div>
        <div className="la-btn">
          <input type="checkbox" className="la-btn-box" />
          <ArrL className="arrL" />
        </div>
      </div>
    </>
  );
}

export default MtlLeft;
