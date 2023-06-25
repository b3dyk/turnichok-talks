import { Box, Typography } from '@mui/material';
import { ButtonClose, UkraineFlagIcon } from './components';
import { useTopMenu } from './hooks';

export const MenuTop = () => {
  const { isMenuOpen, onMenuClose } = useTopMenu();

  if (!isMenuOpen) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'lightPrimary.main',
        minHeight: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& span': {
          margin: '5px',
        },
      }}
    >
      <UkraineFlagIcon />
      <Typography variant="p1" color="lightPrimary.mainText">
        Слава Україні
      </Typography>
      <UkraineFlagIcon />
      <Typography variant="p1" color="lightPrimary.mainText">
        Героям Слава
      </Typography>
      <UkraineFlagIcon />
      <ButtonClose
        sx={{
          position: 'absolute',
          right: '30px',
        }}
        onClick={onMenuClose}
      />
    </Box>
  );
};
