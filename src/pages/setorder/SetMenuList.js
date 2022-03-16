//SetorderFinal 的七天菜單的一行菜單列,包含下拉式選單
import './SetOrderAll.scss';
import { ReactComponent as Vector } from '../../imgs/setorder/Vector.svg';
import { ReactComponent as SetContent } from '../../imgs/setorder/icon-info.svg';
function SetMenuList(props) {
  return (
    <>
      <div className="setmenulist">
        <div className="select-date"></div>
        <div className="select-box col-24 align-items-center">
          <div className="en-cont-36 set-day">1</div>
          <select name="" id="" className="select ch-cont-18">
            <option value="">測試便當1 English name</option>
            <option value="">測試便當2 English name</option>
            <option value="">測試便當3 English name</option>
            <option value="">測試便當4 English name</option>
            <option value="">測試便當5 English name</option>
            <option value="">測試便當6 English name</option>
            <option value="">測試便當7 English name</option>
            <option value=""></option>
          </select>
          {/* <span className="custom-arrow">
            <Vector />
          </span> */}
          <span className="custom-info">
            <SetContent />
          </span>
        </div>
      </div>
    </>
  );
}

export default SetMenuList;
