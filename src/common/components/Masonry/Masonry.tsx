import { Masonry as MasonryMUI, MasonryProps } from '@mui/lab';
import { Box, useTheme } from '@mui/material';
import { SxPropsInterface } from '../../interfaces';

interface Props extends MasonryProps {
  spacing: number
  wrapperSx?: SxPropsInterface
}

export const Masonry = ({ children, spacing, columns, sx, wrapperSx, ...other }: Props) => {
  const { spacing: multiplier } = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        ...wrapperSx,
      }}
    >
      <Box
        sx={{
          mx: -(spacing / 2),
          mb: -(spacing),
        }}
      >
        <MasonryMUI
          columns={columns}
          spacing={spacing}
          sx={{
            position: 'relative',
            left: multiplier(spacing / 2),
            ...sx,
          }}

          defaultHeight={450}
          defaultColumns={4}
          defaultSpacing={1}
          {...other}
        >
          {children}
        </MasonryMUI>
      </Box>
    </Box>
  );
};
