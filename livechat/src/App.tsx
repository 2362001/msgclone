import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import ToggleColorMode from "./common/toggleColorMode";
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToggleColorMode />
    </>
  );
}

export default App;
