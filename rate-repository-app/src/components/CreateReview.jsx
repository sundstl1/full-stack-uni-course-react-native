import { Formik } from "formik";
import ReviewForm from "./ReviewForm";
import * as yup from "yup";
import useCreateReview from "../hooks/useCreateReview";
import { useHistory } from "react-router-native";
import { useApolloClient } from "@apollo/client";

const initialValues = {
  repositoryName: "",
  ownerName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  repositoryName: yup.string().required("Repository name is required"),
  ownerName: yup.string().required("Repository owner name is required"),
  rating: yup.number().min(0).max(100).required("Rating is required"),
});

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();
  const apolloClient = useApolloClient();

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;
    console.log(values);
    try {
      const { data } = await createReview({
        repositoryName,
        ownerName,
        rating,
        text,
      });
      apolloClient.resetStore();
      history.push(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };
  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
