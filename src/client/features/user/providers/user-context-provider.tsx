import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import type { User } from '@prisma/client';

type UserContext = {
  currentUser: null | User;
  setCurrentUser: Dispatch<SetStateAction<null | User>>;
};

const Context = createContext<UserContext | null>(null);

export const useUserContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error(
      '"useUserContext" must be called inside a "UserContextProvider"'
    );
  return context;
};

interface UserContextProviderProps {
  user: null | User;
}

export const UserContextProvider = ({
  user,
  children,
}: PropsWithChildren<UserContextProviderProps>) => {
  const [currentUser, setCurrentUser] = useState<null | User>(user);

  const context = useMemo<UserContext>(
    () => ({
      currentUser,
      setCurrentUser,
    }),
    [currentUser, setCurrentUser]
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
