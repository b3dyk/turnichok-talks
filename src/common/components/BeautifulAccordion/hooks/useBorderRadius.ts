import { useCallback } from 'react';
import { ItemInterface } from '../interfaces';

export const useBorderRadius = () => {
  const borderRadiusRight = useCallback(
    (idx: number, dataItems: ItemInterface[], isActive: boolean) => {
      if (idx === dataItems.length - 1 && !isActive) return '10px';

      return '0px';
    },
    []
  );

  const borderRadiusLeft = useCallback((idx: number): string => {
    if (idx === 0) return '10px';

    return '0px';
  }, []);

  return { borderRadiusRight, borderRadiusLeft };
};
