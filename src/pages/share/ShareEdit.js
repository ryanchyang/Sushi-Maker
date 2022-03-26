import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import styles from './Share.module.scss';
import config from '../../Config';

import { ReactComponent as Delete } from '../../imgs/delete-lg.svg';
import EditImgPreview from './components/EditImgPreview';
import EditForm from './components/EditForm';

import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const initFormState = {
  title: '',
  content: '',
  tags: [],
};

function ShareEdit() {
  const [files, setFiles] = useState([]);
  const [formState, setFormState] = useState(initFormState);
  const [tagsInput, setTagsInput] = useState([]);
  const [foundTags, setFoundTags] = useState([]);
  const location = useLocation(null);
  const history = useHistory(null);
  const { orderId, orderName } = location.state;

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

  const submitUpload = async e => {
    e.preventDefault();
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
      const itemsObj = await response.json();
      return itemsObj;
    } catch (err) {
      console.error(err.message);
    }
  };

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

  // const fileInputHandler = () => {
  //   if (!fileInputRef.current) return '新增、拖曳照片';
  //   let filesLength = fileInputRef.current.files.length;
  //   if (filesLength !== 0) return `選擇${filesLength}個檔案`;
  // };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Share'} />

          <div className={`mycontainer`}>
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-between">
                  <p className="mytitle en-title-14-10">
                    HOME / SHARE / UPLOAD
                  </p>
                  <div className="d-flex align-items-center">
                    <Delete className="mx-md-4 p-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles['waterfall-container']}`}>
            <div className="container">
              <div className="row">
                <div className="col d-flex flex-column">
                  <div className="col">
                    <h2 className={`${styles['share-edit-header']} mb-5`}>
                      新增貼文
                    </h2>
                  </div>
                  <div className="d-flex">
                    {/* Image preview area */}
                    <EditImgPreview files={files} setFiles={setFiles} />
                    {/* form area */}
                    <div className={`col-md-12 ${styles['form-min-height']}`}>
                      <form>
                        <EditForm
                          initFormState={initFormState}
                          formState={formState}
                          setFormState={setFormState}
                          setFiles={setFiles}
                          tagsInput={tagsInput}
                          foundTags={foundTags}
                          setTagsInput={setTagsInput}
                          orderName={orderName}
                        />
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className={`${styles['primeal-btn-outline-sm']} btn-sm btn-outline-primary mr-3`}
                            onClick={() => {
                              setFormState(initFormState);
                              setFiles([]);
                            }}
                          >
                            清除
                          </button>
                          <button
                            className={`${styles['primeal-btn-sm']} btn-sm btn-primary`}
                            onClick={e => {
                              submitUpload(e);
                              history.push('/share/upload');
                            }}
                          >
                            分享
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default ShareEdit;
