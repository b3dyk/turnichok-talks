import { TSwiperOptionsVariant } from '../interfaces';
import { SxPropsInterface } from 'src/common/interfaces';

const reviews: SxPropsInterface = {};
const teachers: SxPropsInterface = {};


const variants: Record<TSwiperOptionsVariant, SxPropsInterface> = {
  reviews,
  teachers,
};

export const useSwiperSx = (variant: TSwiperOptionsVariant) => variants[variant];
