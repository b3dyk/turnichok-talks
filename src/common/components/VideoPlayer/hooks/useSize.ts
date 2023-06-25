import { Theme, useMediaQuery, useTheme } from '@mui/material';

type Dimensions = {
  width: string;
  height: string;
};

const MOBILE: Dimensions = {
  width: '327px',
  height: '186px',
};

const TABLET: Dimensions = {
  width: '460px',
  height: '284px',
};

const DESKTOP: Dimensions = {
  width: '548px',
  height: '338px',
};

const DESKTOP_LARGE: Dimensions = {
  width: '648px',
  height: '400px',
};

export const useSize = () => {
  const theme: Theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.down('lg'));

  if (isMobile) return MOBILE;

  if (isTablet) return TABLET;

  if (isDesktop) return DESKTOP;

  return DESKTOP_LARGE;
};
