import { Callback } from 'src/common/components';
import { Button, Stack, Typography } from '@mui/material';
import { SignIn } from '../../../common/icons';
import { authCtx } from '../../../common/context/AuthCtx';
import { useContext } from 'react';
import { BellButton, ProfileMenu } from './components';

export const Account = () => {
  const { isAuth, setIsAuth } = useContext(authCtx);

  return (
    <Stack
      direction="row"
      sx={{ gap: '4px', alignItems: 'center', marginLeft: 'auto' }}
    >
      {isAuth ? (
        <>
          <BellButton />
          <ProfileMenu />
        </>
      ) : (
        <Button
          sx={{
            color: '#fff',
            textTransform: 'none',
          }}
          startIcon={<SignIn />}
          onClick={() => setIsAuth(true)}
        >
          <Typography variant="p1">Увійти</Typography>
        </Button>
      )}
      <Callback sx={{ marginLeft: '8px' }} />
    </Stack>
  );
};
