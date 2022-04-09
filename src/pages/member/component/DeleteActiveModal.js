import { Button, Modal } from 'react-bootstrap';
import format from 'date-fns/format';
import { getMemId } from '../../../utils';
import config from '../../../Config';

function DeleteActiveModal(props) {
  const { modalShow, setModalShow, selected, onHide } = props;

  const date = format(new Date(selected.start), 'yyyy/MM/dd');
  const start = format(new Date(selected.start), 'HH:mm');
  const end = format(new Date(selected.end), 'HH:mm');
  const evnts_id = selected.evnts_id;
  const evnts_signup_number = selected.evnts_signup_number;
  const evnts_title = selected.title;
  const evnts_location = selected.desc;
  const mem_id = getMemId();
  const mem_name = localStorage.getItem('mem_name');

  const cancelHandler = e => {
    e.preventDefault();
    const dataObj = {};
    dataObj.mem_id = mem_id;
    dataObj.evnts_id = evnts_id;
    dataObj.evnts_signup_number = evnts_signup_number;
    dataObj.evnts_title = evnts_title;
    dataObj.mem_name = mem_name;
    // console.log({ dataObj });

    const r = fetch(config.CANCEL_ACTIVE_PATH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataObj),
    })
      .then(r => r.json())
      .then(obj => {
        if (obj.success) {
          // console.log('delete success');
          setModalShow(false);
        }
      });
  };

  return (
    <>
      {' '}
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title className="en-cont-30 m-3">活動詳情</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ margin: '0 3%' }}>
          <div className="en-cont-14 pb-2">活動名稱：{evnts_title}</div>
          <div className="en-cont-14 pb-2">活動名稱：活動日期：{date}</div>
          <div className="en-cont-14 pb-2">
            活動名稱：活動時間：{start}-{end}
          </div>
          <div className="en-cont-14 pb-2">
            活動名稱：活動地點：{evnts_location}
          </div>
          <div className="en-cont-14 pb-2">
            活動名稱：報名人數：{evnts_signup_number}人
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btn btn-sm btn-primary primeal-btn-sm"
            onClick={onHide}
          >
            關閉視窗
          </Button>
          <Button
            variant="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
            onClick={cancelHandler}
          >
            取消報名
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteActiveModal;
