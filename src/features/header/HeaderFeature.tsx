import { Box, Container } from '@mui/material';
import { MenuNav } from './MenuNav';
import { Sidebar } from './Sidebar';
import { MenuTop } from './MenuTop';

import { Account } from './Account';
import { Logo } from 'src/common/components';
import { useMedia } from 'src/common/hooks';

export const HeaderFeature = () => {
  const { isMdUp } = useMedia();

  return (
    <Box
      sx={{
        zIndex: 10,
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
      }}
    >
      {isMdUp && <MenuTop />}
      <Box
        sx={{
          backgroundColor: 'primary.black',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMdUp ? 'center' : 'space-between',
          }}
        >
          <Logo variant={isMdUp ? 'normal' : 'small'} />
          {isMdUp && <MenuNav />}
          {isMdUp && <Account />}
          {!isMdUp && <Sidebar />}
        </Container>
      </Box>
    </Box>
  );
};
