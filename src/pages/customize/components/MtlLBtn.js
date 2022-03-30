import config from '../../../Config';

function MtlLBtn(props) {
  const { mtl_id, mtl_name, mtl_img_path, mtlActive, setMtlActive, addclass } =
    props;
  // console.log('mtlActive:', mtlActive);

  // 判斷總層數不可大於10
  const countTotal = (arr) => {
    const totalPct = arr.map((pct) => pct.mtlPct);
    return totalPct.reduce((x, y) => x + y);
  };

  return (
    <div
      className="mtlLBtn col-8 my-3"
      onClick={() => {
        if (countTotal(mtlActive) >= 10 ) {
          return false;
        }
        const newList = [...mtlActive];
        newList.unshift({ mtlId: mtl_id, mtlPct: 1 });
        // setMtlActive([mtl_id, ...mtlActive]);
        setMtlActive(newList);
      }}
    >
      <div className="mtlimg">
        <img
          src={`${config.HOST}${mtl_img_path}`}
          alt={mtl_name}
          className={addclass ? 'imgActive' : 'imgActiveNone'}
        />
      </div>
      <div className="mtlname">{mtl_name}</div>
    </div>
  );
}

export default MtlLBtn;
