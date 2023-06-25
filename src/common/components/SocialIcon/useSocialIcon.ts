import { ISocialData, SocialVariantTypes } from './interfaces';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

const socials: Record<SocialVariantTypes, ISocialData> = {
  youtube: {
    Icon: AiFillYoutube,
    src: '#',
  },
  linkedIn: {
    Icon: FaLinkedinIn,
    src: '#',
  },
  telegram: {
    Icon: FaTelegramPlane,
    src: '#',
  },
  instagram: {
    Icon: AiFillInstagram,
    src: '#',
  },
};

export const useSocialIcon = (variant: SocialVariantTypes) => socials[variant];
