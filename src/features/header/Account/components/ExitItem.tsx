import { ListItemIcon, MenuItem, Typography } from '@mui/material';
import { Logout } from '@mui/icons-material';

interface Props {
  text: string
  onClick: () => void
}

export const ExitItem = ({ text, onClick }: Props) => (
  <MenuItem onClick={onClick}>
    <ListItemIcon>
      <Logout sx={{ color: 'secondary.mainText' }}/>
    </ListItemIcon>
    <Typography
      variant='p1'
      color='secondary.mainText'
    >
      {text}
    </Typography>
  </MenuItem>
);
