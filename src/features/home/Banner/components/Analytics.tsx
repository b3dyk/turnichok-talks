import { Container, Grid } from '@mui/material';
import { SxPropsInterface } from 'src/common/interfaces';
import { useAnalytics } from '../hooks';
import { AnalystycItem } from './AnalystycItem';

interface Props {
  sx?: SxPropsInterface;
}

export const Analytics = ({ sx }: Props) => {
  const analytics = useAnalytics();
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', ...sx }}>
      <Grid
        container
        rowSpacing={{ xs: 3, sm: 2 }}
        columnSpacing={{ sm: 1, md: 1 }}
        component="ul"
        sx={{
          alignItems: { xs: 'flex-start', sm: 'center' },
          flexWrap: { md: 'nowrap' },
          maxWidth: { xs: '308px', sm: '100%', md: '1106px' },
        }}
      >
        {analytics.map(({ id, title, text, icon }) => (
          <AnalystycItem key={id} title={title} text={text} icon={icon} />
        ))}
      </Grid>
    </Container>
  );
};
