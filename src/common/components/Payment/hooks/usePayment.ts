import payment from 'src/data/payment.json';
import { IPayment } from '../interfaces';

export const usePayment = () => payment as IPayment[];
