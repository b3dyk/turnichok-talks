import { useRouter } from 'next/router';

export const useCurrentHrefClass = (href: string, className: string = 'active'): string => {
  const router = useRouter();
  return href === router.pathname ? className : '';
};
