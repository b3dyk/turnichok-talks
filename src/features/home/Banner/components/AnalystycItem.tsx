import { Box, Grid, Typography } from '@mui/material';

interface Props {
  text: string;
  title: string;
  icon: string;
}

export const AnalystycItem = ({ text, title, icon }: Props) => (
  <Grid
    item
    xs={12}
    sm={6}
    md={4}
    component="li"
    sx={{
      color: 'white',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Box
      component="img"
      src={icon}
      width={{ xs: '62px', sm: '80px', md: '62px' }}
      height={{ xs: '62px', sm: '80px', md: '62px' }}
      sx={{ mr: { xs: '8px', sm: '24px' } }}
    ></Box>
    <Box>
      <Typography
        variant="h3"
        component="h3"
        color="button.main"
        sx={{ mb: '4px' }}
      >
        {title}
      </Typography>
      <Typography variant="p3" component="p" color="primary.lightText">
        {text}
      </Typography>
    </Box>
  </Grid>
);
