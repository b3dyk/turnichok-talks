import { ReactNode } from 'react';

export interface ItemInterface {
  index: number | string;
  title: ReactNode;
  isActive: boolean;
  component: ReactNode;
}

export type TypeInterface = 'controlled' | 'uncontrolled';
export type VariantInterface = 'vertical' | 'horizontal';
