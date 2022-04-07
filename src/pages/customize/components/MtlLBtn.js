import config from '../../../Config';

function MtlLBtn(props) {
  const {
    mtl_id,
    mtl_name,
    mtl_img_path,
    mtlActive,
    setMtlActive,
    addclass,
    mtl_3d_img_path,
    mtl_3d_normalmap_img_path,
    altTotal,
    setAltTotal,
    indexTotal,
    setIndexTotal,
    sushiGroup,
    setSushiGroup,
  } = props;
 

 // 總層數加法
 const countTotal = arr => {
  const totalPct = arr.map(pct => pct.mtlPct);
  return totalPct.reduce((x, y) => x + y);
};

  return (
    <div
      className="mtlLBtn col-8 my-3"
      onClick={() => {
        if (countTotal(mtlActive) >= 10) {
          return false;
        }
        const newList = [...mtlActive];
        newList.unshift({ mtlId: mtl_id, mtlPct: 1 });
        // setMtlActive([mtl_id, ...mtlActive]);
        setMtlActive(newList);
        
        // three add sushi
        setIndexTotal(indexTotal + 1);
        setSushiGroup([
          ...sushiGroup,
          {
            map: mtl_3d_img_path,
            normalMap: mtl_3d_normalmap_img_path,
            height: 0.125,
            alt: altTotal * 0.125, // 預設增加高度
            fixIndex: indexTotal + 1,
          },
        ]);
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
