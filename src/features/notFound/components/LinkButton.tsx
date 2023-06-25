import { Typography } from '@mui/material';
import { Button } from 'src/common/components';
import { useRouterPush } from 'src/common/hooks';

export const LinkButton = () => {
  const pushHome = useRouterPush('/');
  return (
    <Button
      href={'/'}
      onClick={pushHome}
      variant="primary"
      sx={{
        width: { xs: '260px', md: '191px' },
        height: '64px',
        borderRadius: '32px',
      }}
    >
      <Typography variant="p1" component="p">
        На головну
      </Typography>
    </Button>
  );
};
