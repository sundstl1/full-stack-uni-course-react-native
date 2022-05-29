import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, error, loading, refetch } = useQuery(
    GET_REPOSITORIES,
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
    repositories: data ? data.repositories : null,
    error,
    loading,
    refetch,
  };
};

export default useRepositories;
