import React, { ReactNode } from 'react';
import { Box, Drawer, useTheme } from '@mui/material';
import { Callback, Logo } from 'src/common/components';
import { ButtonClose } from '../../MenuTop/components';
import { SidebarUserPanel } from './SidebarUserPanel';

interface Props {
  isOpen: boolean;
  onClose: (e: any) => void;
  children: ReactNode;
}

export const SidebarDrawer = (
  {
    isOpen,
    onClose,
    children,
  }: Props) => {
  const theme = useTheme();

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          color: 'primary.lightText',
          backgroundColor: 'primary.black',
        },
      }}
    >
      <Box
        sx={{
          zIndex: 2,
          position: 'sticky',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: 52,
          marginBottom: '88px',
          padding: theme.spacing(0, 2),
          backgroundColor: 'primary.black',
        }}
      >
        <Logo variant="normal" onClick={onClose}/>
        <ButtonClose
          onClick={onClose}
          size={34}
          sx={{ marginRight: '-10px', color: 'primary.lightText' }}
        />
      </Box>
      {children}
      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          left: 0,
        }}
      >
        <SidebarUserPanel/>
        <Callback sx={{ width: '100%', minHeight: '50px', borderRadius: 0 }}/>
      </Box>
    </Drawer>
  );
};
