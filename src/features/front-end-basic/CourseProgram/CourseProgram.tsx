import { Box, Container, useTheme } from '@mui/material';
import { CourseProgramTop, ProgramList } from './components';

export const CourseProgram = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        pt: { xs: 4, md: '67px' },
        pb: { xs: 4, sm: 3, md: 5, lg: 8 },
        backgroundColor: 'primary.main',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '1px',
          height: '100%',
            backgroundColor: '#3e464d',
          transform: {
            xs: 'translateX(calc(50% - 140px))',
            sm: 'translateX(calc(50% - 429px))',
            md: 'translateX(calc(50% - 518px))',
            lg: 'translateX(calc(50% - 617px))',
          },
        }}
      />
      <Container>
        <CourseProgramTop
          sx={{
            mb: { xs: 3, md: 6, lg: 3 },
            ml: { xs: '67px', sm: '97px', md: '115px' },
          }}
        />
      </Container>
      <Container sx={{ [theme.breakpoints.down('sm')]: { px: 0 } }}>
        <ProgramList/>
      </Container>
    </Box>
  );
};
