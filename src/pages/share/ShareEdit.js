import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import styles from './Share.module.scss';
import config from '../../Config';
import { getMemId } from '../../utils';

import { ReactComponent as Delete } from '../../imgs/delete-lg.svg';
import EditImgPreview from './components/EditImgPreview';
import EditForm from './components/EditForm';
import NavPage from '../layout/components/NavPage';

import { useState, useEffect } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';

import { Button, Modal } from 'react-bootstrap';

const initFormState = {
  title: '',
  content: '',
  tags: [],
};

const initErrorState = {
  title: '',
  content: '',
  files: '',
};

function ShareEdit(props) {
  const [files, setFiles] = useState([]);
  const [formState, setFormState] = useState(initFormState);
  const [errorState, setErrorState] = useState(initErrorState);
  const [formIsValid, setFormIsValid] = useState(true);
  const [tagsInput, setTagsInput] = useState([]);
  const [foundTags, setFoundTags] = useState([]);

  // 取得用戶id
  const mem_id = getMemId();

  // 加入購物車光箱
  const [show, setShow] = useState(false);

  //加入NAVBar漢堡選單開關
  const showBlock = { display: 'block' };
  const hiddenBlock = { display: 'none' };
  const { navIsOpen, setNavIsOpen } = props; // 解構NAVBAR

  const location = useLocation(null);
  const history = useHistory(null);
  const {
    action = 'ADD',
    shareId = '',
    orderId,
    orderName = '',
    shareTitle = '',
    shareDesc = '',
    itemImgs,
    shareTags = [],
    orderCate = '',
  } = location.state || {};

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getFoundTags = async () => {
    try {
      const response = await fetch(config.GET_TAGS, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(tagsInput[0]),
      });
      if (!response.ok) throw new Error('No tags found!');
      const itemsObj = await response.json();
      return itemsObj;
    } catch (err) {
      console.error(err.message);
    }
  };

  const checkFormValidity = e => {
    e.preventDefault();

    if (!formState.title || !formState.content || files.length === 0) {
      setFormIsValid(false);
      return;
    }
    if (action === 'UPDATE') {
      submitUpdate();
    }
    if (action === 'ADD') {
      submitUpload();
    }
  };

  const submitUpload = async () => {
    try {
      if (!orderId) throw new Error('Unsuccessful upload !');

      const submitForm = { ...formState };
      const fd = new FormData();
      const formArr = Object.entries(submitForm);
      formArr.map(arr => {
        return fd.append(arr[0], arr[1]);
      });

      // insert order id and images into formdata
      fd.append('orderId', orderId);
      files.map(file => fd.append('files', file));

      const response = await fetch(config.UPLOAD_POST, {
        method: 'POST',
        'Content-Type': 'multipart/form-data',
        body: fd,
      });
      if (!response.ok) throw new Error('Unsuccessful upload !');
      handleShow();
    } catch (err) {
      console.error(err.message);
    }
  };

  const submitUpdate = async () => {
    try {
      if (!orderId) throw new Error('Unsuccessful upload !');

      let updateFiles = [...files];
      updateFiles = updateFiles.map((file, i) => {
        return { ...file, share_img_order: i + 1 };
      });

      const updateForm = {
        ...formState,
        images: updateFiles,
        shareId,
      };

      const response = await fetch(config.UPDATE_POST, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateForm),
      });
      if (!response.ok) throw new Error('Unsuccessful update !');
      handleShow();
    } catch (err) {
      console.error(err.message);
    }
  };

  const creditAmountHandler = () => {
    const cateCredits = [
      { cate: 'cs', credit: 300 },
      { cate: 'cm', credit: 500 },
      { cate: 'set', credit: 800 },
    ];

    const amount = cateCredits.find(cateObj => cateObj.cate === orderCate);

    return amount.credit;
  };

  const addCreditHandler = async () => {
    const res = await fetch(
      config.ADD_CREDIT + `${mem_id}/${creditAmountHandler()}`
    );
    const result = res.json();
    if (result.success) {
      // console.log('積分已加入資料庫');
    }
  };

  const modal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="en-cont-30 m-3">提醒</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ margin: '0 3%' }}>
        <div className="en-cont-14 pb-2">
          {action === 'UPDATE'
            ? '您的貼文已編輯成功!'
            : `您的貼文上傳成功! 恭喜您獲得會員積分${creditAmountHandler()}點!`}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-sm btn-primary primeal-btn-sm mx-5 m-3"
          onClick={() => {
            if (action === 'ADD') {
              // console.log('新增積分300點');
              addCreditHandler();
            }
            history.push('/share');
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  // Finding tags when tag input changed
  useEffect(() => {
    if (Object.keys(tagsInput).length === 0) return;
    (async () => {
      const result = await getFoundTags();
      if (!result) {
        setFoundTags([]);
      } else {
        setFoundTags(result.data);
      }
    })();
  }, [tagsInput]);

  useEffect(() => {
    setFormState({
      title: shareTitle,
      content: shareDesc,
      tags: shareTags.map(tag => tag.item_hash),
    });

    if (action === 'UPDATE') setFiles(itemImgs);
  }, []);

  // const fileInputHandler = () => {
  //   if (!fileInputRef.current) return '新增、拖曳照片';
  //   let filesLength = fileInputRef.current.files.length;
  //   if (filesLength !== 0) return `選擇${filesLength}個檔案`;
  // };

  return (
    <>
      {modal}
      <Header />
      {navIsOpen && (
        <NavPage navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      )}
      <div style={navIsOpen ? hiddenBlock : showBlock}>
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={'Share'} setNavIsOpen={setNavIsOpen} />

            <div className={`mycontainer  ${styles['share-bread']}`}>
              <div className="row">
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <div className="pt-3 pt-md-0">
                      <p className="en-title-14-10 d-flex">
                        <Link
                          to={'/'}
                          style={{ textDecoration: 'none', color: '#575757' }}
                        >
                          HOME/&nbsp;
                        </Link>
                        <Link
                          to={'/share'}
                          style={{ textDecoration: 'none', color: '#575757' }}
                        >
                          SHARE/&nbsp;
                        </Link>
                        <Link
                          to={`/share/edit`}
                          style={{ textDecoration: 'none', color: '#b03342' }}
                        >
                          {action === 'UPDATE' ? 'EDIT' : 'UPLOAD'}
                        </Link>
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <Delete
                        className={`${styles['large-del']} mx-md-4 p-2`}
                        onClick={() => history.goBack(-1)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${styles['waterfall-container']} ${styles['edit-min-height']}`}
            >
              <div className="container">
                <div className="row">
                  <div className="col d-flex flex-column">
                    <div className="col">
                      <h2 className={`${styles['share-edit-header']} mb-5`}>
                        {action === 'UPDATE' ? '編輯貼文' : '分享貼文'}
                      </h2>
                    </div>
                    <div className="d-flex">
                      {/* Image preview area */}
                      <EditImgPreview
                        files={files}
                        setFiles={setFiles}
                        errorState={errorState}
                        action={action}
                      />
                      {/* form area */}
                      <div className={`col-md-12 ${styles['form-min-height']}`}>
                        <form>
                          <EditForm
                            formState={formState}
                            setFormState={setFormState}
                            setFiles={setFiles}
                            tagsInput={tagsInput}
                            foundTags={foundTags}
                            setTagsInput={setTagsInput}
                            orderName={orderName}
                            errorState={errorState}
                            setErrorState={setErrorState}
                            files={files}
                            formIsValid={formIsValid}
                          />
                          <div className="d-flex justify-content-end">
                            <button
                              type="reset"
                              className={`${styles['primeal-btn-outline-sm']} btn-sm btn-outline-primary mr-3`}
                              onClick={() => {
                                setFormState(initFormState);
                                if (action !== 'UPDATE') setFiles([]);
                              }}
                            >
                              清除
                            </button>
                            <button
                              className={`${styles['primeal-btn-sm']} btn-sm btn-primary`}
                              onClick={e => {
                                checkFormValidity(e);
                              }}
                            >
                              {action === 'UPDATE' ? '編輯' : '分享'}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <AsideRight setNavIsOpen={setNavIsOpen} />
        </div>
      </div>
    </>
  );
}

export default ShareEdit;
