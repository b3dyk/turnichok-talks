import { Box, Container, Theme, useMediaQuery, useTheme } from '@mui/material';
import { Typography } from 'src/common/components';
import { CourseInfo, MobileCourseInfo } from './components';
import { useCourses } from './hooks';

export const Courses = () => {
  const courses = useCourses();
  const theme: Theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.light',
        py: { xs: '32px', md: '64px' },
      }}
    >
      <Container
        sx={{
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start', sm: 'center' },
          position: 'relative',
        }}
      >
        <Typography variant="primary">Наші курси</Typography>

        {isMobile ? (
          <MobileCourseInfo courses={courses} />
        ) : (
          <CourseInfo courses={courses} />
        )}
      </Container>
    </Box>
  );
};
