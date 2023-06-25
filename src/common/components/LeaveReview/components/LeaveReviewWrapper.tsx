import { Box } from '@mui/material';

import { variantsType } from '../interfaces';
import { useLeaveReviewWrapper } from '../hooks';

interface Props {
  variant: variantsType;
  children: React.ReactNode;
}

export const LeaveReviewWrapper = ({ variant, children }: Props) => {
  const styles = useLeaveReviewWrapper(variant);

  return <Box sx={styles}>{children}</Box>;
};
