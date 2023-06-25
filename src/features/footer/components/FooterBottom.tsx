import { Box, Stack } from '@mui/material';
import { Logo, SocialList } from 'src/common/components';
import { useSocialList } from '../hooks';

export const FooterBottom = () => {
  const socialList = useSocialList();
  return (
    <Stack
      sx={{
        flexDirection: { sm: 'row' },
        alignItems: 'center',
        gap: '21px',
      }}
    >
      <SocialList
        socialList={socialList}
        sx={{ flexGrow: { sm: 1 }, flexBasis: { sm: 1 } }}
      />
      <Logo variant='grey'/>
      <Box sx={{ flexGrow: { sm: 1 }, flexBasis: { sm: 1 }, display: 'flex', justifyContent: 'flex-end' }}>
        <Box component='img' src='/icons/pay-services.svg' width={331}/>
      </Box>
    </Stack>
  );
};
