import { Box, Container, Typography } from '@mui/material';
import { useTeachers } from './hooks';
import { TeachersList } from './components';

export const TeachersFeatures = () => {
  const teachers = useTeachers();
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          p: { xs: '32px', md: '32px 0 64px 0' },
          color: 'white',
        }}
      >
        <Container>
          <Typography variant="h1" component="h1">
            Викладачі
          </Typography>
          <Typography variant="h3" component="p">
            У нас викладають тільки практикуючі фахівці з топових IT-компаній
          </Typography>
        </Container>
      </Box>
      <TeachersList teachers={teachers} />
    </>
  );
};
