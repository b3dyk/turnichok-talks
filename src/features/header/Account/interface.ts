import { FC } from 'react';

export interface IMenuItem {
  id: number
  url: string
  text: string
  ReactIcon: FC,
}

export type THandleClick = (event: React.MouseEvent<HTMLElement>) => void
