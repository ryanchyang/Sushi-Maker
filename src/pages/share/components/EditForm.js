import styles from '../Share.module.scss';

import { ReactComponent as Plus } from '../../../imgs/plus.svg';
import { ReactComponent as DeleteSm } from '../../../imgs/del.svg';

const EditForm = props => {
  const { formState, setFormState, tagsInput, foundTags, setTagsInput } = props;

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

  const checkRemovedTags = e =>
    formState.tags.filter(tag => tag !== e.target.previousSibling.innerText);

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

  const tagsInputHandler = e => {
    const value = e.target.value;
    if (value) {
      setTagsInput([{ tagInput: e.target.value }]);
    } else {
      setTagsInput([]);
    }
  };

  return (
    <>
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
      <div className={`${styles['tag-form']} form-group mb-5`}>
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
        <div className={`${styles['hashtag-box']} d-flex mt-4 flex-wrap`}>
          {tagsAreaHandler()}
        </div>
      </div>
    </>
  );
};

export default EditForm;
