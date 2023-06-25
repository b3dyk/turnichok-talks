import { useRouter } from 'next/router';
import consentInfo from 'src/data/consent-info.json';
import privacyPolicy from 'src/data/privacy-policy.json';
import { ITechInfo } from '../interfaces';

export const useTechInfo = (): ITechInfo[] => {
  const { pathname } = useRouter();

  return pathname === '/consent' ? consentInfo : privacyPolicy;
};
