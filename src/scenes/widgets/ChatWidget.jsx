import Popover from '@mui/material/Popover';
import { useState } from 'react';
import { Message } from '@mui/icons-material';
import Chat from '../../components/Chat';

const ChatWidget = () =>  {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Message sx={{ fontSize: "25px" }} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Chat />
      </Popover>
    </div>
  );
}

export default ChatWidget;