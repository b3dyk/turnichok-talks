import { SxProps, Theme } from '@mui/material';

export type SxPropsInterface = SxProps<Theme>;

export interface INavigateInnerItem {
  id: number;
  title: string;
  href: string;
}

export interface INavigationItem {
  id: number;
  title: string;
  type: 'list' | 'link';
  href: string;
  protected: boolean;
  variant: string[];
  items: INavigateInnerItem[];
}

export type IUser = {
  name: string;
  lastName: string;
  email: string;
  avatar: string;
};

export interface IFooterLinksItem {
  id: number;
  text: string;
  href: string;
}

export interface IReviewCard {
  id: number;
  name: string;
  review: string;
  reviewImg: string;
  stars: number;
  imgUrl: string;
  video: string;
  time: string;
}
