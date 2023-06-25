import { Box, Typography } from '@mui/material';
import { Button } from 'src/common/components';

export const BannerText = () => (
  <Box
    sx={{
      position: 'absolute',
      top: { xs: '32px', sm: '116px' },
      left: { xs: 'center', sm: '5%' },
      width: { xs: '348px', sm: '678px' },
      height: { xs: '514px', sm: '562px' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      px: { xs: '16px', sm: '24px' },
    }}
  >
    <Typography variant="h1" component="h1">
      <Box
        component="span"
        sx={{ textTransform: 'uppercase', color: 'lightPrimary.action' }}
      >
        Same It school{' '}
      </Box>
      - центр професійної підготовки IT спеціалістів
    </Typography>
    <Typography
      variant="h3"
      component="h3"
      sx={{ width: { xs: '260px', sm: '366px' } }}
    >
      Знайди себе в IT - пройди безкоштовний марафон з JavaScript та створи свій
      перший застосунок
    </Typography>
    <Button variant="primary" sx={{ width: { xs: '224px', sm: '240px' } }}>
      <Typography variant="p3"> Навчатись безкоштовно</Typography>
    </Button>
  </Box>
);
