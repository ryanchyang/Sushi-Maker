//SetorderFinal 的七天菜單的一行菜單列,包含下拉式選單
import './SetOrderAll.scss';
import { ReactComponent as Vector } from '../../imgs/setorder/Vector.svg';
function SetMenuList(props) {
  return (
    <>
      <div className="mycontainer">
        <div className="setorderall">
          <div className="container">
            <div className="row align-items-center">
              <div className="set-menu col-md-12 col-24 ">
                <div className="en-cont-36 set-day">1</div>
                <div className="set-sushi-all row">
                  <div className="ch-cont-18 set-sushi-ch">鮭魚壽司</div>
                  <div className="en-cont-18 set-sushi-ch">
                    Salmon Sushi Bento
                  </div>
                </div>
                <div className="set-Vector">
                  {/* <div className="set-Vector-space "></div> */}
                  <Vector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetMenuList;
