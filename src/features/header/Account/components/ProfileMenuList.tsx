import { Icon, ListItemIcon, MenuItem, Typography } from '@mui/material';
import Link from 'next/link';
import { IMenuItem, THandleClick } from '..';

interface Props {
  menuItemData: IMenuItem[]
  handleClose: THandleClick
}

export const ProfileMenuList = ({ menuItemData, handleClose }: Props) => (
  <>
    {menuItemData.map(({ id, url, text, ReactIcon }) => (
      <Link key={id} href={url}>
        <MenuItem onClick={handleClose} sx={{ alignItems: 'stretch' }}>
          <ListItemIcon color='secondary.mainText'>
            <Icon sx={{ color: 'secondary.mainText' }}>
              <ReactIcon/>
            </Icon>
          </ListItemIcon>
          <Typography variant='p1' color='secondary.mainText'>{text}</Typography>
        </MenuItem>
      </Link>
    ))}
  </>
);
