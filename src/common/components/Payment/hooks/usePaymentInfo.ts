import { TPaymentInfo } from '../interfaces';
import { SxPropsInterface } from 'src/common/interfaces';

type TStyleVariant = 'text'
type TStyles = Record<TStyleVariant, SxPropsInterface>
type TItemTypes = Record<TPaymentInfo, TStyles>

const payment: TStyles = {
  text: { width: { xs: '190px', sm: '204px' } },
};

const inParts: TStyles = {
  text: { width: { xs: '190px', sm: '204px' } },
};

const guarantee: TStyles = {
  text: { width: { md: '322px' } },
};

const itemTypes: TItemTypes = {
  payment,
  inParts,
  guarantee,
};

export const usePaymentInfo = (type: TPaymentInfo) => itemTypes[type];
