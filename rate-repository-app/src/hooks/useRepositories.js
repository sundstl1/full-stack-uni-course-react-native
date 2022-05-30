import { useLazyQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [getRepositories, { data, error, loading, refetch }] = useLazyQuery(
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

  return [
    getRepositories,
    {
      repositories: data ? data.repositories : null,
      error,
      loading,
      refetch,
    },
  ];
};

export default useRepositories;
