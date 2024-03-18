import { Button, ButtonGroup, Heading, Text, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextField from "../common/textfield";
import styles from "./index.module.scss";

const Register = () => {
  const navigate = useNavigate();
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
  return (
    <div className={styles.login}>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
        }}
      >
        <VStack
          as={Form}
          w={{ base: "90%", md: "500px" }}
          m="auto"
          justify="center"
          h="100vh"
          spacing="1rem"
        >
          <Heading color="#fff">Register</Heading>
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
              Register
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

export default Register;
