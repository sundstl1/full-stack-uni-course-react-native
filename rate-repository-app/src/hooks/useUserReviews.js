import { useQuery } from "@apollo/client";
import { USER_REVIEWS } from "../graphql/queries";

const useUserReviews = () => {
  const { data, error, loading, refetch } = useQuery(
    USER_REVIEWS,
    {
      fetchPolicy: "cache-and-network",
      // Other options
    },
    []
  );
  // if (!loading && data) {
  //   console.log(data.repositories);
  // }

  return {
    user: data ? data : null,
    error,
    loading,
    refetch,
  };
};

export default useUserReviews;
