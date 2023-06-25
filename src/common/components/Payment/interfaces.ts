export type TPaymentInfo = 'guarantee' | 'payment' | 'inParts'

export interface IPayment {
  id: number;
  icon: string[];
  type: TPaymentInfo;
  title: string;
  text: string;
}
