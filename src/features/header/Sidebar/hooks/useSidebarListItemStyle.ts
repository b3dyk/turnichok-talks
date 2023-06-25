import { TSidebarListItemVariant } from '../interface';
import { SxPropsInterface } from 'src/common/interfaces';

interface IStyles {
  listItemButton: SxPropsInterface,
  listItemText: SxPropsInterface,
}
type TItemTypes = Record<TSidebarListItemVariant, IStyles>;

const normal: IStyles = {
  listItemButton: {
    py: '14px',
  },
  listItemText: {
    '& .MuiTypography-root': {
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: 500,
    },
  },
};

const inner: IStyles = {
  listItemButton: {
    py: '3px',
  },
  listItemText: {
    '& .MuiTypography-root': {
      fontSize: '18px',
      lineHeight: 1.5,
      fontWeight: 400,
    },
  },
};

const itemTypes: TItemTypes = {
  normal,
  inner,
};

export const useSidebarListItemStyle = (variant: TSidebarListItemVariant) => itemTypes[variant];
