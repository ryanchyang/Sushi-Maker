import { Button, Modal } from 'react-bootstrap';

function LogInModal(props) {
  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title className="en-cont-30 m-3">提醒</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ margin: '0 3%' }}>
          <div className="en-cont-14 pb-2">
            您尚未登入會員，請先登入會員後，再報名活動，謝謝您！
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
            onClick={props.onHide}
          >
            前往登入
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default LogInModal;
