import { Button, ButtonGroup, Heading, Text, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextField from "../common/textfield";
import { AccountContext } from "../components/AccountContext";
import styles from "./index.module.scss";
import { useCustomContext } from "../hooks/useCustomContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useCustomContext(AccountContext);
  const [error, setError] = useState(null);

  const formSchema = Yup.object({
    username: Yup.string()
      .required("Username required")
      .min(6, "Username too short")
      .max(28, "Username too long!"),
    password: Yup.string()
      .required("Password required")
      .min(6, "Password too short")
      .max(28, "Password too long!"),
  });

  const onSubmitForm = (
    values: {
      username: string;
      password: string;
    },
    actions: A
  ) => {
    const vals = { ...values };
    actions.resetForm();
    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vals),
    })
      .catch((err) => {
        console.log(err);
        return;
      })
      .then((res) => {
        if (!res || !res.ok || res.status >= 400) {
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (!data) return;
        setUser({ ...data });
        if (data.status) {
          setError(data.status);
        } else if (data.loggedIn) {
          localStorage.setItem("token", data.token);
          navigate("/home");
        }
      });
  };

  return (
    <div className={styles.login}>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={formSchema}
        onSubmit={onSubmitForm}
      >
        <VStack
          as={Form}
          w={{ base: "90%", md: "500px" }}
          m="auto"
          justify="center"
          h="100vh"
          spacing="1rem"
        >
          <Heading color="#fff">Log In</Heading>
          <Text as="p" color="red.500">
            {error}
          </Text>
          <TextField
            name="username"
            placeholder="Enter username"
            autoComplete="off"
            label="Username"
          />

          <TextField
            name="password"
            placeholder="Enter password"
            autoComplete="off"
            label="Password"
            type="password"
          />

          <ButtonGroup pt="1rem">
            <Button colorScheme="teal" type="submit">
              Log In
            </Button>
            <Button onClick={() => navigate("/register")}>
              Create Account
            </Button>
          </ButtonGroup>
        </VStack>
      </Formik>
    </div>
  );
};

export default Login;
