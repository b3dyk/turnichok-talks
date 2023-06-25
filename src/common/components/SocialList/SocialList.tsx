import { Box } from '@mui/material';
import { SocialIcon, SocialVariantTypes } from '../SocialIcon';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  socialList: SocialVariantTypes[]
  sx?: SxPropsInterface
  iconSx?: SxPropsInterface
}

export const SocialList = ({ socialList, sx, iconSx }: Props) => (
  <Box
    sx={{
      display: 'flex',
      gap: 2,
      color: 'primary.mainText',
      ...sx,
    }}
  >
    {socialList.map(it =>
      <SocialIcon
        key={it}
        variant={it}
        sx={iconSx}
      />)}
  </Box>
);
