import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { TeacherList } from './components';
import { useOurTeachers } from './hooks';

export const OurTeachers = () => {
  const teachers = useOurTeachers();
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container
        sx={{
          mb: { sm: '32px' },
          textAlign: { xs: 'left', sm: 'center' },
        }}
      >
        <Typography variant='h2' component='h2' color='promary.lightText' sx={{ mb: { xs: 1, sm: 2, lg: 3 } }}>
          Наші викладачі
        </Typography>
        <Typography variant='p3' component='p' color='promary.mainText' sx={{ mb: { xs: 3, md: 2, lg: 1 } }}>
          Вас будуть навчати практикуючі фахівці, що працюють в топових компаніях.
        </Typography>
        <Box sx={{
          mb: { xs: 2, md: 1 },
          px: { md: 4 },
          textAlign: 'right',
        }}>
          <Link href='/teachers'>
            <Typography
              variant='p2'
              component='a'
              href='/teachers'
              color='lightPrimary.action'
              sx={{
                textDecoration: 'underline',
              }}
            >
              Дивитись всіх
            </Typography>
          </Link>
        </Box>
        <TeacherList teachers={teachers}/>
      </Container>
    </Box>
  );
};
