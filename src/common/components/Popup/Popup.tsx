import { ReactNode } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import { ButtonClose } from 'src/features/header/MenuTop/components';

interface Props {
  children: ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
}

export const Popup = (
  {
    children,
    title,
    open,
    onClose,
  }: Props
) => (
  <Dialog
    onClose={onClose}
    open={open}
    aria-labelledby="draggable-dialog-title"
    sx={{
      '& .MuiPaper-root': {
        width: { xs: '100%', sm: '394px' },
        height: { xs: '100%', sm: 'auto' },
        maxHeight: { xs: '100%' },
        m: 0,
        p: 2,
        backgroundColor: 'primary.main',
      },
    }}
  >
    <ButtonClose
      onClick={onClose}
      size={34}
      sx={{
        position: 'absolute',
        right: 8,
        top: 8,
        color: 'primary.lightText',
      }}
    />

    <DialogTitle
      variant={'h3'}
      component={'h3'}
      color={'primary.mainText'}
      sx={{
        p: 0,
        mb: { xs:'70px', sm: '32px' },
      }}
    >
      {title}
    </DialogTitle>
    {children}
  </Dialog>
);
