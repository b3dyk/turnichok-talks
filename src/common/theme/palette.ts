import { PaletteOptions } from '@mui/material';

export const palette: PaletteOptions = {
  primary: {
    light: '#0f1928',
    main: '#090c11',
    dark: '#030507',
    black: '#000000',
    lightText: '#e6e7e7',
    mainText: '#dbdbdb',
  },
  secondary: {
    light: '#394250',
    main: '#27303e',
    dark: '#27343f',
    lightText: '#e6e7e7',
    mainText: '#dbdbdb',
  },
  lightPrimary: {
    main: '#e6e7e7',
    action: '#ffd028',
    mainText: '#000000',
  },
  button: {
    main: '#ffd028',
    hover: '#dfb008',
    disabled: '#666666',
    mainText: '#000000',
    disabledText: '#dbdbdb',
  },
  error: { main: '#f44336' },
};

declare module '@mui/material/styles' {
  interface Palette {
    lightPrimary: Palette['primary'];
  }
  interface PaletteOptions {
    lightPrimary: PaletteOptions['primary'];
  }
  interface PaletteColor {
    lightPrimary?: string;
  }
  interface SimplePaletteColorOptions {
    lightPrimary?: string;
  }

  interface Palette {
    button: Palette['primary'];
  }
  interface PaletteOptions {
    button: PaletteOptions['primary'];
  }
  interface PaletteColor {
    button?: string;
  }
  interface SimplePaletteColorOptions {
    button?: string;
  }


  interface PaletteColor {
    black?: string;
  }
  interface SimplePaletteColorOptions {
    black?: string;
  }

  interface PaletteColor {
    action?: string;
  }
  interface SimplePaletteColorOptions {
    action?: string;
  }

  interface PaletteColor {
    lightText?: string;
  }
  interface SimplePaletteColorOptions {
    lightText?: string;
  }

  interface PaletteColor {
    mainText?: string;
  }
  interface SimplePaletteColorOptions {
    mainText?: string;
  }

  interface PaletteColor {
    default?: string;
  }
  interface SimplePaletteColorOptions {
    default?: string;
  }

  interface PaletteColor {
    hover?: string;
  }
  interface SimplePaletteColorOptions {
    hover?: string;
  }

  interface PaletteColor {
    disabled?: string;
  }
  interface SimplePaletteColorOptions {
    disabled?: string;
  }

  interface PaletteColor {
    disabledText?: string;
  }
  interface SimplePaletteColorOptions {
    disabledText?: string;
  }
}
