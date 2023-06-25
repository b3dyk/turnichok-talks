import { Box, Container, useTheme } from '@mui/material';
import { Content, InfoCards } from './components';

export const ForWhom = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        pt: { xs: 5, sm: 8, md: '128px' },
        pb: { xs: 4, md: '64px' },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { sm: 'center' },
          rowGap: 5,
          columnGap: { sm: 3, md: 4 },
          [theme.breakpoints.down('sm')]: { px: 0 },
        }}
      >
        <Content
          sx={{
            flexGrow: 1,
            flexBasis: 1,
            maxWidth: { md: '535px' },
            [theme.breakpoints.down('sm')]: { px: 2 },
          }}
        />
        <InfoCards
          sx={{
            flexGrow: 1,
            flexBasis: 1,
            maxWidth: { md: '535px' },
          }}
        />
      </Container>
    </Box>
  );
};
