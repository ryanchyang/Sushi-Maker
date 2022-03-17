import { Title } from './../layout/Layout';
import './customize.scss';
import MtlLeft from './components/MtlLeft';
import MtlMid from './components/MtlMid';
import MtlRight from './components/MtlRight';

function Customize() {
  return (
    <>
      <div className="mtlHeader">
        <Title />
      </div>
      <div className="container-fluid customize">
        <div className="row mtlView">
          <MtlLeft />
          <MtlMid />
          <MtlRight />
        </div>
      </div>
    </>
  );
}

export default Customize;
