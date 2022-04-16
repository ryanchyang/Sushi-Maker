import { ReactComponent as Del } from '../../../imgs/del.svg';
import { ReactComponent as Plus } from '../../../imgs/plus.svg';
import { ReactComponent as Minus } from '../../../imgs/minus.svg';
import config from '../../../Config';
import { Draggable } from 'react-beautiful-dnd';

function MtlRBtn(props) {
  const {
    mtl_id,
    mtl_name,
    mtl_img_path,
    removeMtl,
    setRemoveMtl,
    i,
    el,
    altTotal,
    setAltTotal,
    indexTotal,
    setIndexTotal,
    sushiGroup,
    setSushiGroup,
  } = props;
  // console.log(props);
  // console.log(removeMtl);

  const getClassName = isDragging => ({
    cursor: isDragging ? 'all-scroll' : 'pointer',
  });

  // 改變高度
  const changeHeightHandler = action => {
    let returnGroup = [...sushiGroup];
    // const clickItem = isChange[isChange.length - 1];
    const addHeightObj = returnGroup[removeMtl.length - i - 1]; // 增加高度的單一層

    if (action === 'ADD') {
      addHeightObj.height = addHeightObj.height + 0.125; // 預設增加高度
      addHeightObj.alt = addHeightObj.alt + 0.125 / 2; // 預設增加y軸高度
    }

    if (action === 'MINUS') {
      addHeightObj.height = addHeightObj.height - 0.125; // 預設減少高度
      addHeightObj.alt = addHeightObj.alt - 0.125 / 2; // 預設減少y軸高度
    }

    const willAddAltArr = [...returnGroup].slice(removeMtl.length - i); // 群體
    let AddedAltArr;

    if (action === 'ADD') {
      AddedAltArr = willAddAltArr.map(obj => {
        return { ...obj, alt: obj.alt + 0.125 }; // 預設增加高度
      });
    }
    if (action === 'MINUS') {
      AddedAltArr = willAddAltArr.map(obj => {
        return { ...obj, alt: obj.alt - 0.125 }; // 預設減少高度
      });
    }

    const finalArr = [
      ...returnGroup.slice(0, removeMtl.length - i - 1),
      addHeightObj,
      ...AddedAltArr,
    ];

    if (action === 'ADD') {
      setAltTotal(altTotal + 1); // alt所需的紀錄狀態 + 1
    }
    if (action === 'MINUS') {
      setAltTotal(altTotal - 1); // alt所需的紀錄狀態 - 1
    }

    setSushiGroup(finalArr);
  };

  // 刪除單一層
  const deleteHandler = index => {
    let returnGroup = [...sushiGroup];
    const deleteBox = returnGroup[index]; // 要刪除的單層
    const boxGroupArr = [...returnGroup].slice(index + 1); // 剩餘群體

    const finalGroupBox = boxGroupArr.map(box => {
      return { ...box, alt: box.alt - deleteBox.height };
    }); // 減掉要刪除的單層的高度

    const finalArr = [...returnGroup.slice(0, index), ...finalGroupBox]; // 重組陣列

    setIndexTotal(indexTotal - 1);
    const deleteAltAmount = deleteBox.height / 0.125 - 1; // 依照當下刪除層厚度刪減alt高度
    setAltTotal(altTotal - deleteAltAmount);
    setSushiGroup(finalArr);
  };

  // 刪除品項
  const del = () => {
    let originalMtlArr = [...removeMtl];
    deleteHandler(originalMtlArr.length - i - 1); // index 順序顛倒
    originalMtlArr.splice(i, 1);
    setRemoveMtl(originalMtlArr);
  };

  // 數量加總計算function
  const countTotal = arr => {
    const totalPct = arr.map(pct => pct.mtlPct);
    return totalPct.reduce((x, y) => x + y);
  };

  // 輸入數量
  const countIt = count => {
    if (count <= 0 || count >= 6 || countTotal(removeMtl) > 10) {
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
  };

  // 數量-1
  const contMinus = () => {
    const newList = JSON.parse(JSON.stringify(removeMtl));

    const newCount = newList.map((v, index) => {
      if (index === i) {
        if (el.mtlPct <= 1 || countTotal(removeMtl) > 10) {
          return { ...v };
        }
        changeHeightHandler('MINUS');
        return { mtlId: mtl_id, mtlPct: el.mtlPct - 1 };
      } else {
        return { ...v };
      }
    });

    setRemoveMtl(newCount);
  };

  // 數量+1
  const countAdd = () => {
    const newList = JSON.parse(JSON.stringify(removeMtl));

    const newCount = newList.map((v, index) => {
      if (index === i) {
        if (el.mtlPct >= 5 || countTotal(removeMtl) > 9) {
          return { ...v };
        }
        changeHeightHandler('ADD');
        return { mtlId: mtl_id, mtlPct: el.mtlPct + 1 };
      } else {
        return { ...v };
      }
    });

    setRemoveMtl(newCount);
  };

  return (
    <Draggable draggableId={mtl_id + '' + i} index={i}>
      {(provided, snapshot) => {
        return (
          <div
            style={{ backgroundColor: '#c4c4c4' }}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`mtlRBtn my-3 mx-2 draggable ${
              snapshot.isDragging ? 'dragItem' : ''
            }`}
            key={mtl_id}
          >
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
                  onChange={e => countIt(+e.target.value)}
                />
                <button onClick={() => countAdd(i)}>
                  <Plus />
                </button>
              </div>
            </div>
            <Del className="mtlDelIcon" onClick={del} />
          </div>
        );
      }}
    </Draggable>
  );
}

export default MtlRBtn;
