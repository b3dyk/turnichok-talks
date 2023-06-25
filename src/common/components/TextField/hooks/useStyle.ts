import { Theme } from '@mui/material';
import { CSSSelectorObjectOrCssVariables } from '@mui/system';
import { TSxVariant } from '../interfaces';
import { contacts, popup, subscription } from '../sx';

const styleTypes: Record<TSxVariant, CSSSelectorObjectOrCssVariables<Theme>> = {
  popup,
  contacts,
  subscription,
};

export const useStyle = (styleType: TSxVariant = 'popup') =>
  styleTypes[styleType];
