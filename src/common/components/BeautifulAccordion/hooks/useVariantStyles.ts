import { SxPropsInterface } from 'src/common/interfaces';
import { VariantInterface } from '../interfaces';

type bfaStylesItem = {
  root: SxPropsInterface;
  block: SxPropsInterface;
  title: SxPropsInterface;
};

const styles: Record<VariantInterface, bfaStylesItem> = {
  vertical: {
    root: { display: 'flex' },
    block: { display: 'flex' },
    title: { display: 'flex', transform: 'rotate(270deg)' },
  },
  horizontal: {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    block: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: { display: 'flex', transform: 'rotate(0)' },
  },
};

export const useVariantStyles = (variant: VariantInterface) => styles[variant];
