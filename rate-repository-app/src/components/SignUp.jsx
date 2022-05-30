import { Formik } from "formik";
import SignUpForm from "./SignUpForm";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import useAuthStorage from "../hooks/useAuthStorage";
import { useHistory } from "react-router-native";
import { useApolloClient } from "@apollo/client";
import useSignUp from "../hooks/useSignUp";

const initialValues = {
  username: "",
  password: "",
  passwordVerification: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().min(1).max(30).required("Username is required"),
  password: yup.string().min(5).max(50).required("Password is required"),
  passwordVerification: yup
    .string()
    .oneOf([yup.ref("password"), null], "The passwords do not match")

    .required("Password confirm is required"),
});

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const authStorage = useAuthStorage();
  const [signIn] = useSignIn();
  const [signUp] = useSignUp();
  const history = useHistory();
  const apolloClient = useApolloClient();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      let { data } = await signUp({ username, password });
      if (!data) {
        return;
      }

      ({ data } = await signIn({ username, password }));

      if (data) {
        await authStorage.setAccessToken(data.authenticate.accessToken);
        apolloClient.resetStore();
        history.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
