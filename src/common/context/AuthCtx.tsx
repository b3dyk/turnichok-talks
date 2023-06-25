// 'use client';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

interface AuthCtxProps {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>
}

interface AuthCtxProviderProps {
  children: ReactNode;
}
const initContext = {
  isAuth: false,
  setIsAuth: () => {},
};

export const authCtx = createContext<AuthCtxProps>(initContext);

export function AuthCtx({ children }: AuthCtxProviderProps) {
  const [isAuth, setIsAuth] = useState(initContext.isAuth);

  const providerValue = useMemo(() => ({ isAuth, setIsAuth }), [isAuth]);

  return (
    <authCtx.Provider value={providerValue}>
      {children}
    </authCtx.Provider>
  );
}
