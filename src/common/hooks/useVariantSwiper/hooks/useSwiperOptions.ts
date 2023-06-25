import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination, SwiperOptions } from 'swiper';
import { useMedia } from 'src/common/hooks';
import { Theme } from '@mui/material';
import { TSwiperOptionsVariant } from '../interfaces';

type TGetSwiperOptions = (theme: Theme) => SwiperOptions
const reviews: TGetSwiperOptions = (theme) => ({
  breakpoints: {
    [`${theme.breakpoints.values.xs}`]: {
      slidesPerView: 1,
      spaceBetween: 8,
      slidesPerGroup: 1,
    },
    [`${theme.breakpoints.values.sm}`]: {
      slidesPerView: 2,
      spaceBetween: 24,
      slidesPerGroup: 2,
    },
    [`${theme.breakpoints.values.md}`]: {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 3,
    },
  },
});

const teachers: TGetSwiperOptions = (theme) => ({
  breakpoints: {
    [`${theme.breakpoints.values.xs}`]: {
      slidesPerView: 1,
      spaceBetween: 8,
      slidesPerGroup: 1,
    },
    [`${theme.breakpoints.values.sm}`]: {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 3,
    },
    [`${theme.breakpoints.values.md}`]: {
      slidesPerView: 4,
      spaceBetween: 24,
      slidesPerGroup: 4,
    },
  },
});


const variants: Record<TSwiperOptionsVariant, TGetSwiperOptions> = {
  reviews,
  teachers,
};

export const useSwiperOptions = (variant: TSwiperOptionsVariant) => {
  const { isMdUp, theme } = useMedia();
  const variantOptions = variants[variant](theme);
  const swiperOptions: SwiperOptions = {
    modules: [Navigation, Pagination, Mousewheel, Keyboard, Autoplay],
    navigation: isMdUp,
    pagination: {
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3,
    },
    autoHeight: true,
    slidesPerView: 1,
    cssMode: true,
    autoplay: {
      delay: 400000,
      disableOnInteraction: false,
    },
    ...variantOptions,
  };
  return swiperOptions;
};
