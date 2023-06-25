import { Grid } from '@mui/material';
import { WhyUsItem } from './WhyUsItem';
import { WhyUsInterface } from '../interfaces';

interface Props {
  whyUs: WhyUsInterface[];
}

export const WhyUsList = ({ whyUs }: Props) => (
  <Grid
    container
    rowSpacing={{ xs: 4, sm: 6, md: 4 }}
    columnSpacing={{ sm: 1, md: 24 }}
    component="ul"
    sx={{
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    {whyUs.map(cause => (
      <WhyUsItem cause={cause} key={cause.id} />
    ))}
  </Grid>
);
