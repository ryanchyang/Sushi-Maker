import { ReactComponent as Hamburger } from '../../../imgs/hamburger.svg';
import { ReactComponent as Cart } from '../../../imgs/cart.svg';
import { ReactComponent as Help } from '../../../imgs/help-circle.svg';
import { ReactComponent as Rectangle } from '../../../imgs/rectangle.svg';
import { ReactComponent as ArrR } from '../../../imgs/arrow-right-noccircle.svg';
import MtlRBtn from './MtlRBtn';

function MtlRight() {
  return (
    <>
      <div className="right-area mx-auto px-0">
        <div className="ra-btn">
          <input type="checkbox" className="la-btn-box" />
          <ArrR className="arrR" />
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
              <div className="dec col-12">
                <Rectangle className="rectangle" />
                <div>選擇食材</div>
              </div>
              <div className="ing col-12">
                <Rectangle className="rectangle" />
                <div>營養分析</div>
              </div>
            </div>
            <div className="mtlBtnIn-R pt-3 px-2">
              <MtlRBtn />
              <MtlRBtn />
              <MtlRBtn />
              <MtlRBtn />
              <MtlRBtn />
              <MtlRBtn />
              <MtlRBtn />
              <MtlRBtn />
              <MtlRBtn />
              <MtlRBtn />
            </div>
            <div className="btn">
              <button className="btn-sm btn-outline-primary primeal-btn-outline my-2">
                儲存編輯
              </button>
              <button className="btn-sm btn-primary primeal-btn my-2">
                下一步
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MtlRight;
