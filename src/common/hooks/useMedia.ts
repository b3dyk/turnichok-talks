import { useMediaQuery, useTheme } from '@mui/material';

export const useMedia = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return {
    theme,
    isSmUp,
    isMdUp,
  };
};
