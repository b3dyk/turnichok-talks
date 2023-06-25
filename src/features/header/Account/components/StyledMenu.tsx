import { Menu, MenuProps } from '@mui/material';

export const StyledMenu = ({ anchorEl, id, open, onClose, children }: MenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id={id}
      open={open}
      onClose={onClose}
      MenuListProps={{ sx: { pt: 1 } }}
      PaperProps={{
        elevation: 0,
        sx: {
          mt: 2,
          color: 'secondary.mainText',
          backgroundColor: 'secondary.main',
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {children}
    </Menu>
  );
};
