import type { NextComponentType, NextPageContext } from 'next';
import { ReactNode } from 'react';

export type TNotFoundFeature = NextComponentType<NextPageContext, any, {}> & {
  getLayout?: (page: ReactNode) => ReactNode;
};
