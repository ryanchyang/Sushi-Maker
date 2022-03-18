import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import HeartTemplate from './HeartTemplate';

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
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
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

// const heartTemplate = (id, saves) => {
//   const isSaveItem = saves.some(save => save.share_item_id === id);
//   if (isSaveItem) {
//     return <HeartFill style={{ padding: '0 5px' }} onClick={() => {}} />;
//   } else {
//     return <HeartOutline style={{ padding: '0 5px' }} />;
//   }
// };

export default function Masonry(props) {
  const { columns, gap, data } = props;

  const [saves, setSaves] = useState([]);
  const [hover, setHover] = useState(-1);

  useEffect(() => {
    setSaves(savesHandler(data));
  }, [data]);

  console.log(saves);

  return (
    <div className={`flex-column ${styles['masonry-index']} `}>
      <ImageList variant="masonry" cols={columns} gap={gap * 10}>
        {data.map((item, i) => (
          <ImageListItem
            key={item.share_item_id}
            onMouseEnter={() => setHover(item.share_item_id)}
            onMouseLeave={() => setHover(-1)}
          >
            <img
              src={
                config.HOST +
                `/${item.share_imgPath}?w=450&fit=crop&auto=format`
              }
              srcSet={
                config.HOST +
                `/${item.share_imgPath}?w=450&fit=crop&auto=format&dpr=2 2x`
              }
              alt={item.share_title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={hoverHandler(item.share_item_id, hover)}
              title={item.share_title}
              subtitle={item.share_desc}
              actionIcon={
                <HeartTemplate saves={saves} setSaves={setSaves} item={item} />
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//     title: 'Bed',
//     desc: 'The Mastering the Mechanics webinar series also describes required sentence elements and varying sentence types. Please see these archived webinars for more information.',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//     title: 'Books',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//     title: 'Sink',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//     title: 'Kitchen',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//     title: 'Blinds',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//     title: 'Chairs',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//     title: 'Laptop',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//     title: 'Doors',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//     title: 'Storage',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//     title: 'Candle',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     title: 'Coffee table',
//   },
// ];
