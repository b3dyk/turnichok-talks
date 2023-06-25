import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { useHiddenTab } from '../hooks';

interface Props {
  children: ReactNode;
  value: number;
  id: number;
}

export const TabsPanelWrapper = ({ children, value, id }: Props) => {
  const hidden = useHiddenTab(value, id);
  return (
    <Box
      role="tabpanel"
      hidden={hidden}
      id={`simple-tabpanel-${id}`}
      aria-labelledby={`simple-tab-${id}`}
      sx={{
        display: hidden ? 'none' : 'flex',
        flexDirection: { xs: 'column-reverse', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        pt: { xs: '80px', sm: '0' },
        width: '100%',
      }}
    >
      {children}
    </Box>
  );
};
