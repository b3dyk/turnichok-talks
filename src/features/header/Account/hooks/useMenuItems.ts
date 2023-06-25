import { MdEvent, MdPerson } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';
import { IMenuItem } from '..';

const data: IMenuItem[] = [
  {
    id: 1,
    url: '/profile',
    text: 'Профіль',
    ReactIcon: MdPerson,
  },
  {
    id: 2,
    url: '/certificates',
    text: 'Мої сертифікати',
    ReactIcon: TbCertificate,
  },
  {
    id: 3,
    url: '/calendar',
    text: 'Календар',
    ReactIcon: MdEvent,
  },
];

export const useMenuItems = () => data;
