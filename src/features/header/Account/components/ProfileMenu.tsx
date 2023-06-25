import {
  Box,
  IconButton,
} from '@mui/material';
import { MenuDivider, ProfileMenuHeader, ProfileMenuList, StyledMenu } from '.';
import { ExitItem } from './ExitItem';
import { useProfileMenu } from '../hooks/useProfileMenu';

export const ProfileMenu = () => {
  const {
    anchorEl,
    user,
    menuItemData,
    open,
    handleClick,
    handleClose,
    handleExitClose,
  } = useProfileMenu();

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Box component='img' src='icons/avatar-default.svg' alt='' width={39}/>
      </IconButton>

      <StyledMenu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
      >
        <ProfileMenuHeader user={user}/>

        <MenuDivider/>

        <ProfileMenuList menuItemData={menuItemData} handleClose={handleClose}/>

        <MenuDivider sx={{ mb: 1 }}/>

        <ExitItem text='Вийти' onClick={handleExitClose}/>
      </StyledMenu>
    </>
  );
};
