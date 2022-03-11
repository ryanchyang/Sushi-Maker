import React from 'react';
// import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

import styles from '../Share.module.scss';

import { ReactComponent as Heart } from '../../../imgs/heart.svg';
import { useState, useEffect } from 'react';
import useCurrentWidth from '../hooks/useCurrentWidth';

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
};

const getColumns = width => {
  if (width < breakpoints.sm) {
    return 2;
  } else if (width < breakpoints.md) {
    return 2;
  } else if (width < breakpoints.lg) {
    return 3;
  } else {
    return 4;
  }
};

export default function Masonry() {
  const currentWidth = useCurrentWidth();
  const [columns, setColumns] = useState(getColumns(currentWidth));
  const [hover, setHover] = useState(-1);

  const updateDimensions = () => {
    setColumns(getColumns(currentWidth));
  };

  const hoverHandler = i => {
    let obj = {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      opacity: 1,
      transition: '0.2s',
    };
    if (hover === i) {
      return obj;
    } else {
      return { ...obj, opacity: 0 };
    }
  };

  useEffect(() => {
    updateDimensions();
  }, [currentWidth]);

  return (
    <div className={`d-flex flex-column`}>
      <ImageList variant="masonry" cols={columns} gap={columns * 10}>
        {itemData.map((item, i) => (
          <ImageListItem
            key={i}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(-1)}
          >
            <img
              src={`${item.img}?w=450&fit=crop&auto=format`}
              srcSet={`${item.img}?w=450&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={hoverHandler(i)}
              title={item.title}
              subtitle={item.desc}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <Heart style={{ padding: '0 5px' }} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
    desc: 'The Mastering the Mechanics webinar series also describes required sentence elements and varying sentence types. Please see these archived webinars for more information.',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];
