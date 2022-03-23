import config from "../../../Config";

function MtlLBtn(props) {
  const { mtl_id, mtl_name, mtl_cate, mtl_img_path, mtlActive, setMtlActive } =
    props;

  return (
    <div
      className="mtlLBtn col-8 my-3"
      onClick={() => {
        setMtlActive([...mtlActive, mtl_id]);
      }}
    >
      <div className="mtlimg">
        <img src={`${config.HOST}${mtl_img_path}`} alt={mtl_name} />
      </div>
      <div className="mtlname">{mtl_name}</div>
    </div>
  );
}

export default MtlLBtn;
