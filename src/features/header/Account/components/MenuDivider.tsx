import { Divider, Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';

interface Props {
  sx?: SystemStyleObject<Theme>
}

export const MenuDivider = ({ sx }: Props) => (
  <Divider
    color='primary.light'
    sx={{
      '&.MuiDivider-root': {
        my: 2,
        ...sx,
      },
    }}/>
);
