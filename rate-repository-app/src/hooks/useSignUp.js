import { useMutation } from "@apollo/client";
import { ADD_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(ADD_USER);

  const signUp = async ({ username, password }) => {
    const user = {
      username,
      password,
    };
    const mutationResult = await mutate({ variables: { user } });
    return mutationResult;
  };

  return [signUp, result];
};

export default useSignUp;
