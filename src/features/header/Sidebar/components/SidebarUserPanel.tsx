import Box from '@mui/material/Box';
import { useUser } from 'src/common/hooks/useUser';
import { Button, Divider, IconButton, Typography } from '@mui/material';
import { SignIn } from 'src/common/icons';
import { SignOut } from 'src/common/icons/SignOut';
import { Dots } from 'src/common/icons/Dots';
import Stack from '@mui/material/Stack';
import { SxPropsInterface } from 'src/common/interfaces';
import { useContext } from 'react';
import { authCtx } from 'src/common/context/AuthCtx';

const iconBtnSx: SxPropsInterface = {
  color: 'inherit',
  borderRadius: '0%',
  width: '50px',
};

export const SidebarUserPanel = () => {
  const { avatar, name, lastName } = useUser();
  const { isAuth, setIsAuth } = useContext(authCtx);

  if (!isAuth) return (
    <Button
      sx={{
        display: 'flex',
        height: '50px',
        width: '100%',
        px: '16px',
        textTransform: 'none',
        color: 'primary.lightText',
        backgroundColor: 'primary.light',
        '&:hover': { backgroundColor: 'primary.light' },
      }}
      startIcon={<SignIn/>}
      onClick={() => setIsAuth(true)}
    >
      <Typography variant="p1">Увійти</Typography>
    </Button>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        color: 'primary.lightText',
        backgroundColor: 'primary.light',
        pl: '16px',
      }}
    >
      <Box
        component='img'
        src={avatar}
        alt='Аватар'
        sx={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
        }}
      />
      <Typography variant='p1' sx={{ ml: '15px' }}>{name} {lastName}</Typography>
      <Stack
        divider={<Divider orientation="vertical" flexItem sx={{ backgroundColor: 'primary.lightText' }}/>}
        direction='row'
        spacing={0}
        sx={{
          gap: '1px',
          ml: 'auto',
          alignSelf: 'stretch',
        }}
      >
        <IconButton sx={iconBtnSx}><Dots/></IconButton>
        <IconButton sx={iconBtnSx} onClick={() => setIsAuth(false)}><SignOut/></IconButton>
      </Stack>
    </Box>
  );
};
