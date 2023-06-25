import { IoCall } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import { IContactItem } from '../interface';

const contactList: IContactItem[] = [
  {
    id: 0,
    Icon: IoMdMail,
    text: 'same.it.school@gmail.com',
  },
  {
    id: 1,
    Icon: IoMdMail,
    text: 'support@gmail.com',
  },
  {
    id: 2,
    Icon: IoCall,
    text: '+38(093)-239-3211',
  },
  {
    id: 3,
    Icon: IoCall,
    text: '+38(093)-239-3211',
  },
];

export const useContactList = () => contactList;
