import { Button, Modal } from 'react-bootstrap';

function SignUpModal(props) {
  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title className="en-cont-30 m-3">活動報名結果</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.signUpResult ? (
            <div className="en-cont-14 pb-2">
              您已成功報名，請至您的信箱查看活動確認信， 感謝您的報名！
            </div>
          ) : (
            <div className="en-cont-14 pb-2">
              報名人數超出活動上限人數，報名未成功，請重新提交，謝謝！
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
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
