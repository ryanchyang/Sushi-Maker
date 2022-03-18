import { ReactComponent as HeartOutline } from '../../../imgs/heart-outline.svg';
import { ReactComponent as HeartFill } from '../../../imgs/heart-fill.svg';
import IconButton from '@mui/material/IconButton';

function HeartTemplate(props) {
  const { saves, setSaves, item } = props;
  const isSaveItem = saves.some(
    save => save.share_item_id === item.share_item_id
  );
  if (isSaveItem) {
    return (
      <IconButton
        sx={{ color: 'rgba(255, 100, 100, 0.9)' }}
        aria-label={`info about ${item.share_title}`}
      >
        <HeartFill
          style={{ padding: '0 5px' }}
          onClick={() => {
            setSaves(
              saves.filter(save => save.share_item_id !== item.share_item_id)
            );
          }}
        />
      </IconButton>
    );
  } else {
    return (
      <IconButton
        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
        aria-label={`info about ${item.share_title}`}
      >
        <HeartOutline
          style={{ padding: '0 5px' }}
          onClick={() => {
            setSaves([...saves, item]);
          }}
        />
      </IconButton>
    );
  }
}

export default HeartTemplate;
