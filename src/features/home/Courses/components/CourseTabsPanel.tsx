import { Box, Typography } from '@mui/material';
import { Button, VideoPlayer } from 'src/common/components';
import { useRouterPush } from 'src/common/hooks';
import { Promotion } from './Promotion';
import { CourseInterface } from '../interfaces';
import { TabsPanelWrapper } from './TabsPanelWrapper';

interface Props {
  idx?: number;
  value: number;
  course: CourseInterface;
}

export const CourseTabsPanel = ({
  value,
  idx,
  course: {
    title,
    studyingTimeText,
    price,
    numberOfVacancies,
    description,
    video,
    promotion,
    url,
    id,
  },
}: Props) => {
  const pushMoreDetails = useRouterPush(`/courses/${url}`);
  return (
    <TabsPanelWrapper id={idx ?? id} value={value}>
      {value === id && (
        <>
          <Box
            sx={{
              textAlign: 'left',
            }}
          >
            <Typography
              variant={'h3'}
              component={'h3'}
              sx={{ display: { xs: 'none', sm: 'block' }, mb: '32px' }}
            >
              {title}
            </Typography>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                m: { xs: '32px 0 16px', md: '0 0 16px', lg: '0 0 32px' },
              }}
            >
              <Typography variant={'p1'} component={'p'} sx={{ mr: '30px' }}>
                {studyingTimeText}
              </Typography>
              <Typography
                variant={'p1'}
                component={'p'}
                sx={{
                  fontWeight: '600',
                  mr: '72px',
                  color: promotion ? 'button.main' : 'lightPrimary.main',
                }}
              >
                {price} &#8372;
              </Typography>
              <Typography
                variant={'p2'}
                component={'p'}
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                {numberOfVacancies}
              </Typography>
              {promotion && <Promotion />}
            </Box>
            <Box sx={{ width: { sm: '394px', md: '498px' } }}>
              <Typography
                variant={'p1'}
                component={'p'}
                sx={{ mb: { xs: '40px', md: '32px', lg: '40px' } }}
              >
                {description}
              </Typography>
            </Box>
            <Button
              href={`/courses/${url}`}
              onClick={pushMoreDetails}
              sx={{ width: { xs: '100%', sm: '200px' }, p: '8px 48px' }}
              variant="primary"
            >
              Докладніше
            </Button>
          </Box>
          <VideoPlayer identifier={video} />
        </>
      )}
    </TabsPanelWrapper>
  );
};
