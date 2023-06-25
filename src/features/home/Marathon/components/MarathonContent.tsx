import { Box, Stack, Typography } from '@mui/material';
import { Buttons } from './Buttons';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  sx?: SxPropsInterface
}

export const MarathonContent = ({ sx }: Props) => (
  <Box sx={{ zIndex: 2, position: 'relative', display: 'flex', flexDirection: 'column', maxWidth: '561px', ...sx }}>
    <Typography
      variant='h1'
      component='p'
      sx={{
        mb: { xs: 1, sm: 0 },
        textTransform: 'uppercase',
        color: 'lightPrimary.action',
      }}
    >
      Безкоштовний
    </Typography>
    <Typography
      variant='h2'
      component='h1'
      sx={{
        mb: { xs: 2, sm: 3 },
      }}
    >
      Марафон з JavaScript
    </Typography>
    <Stack
      component='p'
      sx={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 1,
        columnGap: 3,
        mt: 0,
        mb: { xs: 3, sm: 4 },
      }}
    >
      <Typography variant='p3' component='span' noWrap>Старт 12.06.2023</Typography>
      <Typography variant='p3' component='span' noWrap>3 заняття по 2 години</Typography>
      <Typography variant='p3' component='span' noWrap>Залишилось 4 місця</Typography>
    </Stack>
    <Typography sx={{ mb: { xs: 4, sm: 7 } }}>
      На цьому бескоштовному марафоні ви вивчите основи html, css Ta javascript и вже напишете свій перший
      додаток.
      Наш марафон включає в себе три динамічних уроки наповнених практикою та цікавими завданнями. Марафон буде
      проводити senior javaScript developer який має досвід більше 12 років в it сфері
    </Typography>
    <Buttons/>
  </Box>
);
