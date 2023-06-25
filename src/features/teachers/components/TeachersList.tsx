import { Box, Container, Grid } from '@mui/material';
import { TeacherCard } from 'src/features/front-end-basic/OurTeachers/components';
import { ITeacher } from 'src/common/components/TeachersCard';

interface Props {
  teachers: ITeacher[];
}

export const TeachersList = ({ teachers }: Props) => (
  <Box
    sx={{
      backgroundColor: 'primary.light',
      py: { xs: '32px', md: '64px' },
    }}
  >
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 4, md: 3 }}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {teachers.map(teacher => (
          <Grid key={teacher.id} item xs={12} sm={4} md={3}>
            <TeacherCard teacher={teacher} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
