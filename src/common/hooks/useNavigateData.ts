import { useContext } from 'react';
import navigationData from 'src/data/navigation.json';
import { INavigationItem } from '../interfaces';
import { authCtx } from '../context';

const navigation = navigationData as INavigationItem[];

type TVariant = 'normal' | 'extended'

export const useNavigateData = (variant: TVariant) => {
  const { isAuth } = useContext(authCtx);
  return navigation.filter((it: INavigationItem) => it.variant.includes(variant) && (isAuth ? true : !it.protected ));
};
