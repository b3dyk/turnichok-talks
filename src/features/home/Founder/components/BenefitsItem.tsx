import { Stack, Typography, Grid } from '@mui/material';
import { IFounderBenefits } from '../interfaces';

type Props = Omit<IFounderBenefits, 'id'>;

export const BenefitsItem = ({ title, description }: Props) => (
  <Grid
    item
    xs={6}
    sm={4}
    sx={{
      textAlign: 'center',
      p: '0 !important',
    }}
  >
    <Typography
      variant="h2"
      component="p"
      sx={{ color: 'lightPrimary.action' }}
    >
      {title}
    </Typography>
    <Typography
      variant="p3"
      component="p"
      color="inherit"
      sx={{ fontSize: { xs: '14px', md: '16px' } }}
    >
      {description}
    </Typography>
  </Grid>
);
