import { useRef } from 'react';
import styles from '../Share.module.scss';

import { ReactComponent as Plus } from '../../../imgs/plus.svg';
import { ReactComponent as DeleteSm } from '../../../imgs/del.svg';

const EditImgPreview = props => {
  const { files, setFiles } = props;
  const fileInputRef = useRef(null);

  const fileDeleteHandler = delFile => {
    const fileArr = files.filter(file => file.name !== delFile.name);
    setFiles(fileArr);
  };

  const createPreviewTemplate = files => {
    return files.map(file => {
      return (
        <div className="col-12" key={file.size}>
          <div className={`${styles['edit-preview-box']} d-flex flex-column `}>
            <div
              className={`${styles['edit-preview-title']} d-flex justify-content-between mb-3`}
            >
              <div className="ch-cont-14 font-weight-bold pt-2">1</div>
              <DeleteSm
                className={`${styles['edit-del-button']}`}
                onClick={() => fileDeleteHandler(file)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <div className={`${styles['share-edit-preview']}`}>
                <img src={URL.createObjectURL(file)} alt="" />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="col-12 d-none d-md-block">
      <form>
        <div className="form-group">
          <input
            ref={fileInputRef}
            type="file"
            className="form-control-file"
            id="images"
            multiple
            style={{ display: 'none' }}
            onChange={e => {
              setFiles([...files, ...e.target.files]);
            }}
          />
        </div>
      </form>
      <div className=" d-flex flex-wrap">
        {/* preview box */}
        {createPreviewTemplate(files)}
        {/* upload plus box */}
        <div className="col-12">
          <div
            className={`${styles['share-edit-attach']} d-flex flex-column align-items-center justify-content-center`}
            onClick={() => {
              fileInputRef.current.click();
            }}
          >
            <Plus />
            <div className="ch-cont-14"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditImgPreview;