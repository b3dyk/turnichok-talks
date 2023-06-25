import { useState } from 'react';
import { TToggleDrawer } from '../interface';

export const useMenuSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer:TToggleDrawer = (open: boolean) => (event) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };

  return {
    isOpen,
    setIsOpen,
    onClose: toggleDrawer(false),
    onOpen: toggleDrawer(true),
  };
};
