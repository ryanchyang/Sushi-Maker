import { ReactComponent as Del } from '../../../imgs/del.svg';
import config from '../../../Config';

function MtlRBtn(props) {
  const {
    mtl_id,
    mtl_name,
    mtl_cate,
    mtl_img_path,
    removeMtl,
    setRemoveMtl,
    i,
  } = props;
  // console.log(props);
  const del = () => {
    let originalMtlArr = removeMtl;
    let removeMtlArr = removeMtl.splice(i, 1);
    setRemoveMtl(removeMtlArr);
  };

  return (
    <div className="mtlRBtn my-3 mx-4" key={mtl_id}>
      <div className="mtlimg-r">
        <img src={`${config.HOST}${mtl_img_path}`} alt={mtl_name} />
      </div>
      <div className="mtlname-r ch-cont-16 col px-4">{mtl_name}</div>
      <Del className="mtlDelIcon" onClick={del} />
    </div>
  );
}

export default MtlRBtn;
