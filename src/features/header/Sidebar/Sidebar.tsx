import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { BurgerMenu } from 'src/common/icons';
import { useMenuSidebar } from './hooks';
import { SidebarDrawer, SidebarMenu } from './components';

export const Sidebar = () => {
  const { isOpen, onClose, onOpen } = useMenuSidebar();

  return (
    <>
      <IconButton
        sx={{ color: 'primary.lightText', height: '50px', width: '50px' }}
        onClick={onOpen}
      >
        <BurgerMenu />
      </IconButton>
      <SidebarDrawer
        isOpen={isOpen}
        onClose={onClose}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100vw',
          }}
          role="presentation"
        >
          <SidebarMenu onClickItemLink={onClose} />
        </Box>
      </SidebarDrawer>
    </>
  );
};
