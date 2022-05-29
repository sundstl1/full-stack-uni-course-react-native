import { Formik } from "formik";
import SignInForm from "./SignInForm";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import useAuthStorage from "../hooks/useAuthStorage";
import { useHistory } from "react-router-native";
import { useApolloClient } from "@apollo/client";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const authStorage = useAuthStorage();
  const [signIn] = useSignIn();
  const history = useHistory();
  const apolloClient = useApolloClient();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      if (data) {
        //console.log(data.authenticate.accessToken);
        await authStorage.setAccessToken(data.authenticate.accessToken);
        apolloClient.resetStore();
        history.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
