import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { setTypography } from './typography';
import { breakpoints } from './breakpoints';
import { setComponent } from './components';

export const theme = createTheme({
  breakpoints,
  palette,
});

setTypography(theme);
setComponent(theme);
