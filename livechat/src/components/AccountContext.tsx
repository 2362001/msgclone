import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IUserContext {
  children: ReactNode;
}
export const AccountContext = createContext();
const UserContext = ({ children }: IUserContext) => {
  const [user, setUser] = useState({
    loggedIn: null,
    token: localStorage.getItem("token"),
  });
  const navigate = useNavigate();

  return (
    <AccountContext.Provider value={{ user, setUser }}>
      {children}
    </AccountContext.Provider>
  );
};

export default UserContext;
