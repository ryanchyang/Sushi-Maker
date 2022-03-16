//SetorderFinal 的七天菜單的一行菜單列,包含下拉式選單
import './SetOrderAll.scss';
import { ReactComponent as Vector } from '../../imgs/setorder/Vector.svg';
function SetMenuList(props) {
  return (
    <>
      <div className="setmenulist">
        <div className="align-items-center">
          <div className="set-menu">
            <div className="en-cont-36 set-day">1</div>
            <div className="set-sushi-all">
              <div className="ch-cont-18 set-sushi-ch">鮭魚壽司便當</div>
              <div className="en-cont-18 set-sushi-en">Salmon Sushi Bento</div>
            </div>
            <div className="set-Vector">
              <Vector />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetMenuList;
