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

        // 3D 增加單層
        setIndexTotal(indexTotal + 1);
        setSushiGroup([
          ...sushiGroup,
          {
            map: config.HOST + mtl_3d_img_path,
            normalMap: config.HOST + mtl_3d_normalmap_img_path,
            height: 0.125, // 單層高度
            alt: altTotal * 0.125,
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
