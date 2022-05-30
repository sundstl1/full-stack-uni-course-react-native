import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(ADD_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const review = {
      repositoryName,
      ownerName,
      rating: Number(rating),
      text,
    };
    console.log(review);
    const mutationResult = await mutate({ variables: { review } });
    return mutationResult;
  };

  return [createReview, result];
};

export default useCreateReview;
