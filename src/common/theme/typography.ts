import React from 'react';
import { Theme } from '@mui/material';

export const setTypography = (theme: Theme) => {
  theme.typography = {
    ...theme.typography,
    h1: {
      fontSize: '40px',
      lineHeight: '48px',
      fontWeight: 700,
      [theme.breakpoints.up('sm')]: {
        fontSize: '56px',
        lineHeight: '64px',
      },
    },
    h2: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 700,
      [theme.breakpoints.up('sm')]: {
        fontSize: '32px',
        lineHeight: '40px',
      },
    },
    h3: {
      fontSize: '18px',
      lineHeight: '32px',
      fontWeight: 700,
      [theme.breakpoints.up('sm')]: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 600,
      },
    },
    p1: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 700,
      [theme.breakpoints.up('sm')]: {
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: 500,
      },
    },
    p2: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
      [theme.breakpoints.up('sm')]: {
        fontSize: '18px',
        lineHeight: '24px',
      },
    },
    p3: {
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: 400,
      [theme.breakpoints.up('sm')]: {
        fontSize: '16px',
        lineHeight: '24px',
      },
    },
  };
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    p1: React.CSSProperties;
    p2: React.CSSProperties;
    p3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    p1?: React.CSSProperties;
    p2?: React.CSSProperties;
    p3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    p1: true;
    p2: true;
    p3: true;
  }
}
