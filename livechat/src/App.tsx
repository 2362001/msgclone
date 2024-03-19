import { useEffect, useState } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import "./App.css";
import ToggleColorMode from "./common/toggleColorMode";
import { UserContextProvider } from "./components/AccountContext";
import router from "./router/router";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState<{
    loggedIn: boolean;
    token: string | null;
  }>({
    loggedIn: false,
    token: localStorage.getItem("token"),
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
      credentials: "include",
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    })
      .catch(() => {
        setUser((prevState) => ({
          ...prevState,
          loggedIn: false,
        }));
        return;
      })
      .then((res) => {
        if (!res || !res.ok || res.status >= 400) {
          setUser((prevState) => ({
            ...prevState,
            loggedIn: false,
          }));
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (!data) {
          setUser((prevState) => ({
            ...prevState,
            loggedIn: false,
          }));
          return;
        }
        setUser({ ...data });
        navigate("/home");
      });
  }, []);

  return (
    <UserContextProvider
      value={{
        user,
        setUser,
      }}
    >
      <RouterProvider router={router} />
      <ToggleColorMode />
    </UserContextProvider>
  );
}

export default App;
