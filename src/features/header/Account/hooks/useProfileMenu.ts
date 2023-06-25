import { useContext, useState } from 'react';
import { authCtx } from 'src/common/context/AuthCtx';
import { useUser } from 'src/common/hooks/useUser';
import { useMenuItems } from './useMenuItems';
import { THandleClick } from '../interface';

export const useProfileMenu = () => {
  const { setIsAuth } = useContext(authCtx);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const user = useUser();
  const menuItemData = useMenuItems();
  const open = Boolean(anchorEl);
  const handleClick: THandleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleExitClose = () => {
    handleClose();
    setIsAuth(false);
  };

  return {
    anchorEl,
    user,
    menuItemData,
    open,
    handleClick,
    handleClose,
    handleExitClose,
  };
};
