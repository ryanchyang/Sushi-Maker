import { Button, Modal } from 'react-bootstrap';
import format from 'date-fns/format';
import { getMemId } from '../../../utils';
import config from '../../../Config';

function DeleteActiveModal(props) {
  const { modalShow, setModalShow, selected, onHide } = props;

  const date = format(new Date(selected.start), 'yyyy/MM/dd');
  const start = format(new Date(selected.start), 'hh:mm');
  const end = format(new Date(selected.end), 'hh:mm');
  const evnts_id = selected.evnts_id;
  const mem_id = getMemId();

  const cancelHandler = e => {
    e.preventDefault();
    const dataObj = {};
    dataObj.mem_id = mem_id;
    dataObj.evnts_id = evnts_id;
    console.log({ dataObj });

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
          console.log('delete success');
          setModalShow(false);
        }
      });
  };

  return (
    <>
      {' '}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1 style={{ padding: '20px' }}>活動詳情</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ padding: '15px 20px' }}>
            <h2 style={{ lineHeight: '30px' }}>活動名稱：{selected.title}</h2>
            <h2 style={{ lineHeight: '30px' }}>活動日期：{date}</h2>
            <h2 style={{ lineHeight: '30px' }}>
              活動時間：{start}-{end}
            </h2>
            <h2 style={{ lineHeight: '30px' }}>活動地點：{selected.desc}</h2>
            <h2 style={{ lineHeight: '30px' }}>
              報名人數：{selected.evnts_signup_number}人
            </h2>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2"
            onClick={onHide}
          >
            關閉視窗
          </Button>
          <Button
            variant="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2 m-3"
            onClick={cancelHandler}
          >
            提交取消
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteActiveModal;
