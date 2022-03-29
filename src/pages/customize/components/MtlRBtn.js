import { ReactComponent as Del } from '../../../imgs/del.svg';
import { ReactComponent as Plus } from '../../../imgs/plus.svg';
import { ReactComponent as Minus } from '../../../imgs/minus.svg';
import config from '../../../Config';

function MtlRBtn(props) {
  const { mtl_id, mtl_name, mtl_img_path, removeMtl, setRemoveMtl, i, el } =
    props;
  // console.log(props);
  // console.log(removeMtl);

  // 刪除品項
  const del = () => {
    let originalMtlArr = [...removeMtl];
    originalMtlArr.splice(i, 1);
    setRemoveMtl(originalMtlArr);
  };

  // 輸入數量
  const countIt = (count) => {
    // console.log(removeMtl);
    // console.log({ count, mtl_id });
    if (count <= 0) {
      return false;
    }
    const newList = JSON.parse(JSON.stringify(removeMtl));

    // count:數量 / e:第幾個

    const newCount = newList.map((v, index) => {
      if (index === i) {
        return { mtlId: mtl_id, mtlPct: count };
      } else {
        return { ...v };
      }
    });
    setRemoveMtl(newCount);
    // console.log({ newCount });
    // console.log('newCount', newCount);
  };

  // 減去數量
  const contMinus = (count) => {
    // console.log(removeMtl);
    // console.log({ count, mtl_id });
    if (count <= 0) {
      return false;
    }
    const newList = JSON.parse(JSON.stringify(removeMtl));

    // count:數量 / e:第幾個

    const newCount = newList.map((v, index) => {
      if (index === i) {
        return { mtlId: mtl_id, mtlPct: count };
      } else {
        return { ...v };
      }
    });
    setRemoveMtl(newCount);
    // console.log({ newCount });
    // console.log('newCount', newCount);
  };

  // 增加數量
  const countAdd = (count) => {
    // console.log(removeMtl);
    // console.log({ count, mtl_id });
    if (count <= 0) {
      return false;
    }
    const newList = JSON.parse(JSON.stringify(removeMtl));

    // count:數量 / e:第幾個

    const newCount = newList.map((v, index) => {
      if (index === i) {
        return { mtlId: mtl_id, mtlPct: count };
      } else {
        return { ...v };
      }
    });
    setRemoveMtl(newCount);
    // console.log({ newCount });
    // console.log('newCount', newCount);
  };

  return (
    <div className="mtlRBtn my-3 mx-4" key={mtl_id}>
      <div className="mtlimg-r">
        <img src={`${config.HOST}${mtl_img_path}`} alt={mtl_name} />
      </div>
      <div className="mtlname-r ch-cont-16 col px-4">{mtl_name}</div>
      <div className="select-add-cart ch-cont-12">
        <div className="select-count">
          <button onClick={() => contMinus(i)}>
            <Minus />
          </button>
          <input
            type="number"
            value={el.mtlPct}
            onChange={(e) => countIt(+e.target.value)}
          />
          <button onClick={() => countAdd(i)}>
            <Plus />
          </button>
        </div>
      </div>
      <Del className="mtlDelIcon" onClick={del} />
    </div>
  );
}

export default MtlRBtn;
