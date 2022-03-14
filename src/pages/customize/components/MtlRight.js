import { ReactComponent as Hamburger } from '../../../imgs/hamburger.svg';
import { ReactComponent as Cart } from '../../../imgs/cart.svg';
import { ReactComponent as Help } from '../../../imgs/help-circle.svg';
import { ReactComponent as Rectangle } from '../../../imgs/rectangle.svg';
import { ReactComponent as ArrL } from '../../../imgs/arrow-left-noccircle.svg';
import MtlRBtn from './MtlRBtn';

function MtlRight() {
  return (
    <>
      <div className="col-6 right-area mx-auto px-0">
        <div className="ra-btn">
          <input type="checkbox" className="la-btn-box" />
          <ArrL className="arrL" />
        </div>
        <div className="ra-menu col px-0">
          <div className="menu">
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
              <button className="btn-sm btn-primary primeal-btn-outline ">
                儲存編輯
              </button>
              <button className="btn-sm btn-primary primeal-btn">下一步</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MtlRight;
