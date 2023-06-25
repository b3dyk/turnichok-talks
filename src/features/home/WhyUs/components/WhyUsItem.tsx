import { Typography, Grid, Box, useMediaQuery } from '@mui/material';
import { WhyUsInterface } from '../interfaces';

interface Props {
  cause: WhyUsInterface;
}

export const WhyUsItem = ({ cause: { title, description, icon } }: Props) => {
  const isMobile = useMediaQuery('(max-width:1200px)');
  return (
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
        alt={title}
        width={isMobile ? 48 : 64}
        height={isMobile ? 48 : 64}
      />
      <Box
        sx={{
          paddingLeft: { xs: '24px', sm: '16px' },
        }}
      >
        <Typography
          variant="p1"
          component="h3"
          sx={{
            color: 'lightPrimary.light',
            marginBottom: { xs: '10px', sm: '8px' },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="p3"
          component="p"
          sx={{
            color: 'lightPrimary.main',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Grid>
  );
};
