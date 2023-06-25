import { variantsType } from '../interfaces';

const variants = {
  external: {
    backgroundColor: 'secondary.main',
    borderRadius: '10px',
    padding: {
      xs: '32px 16px 16px',
      sm: '24px 16px 24px 32px',
      md: '24px 24px 24px 40px',
      lg: '24px 112px 24px 124px',
    },
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: { xs: 'flex-start', sm: 'center' },
    justifyContent: 'space-between',
  },
  internal: {
    width: { xs: '100%', sm: '580px', md: '680px' },
    marginBottom: { xs: '32px', sm: '0' },
    alignItems: { xs: 'flex-start', sm: 'center' },
    display: 'flex',
  },
};

export const useLeaveReviewWrapper = (variant: variantsType) =>
  variants[variant];
