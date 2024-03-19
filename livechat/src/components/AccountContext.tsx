import { ReactNode, createContext } from "react";

interface IAccountContext {
  user?: {
    loggedIn: boolean;
    token: string | null;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      loggedIn: boolean;
      token: string | null;
    }>
  >;
}
interface IUserContext {
  children: ReactNode;
  value: IAccountContext;
}
const AccountContext = createContext<IAccountContext | undefined>(undefined);

const UserContextProvider: React.FC<IUserContext> = ({ children, value }) => {
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

export { AccountContext, UserContextProvider };
