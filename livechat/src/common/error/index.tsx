import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>This is error </div>;
};

export default Error;
