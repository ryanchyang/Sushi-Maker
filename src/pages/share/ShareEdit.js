import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import styles from './Share.module.scss';
import config from '../../Config';
import { ReactComponent as Delete } from '../../imgs/delete-lg.svg';
import { ReactComponent as DeleteSm } from '../../imgs/del.svg';
import { ReactComponent as Plus } from '../../imgs/plus.svg';

import { useRef, useState, useEffect } from 'react';

const initFormState = {
  title: '',
  content: '',
  tags: [],
};

function ShareEdit() {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [formState, setFormState] = useState(initFormState);
  const [tagsInput, setTagsInput] = useState([]);
  const [foundTags, setFoundTags] = useState([]);

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

  const tagsInputHandler = e => {
    const value = e.target.value;
    if (value) {
      setTagsInput([{ tagInput: e.target.value }]);
    } else {
      setTagsInput([]);
    }
  };

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

  const checkSelectedTags = e => {
    const isSelected = formState.tags.some(tag => tag === e.target.innerText);
    if (!isSelected) {
      console.log(e.target.innerText);
      return [...formState.tags, e.target.innerText];
    } else {
      return formState.tags;
    }
  };

  const createSelectedTags = e => {
    return [...formState.tags, e.target.previousSibling.value];
  };

  const checkRemovedTags = e =>
    formState.tags.filter(tag => tag !== e.target.previousSibling.innerText);

  const tagsAreaHandler = () => {
    if (tagsInput.length && foundTags.length) {
      return foundTags.map((tag, i) => {
        return (
          <div
            key={i}
            className={`${styles['hash-tag-red']}`}
            onClick={e =>
              setFormState({ ...formState, tags: checkSelectedTags(e) })
            }
          >
            <div className={`d-flex align-items-center`}>
              <div className={`${styles['hashtag-tag-text']} ch-cont-14`}>
                {tag.item_hash}
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const selectedTagsHandler = () => {
    if (formState.tags.length === 0) {
      return '';
    } else {
      return (
        <div className="d-flex mt-4">
          {formState.tags.map((tag, i) => {
            return (
              <div
                key={i}
                className={`${styles['filter-hashtag-tag']} d-flex align-items-center`}
              >
                <div
                  className={`${styles['hashtag-tag-text']} ch-cont-14 mr-2`}
                >
                  {tag}
                </div>
                <DeleteSm
                  style={{ cursor: 'pointer' }}
                  onClick={e =>
                    setFormState({ ...formState, tags: checkRemovedTags(e) })
                  }
                />
              </div>
            );
          })}
        </div>
      );
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

  // const filePreviewHandler = files => {
  //   files.map(file => {
  //     const reader = new FileReader();
  //     reader.onload = function (e) {
  //       console.log(e.target.result);
  //       setFilesPreview([...filesPreview, e.target.result]);
  //     };

  //     reader.readAsDataURL(file);
  //     return 1;
  //   });
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

                    {/* form area */}
                    <div className={`col-md-12 ${styles['form-min-height']}`}>
                      <form>
                        <div className={`mb-4 form-group`}>
                          <label htmlFor="title" className="ch-cont-14">
                            標題
                          </label>
                          <input
                            type="text"
                            className={`${styles['share-input']} form-control`}
                            name="title"
                            id="title"
                            onChange={e =>
                              setFormState({
                                ...formState,
                                [e.target.name]: e.target.value,
                              })
                            }
                          />
                          <div className="text-primary">必填</div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="content" className="ch-cont-14">
                            內文
                          </label>
                          <textarea
                            className="form-control"
                            name="content"
                            id="content"
                            rows={5}
                            onChange={e =>
                              setFormState({
                                ...formState,
                                [e.target.name]: e.target.value,
                              })
                            }
                          />
                          <div className="text-primary">必填</div>
                        </div>
                        <div
                          className={`${styles['tag-form']} form-group mb-5`}
                        >
                          <label htmlFor="tag" className="ch-cont-14">
                            標籤
                          </label>
                          <div className={`${styles['tag-input']}`}>
                            <input
                              type="text"
                              className={`${styles['share-input']} form-control`}
                              name="tag"
                              id="tag"
                              onChange={e => tagsInputHandler(e)}
                            />
                            <Plus
                              className={`${styles['tag-input-plus']}`}
                              onClick={e =>
                                setFormState({
                                  ...formState,
                                  tags: createSelectedTags(e),
                                })
                              }
                            />
                          </div>
                          {/* tags area */}
                          {selectedTagsHandler()}
                          <div
                            className={`${styles['hashtag-box']} d-flex mt-4 flex-wrap`}
                          >
                            {tagsAreaHandler()}
                          </div>
                        </div>
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
                            type="submit"
                            className={`${styles['primeal-btn-sm']} btn-sm btn-primary`}
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
