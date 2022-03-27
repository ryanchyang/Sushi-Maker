import React, { useState, useEffect, forwardRef } from 'react';
import { useHistory } from 'react-router-dom';

// import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Masonry from '@mui/lab/Masonry';

import HeartTemplate from './HeartTemplate';
import ItemInfoTemplate from './ItemInfoTemplate';
import ItemSavesTemplate from './ItemSavesTemplate';

import { ReactComponent as SearchBtn } from '../../../imgs/search.svg';

import styles from '../Share.module.scss';
import config from '../../../Config';

// import { ReactComponent as Heart } from '../../../imgs/heart.svg';
// import { ReactComponent as HeartOutline } from '../../../imgs/heart-outline.svg';
// import { ReactComponent as HeartFill } from '../../../imgs/heart-fill.svg';

const savesHandler = data => {
  const savesArr = data.filter(item => item.isSaved === true);
  return savesArr;
};

const hoverHandler = (id, hover) => {
  let obj = {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    opacity: 1,
    transition: '0.2s',
  };
  if (hover === id) {
    return obj;
  } else {
    return { ...obj, opacity: 0 };
  }
};

export const MyMasonry = forwardRef((props, ref) => {
  const { columns, gap, data, noFound = '', itemId = '' } = props;
  const history = useHistory(null);

  const [saves, setSaves] = useState([]);
  const [hover, setHover] = useState(-1);

  useEffect(() => {
    setSaves(savesHandler(data));
  }, [data]);

  const goToItem = e => {
    const itemId = e.target.dataset.item;
    history.push(`/share/items/${itemId}`);
  };
  // console.log(saves);

  const noFoundTemplate = () => {
    return (
      <div className="ch-title-22 d-flex justify-content-center">
        <SearchBtn />
        <span>{noFound}</span>
      </div>
    );
  };

  const masonryTemplate = () => {
    return (
      <Masonry columns={columns} spacing={gap * 1.2} style={{ margin: '0' }}>
        {data.map((item, i) =>
          +itemId === item?.share_item_id ? (
            <></>
          ) : (
            <ImageListItem
              key={i}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(-1)}
              style={{ paddingBottom: '30px' }}
            >
              <img
                src={
                  config.HOST +
                  `/${item.share_imgPath}?w=500&fit=crop&auto=format`
                }
                srcSet={
                  config.HOST +
                  `/${item.share_imgPath}?w=500&fit=crop&auto=format&dpr=2 2x`
                }
                alt={item.share_title}
                loading="lazy"
                data-item={item.share_item_id}
                onClick={e => {
                  goToItem(e);
                }}
                className={`${styles['image-list-img']}`}
              />
              <ImageListItemBar
                position="below"
                title={
                  <ItemInfoTemplate
                    memPhoto={item.mem_photo_img_path}
                    memNickname={item.mem_nickname}
                  />
                }
                actionIcon={<ItemSavesTemplate savesCount={item.saves_count} />}
              />
              <ImageListItemBar
                position="top"
                sx={hoverHandler(i, hover)}
                title={item.share_title}
                subtitle={item.share_desc}
                actionIcon={
                  <HeartTemplate
                    saves={saves}
                    setSaves={setSaves}
                    item={item}
                  />
                }
              />
            </ImageListItem>
          )
        )}
      </Masonry>
    );
  };

  return (
    <div className={`flex-column ${styles['masonry-index']}`} ref={ref}>
      {noFound ? noFoundTemplate() : ''}
      {data.length === 0 ? '' : masonryTemplate()}
    </div>
  );
});

export default MyMasonry;
