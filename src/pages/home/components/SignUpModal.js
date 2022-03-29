import { Button, Modal } from 'react-bootstrap';

function SignUpModal(props) {
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
            <h1 style={{ padding: '20px' }}>活動報名結果</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.signUpResult ? (
            <h3 style={{ padding: '50px 20px' }}>
              您已成功報名，請至您的信箱查看活動確認信， 感謝您的報名！
            </h3>
          ) : (
            <h3 style={{ padding: '50px 20px' }}>
              報名人數超出活動上限人數，報名未成功，請重新提交，謝謝！
            </h3>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="btn btn-sm btn-primary primeal-btn-sm mx-md-4 mx-2 m-3"
            onClick={props.onHide}
          >
            確認
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignUpModal;
