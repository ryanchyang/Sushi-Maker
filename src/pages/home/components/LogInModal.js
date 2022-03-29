import { Button, Modal } from 'react-bootstrap';

function LogInModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1 style={{ padding: '20px' }}>未登入通知</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 style={{ padding: '50px 20px' }}>
            您尚未登入會員，請先登入會員後，再行活動報名，謝謝您！
          </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2 m-3"
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
