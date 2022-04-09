import { ReactComponent as HeartOutline } from '../../../imgs/heart-outline.svg';
import { ReactComponent as HeartFill } from '../../../imgs/heart-fill.svg';
import IconButton from '@mui/material/IconButton';

import config from '../../../Config';

function HeartTemplate(props) {
  const { saves, setSaves, item } = props;

  //Get member id
  const memId = localStorage.getItem('mem_id');

  const isSaveItem = saves.some(
    save => save.share_item_id === item.share_item_id
  );

  const toggleSaveItem = async (itemId, action) => {
    try {
      let method;
      if (action === 'ADD') {
        method = 'POST';
      }
      if (action === 'REMOVE') {
        method = 'DELETE';
      }

      const response = await fetch(config.TOGGLE_SAVE, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId: itemId, memberId: memId }),
      });
      if (!response.ok) throw new Error('Something went wrong!');
    } catch (err) {
      console.error(err.message);
    }
  };

  if (isSaveItem) {
    return (
      <IconButton
        sx={{ color: 'rgba(255, 100, 100, 0.9)' }}
        aria-label={`info about ${item.share_title}`}
        onClick={() => {
          setSaves(
            saves.filter(save => save.share_item_id !== item.share_item_id)
          );
          toggleSaveItem(item.share_item_id, 'REMOVE');
        }}
      >
        <HeartFill style={{ padding: '0 5px' }} />
      </IconButton>
    );
  } else {
    return (
      <IconButton
        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
        aria-label={`info about ${item.share_title}`}
        onClick={() => {
          setSaves([...saves, item]);
          toggleSaveItem(item.share_item_id, 'ADD');
        }}
      >
        <HeartOutline style={{ padding: '0 5px' }} />
      </IconButton>
    );
  }
}

export default HeartTemplate;
