import { useMediaQuery } from '@mui/material';

const gragientStyle = {
  content: '\'\'',
  position: 'absolute',
  top: '30%',
  left: 0,
  width: '100%',
  height: '100%',
};

const mobileGradient =
  'linear-gradient(180deg, rgba(15, 25, 40, 0) 0%, #0F1928 62.2%, #0F1928 91.16%)';
const desktopGradient =
  'linear-gradient(180deg, rgba(15, 25, 40, 0) 0%, rgba(15, 25, 40, 0.755208) 22.2%, rgba(15, 25, 40, 0.983948) 82.62%, #0F1928 91.16%)';

export const useGradient = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return {
    ...gragientStyle,
    backgroundImage: isMobile ? mobileGradient : desktopGradient,
  };
};
