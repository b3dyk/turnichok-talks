import { Box, Typography } from '@mui/material';
import { ITeacher } from './interfaces';
import { SxPropsInterface } from 'src/common/interfaces';
import { useMedia } from 'src/common/hooks';

interface Props {
  teacher: ITeacher;
  sx?: SxPropsInterface;
}

export const TeacherCard = ({ teacher, sx }: Props) => {
  const { name, surname, position, userImg, companyImg } = teacher;
  const { isSmUp } = useMedia();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: { xs: '372px', sm: '390px' },
        pt: { xs: 2, sm: 3 },
        pb: 2,
        px: 3,
        backgroundColor: 'secondary.main',
        borderRadius: 1,
        ...sx,
      }}
    >
      <Box
        component="img"
        src={userImg}
        alt="teacher photo"
        width={isSmUp ? 216 : 200}
        height={isSmUp ? 216 : 200}
        sx={{
          width: { xs: '200px', sm: '216px' },
          height: { xs: '200px', sm: '216px' },
          mb: 2,
          borderRadius: '50%',
        }}
      />
      <Typography
        variant="p1"
        component="p"
        color="primary.lightText"
        sx={{ mb: 1 }}
      >
        {name} {surname}
      </Typography>
      <Typography
        variant="p3"
        component="p"
        color="primary.lightText"
        sx={{ mb: { xs: 3, sm: 2 } }}
      >
        {position}
      </Typography>
      <Box
        component="img"
        src={companyImg}
        alt="company logo"
        width={177}
        sx={{ width: '177px' }}
      />
    </Box>
  );
};
