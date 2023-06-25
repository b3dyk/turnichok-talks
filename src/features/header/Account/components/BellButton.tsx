import { IconButton } from '@mui/material';
import { Bell } from 'src/common/icons';
import { useState } from 'react';

export const BellButton = () => {
  const [isUnread, setIsUnread] = useState(false);

  return (
    <IconButton onClick={() => setIsUnread(!isUnread)}>
      <Bell isUnread={isUnread} />
    </IconButton>
  );
};
