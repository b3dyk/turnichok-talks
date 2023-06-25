import { Box, Container, Stack, Typography } from '@mui/material';
import { useWhyThisCourse } from './hooks';
import { WhyItem, WhyVideo } from './components';

export const WhyThisCourse = () => {
  const itemList = useWhyThisCourse();
  return (
    <Box
      sx={{
        pt: { xs: '93px', sm: 4, md: 8, lg: '73px' },
        pb: { xs: 10, sm: 4, md: 11, lg: 8 },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { sm: 'center' },
        }}
      >
        <Typography
          variant='h2'
          component='h2'
          sx={{
            mb: { xs: 3, sm: 4, md: '46px' },
            color: 'secondary.lightText',
          }}
        >
          Чому Front-end?
        </Typography>

        <Stack
          sx={{
            flexDirection: { sm: 'row' },
            justifyContent: { sm: 'space-between' },
            gap: 3,
            width: '100%',
            mb: { xs: 4, md: 10 },
          }}
        >
          {itemList.map((it) =>
            <WhyItem key={it.id} {...it}/>)
          }
        </Stack>
        <WhyVideo/>
      </Container>
    </Box>
  );
};
