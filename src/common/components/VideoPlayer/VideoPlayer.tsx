import Iframe from 'react-iframe';
import { useSize } from './hooks';
import { Box } from '@mui/material';
import { SxPropsInterface } from '../../interfaces';

interface Props {
  identifier: string;
  sx?: SxPropsInterface;
}

export const VideoPlayer = ({ identifier = 'z3FA2kALScU', sx }: Props) => {
  const { height, width } = useSize();
  return (
    <Box
      sx={{
        width: { width },
        height: { height },
        ...sx,
      }}
    >
      <Iframe
        title="why-us"
        url={`https://www.youtube.com/embed/${identifier}?rel=0&showinfo=0&autoplay=1`}
        width='100%'
        height='100%'
        overflow="cover"
        styles={{ borderRadius: '10px', flex: 1 }}
        frameBorder={0}
      />
    </Box>
  );
};
