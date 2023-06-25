import { Box, Grid, Stack, Typography } from '@mui/material';
import { SocialList, SocialVariantTypes } from 'src/common/components';
import { BenefitsItem } from './BenefitsItem';
import { IFounderBenefits } from '../interfaces';

interface Props {
  benefits: IFounderBenefits[];
  socialList: SocialVariantTypes[];
}

export const FoundersInfo = ({ benefits, socialList }: Props) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: { sm: '428px', md: '488px' },
      height: { md: '283px' },
    }}
  >
    <Box sx={{ m: { xs: '16px 0 24px 0', sm: '0' } }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ color: 'lightPrimary.action', mb: { xs: '8px', sm: '16px' } }}
      >
        Олександр Аксенов
      </Typography>
      <Typography variant="p3" component="p">
        Власник школи
      </Typography>
    </Box>
    <Box>
      <SocialList socialList={socialList} />
      <Grid
        container
        spacing={2}
        sx={{
          mt: '24px',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {benefits.map(({ id, title, description }) => (
          <BenefitsItem key={id} title={title} description={description} />
        ))}
      </Grid>
    </Box>
  </Box>
);
