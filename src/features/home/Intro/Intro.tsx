import { TVariant } from './interfaces';
import { Banner } from '../Banner';
import { Marathon } from '../Marathon';

interface Props {
  variant?: TVariant
}

export const Intro = ({ variant }: Props) => {
  if (variant === 'marathon') return <Marathon/>;
  return <Banner/>;
};
