import { useQuery } from "@apollo/client";
import { GET_SINGLE_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, error, loading, refetch } = useQuery(
    GET_SINGLE_REPOSITORY,
    { variables: { repositoryId: id } },
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
    repository: data ? data.repository : null,
    error,
    loading,
    refetch,
  };
};

export default useRepository;
