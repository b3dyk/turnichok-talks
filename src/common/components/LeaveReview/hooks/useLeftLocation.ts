import { useMedia } from 'src/common/components/Form/hooks';

export const useLeftLocation = () => {
  const { isMobile, isSmollMobile } = useMedia();

  if (isSmollMobile) return '240px';

  if (isMobile) return '280px';

  return '340px';
};
