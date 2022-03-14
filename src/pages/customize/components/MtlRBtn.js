import { ReactComponent as Del } from '../../../imgs/del.svg';

function MtlRBtn() {
  return (
    <div className="mtlRBtn my-3 mx-4">
      <div className="mtlimg-r">
        <img src="img/mtl/f2b74d288e7123720ac3fe25345f1eae.jfif" alt="" />
      </div>
      <div className="mtlname-r ch-cont-16 col px-4">例如鮭魚</div>
      <Del className="mtlDelIcon" />
    </div>
  );
}

export default MtlRBtn;
