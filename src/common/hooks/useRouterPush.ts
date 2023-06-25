import { useRouter } from 'next/router';
import { MouseEvent } from 'react';


export const useRouterPush = (url: string) => {
  const router = useRouter();
  return (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(url);
  }; 
};
