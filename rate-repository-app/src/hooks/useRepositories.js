import { useLazyQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const [getRepositories, { data, error, loading, fetchMore, refetch }] =
    useLazyQuery(
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

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return [
    getRepositories,
    {
      repositories: data ? data.repositories : null,
      fetchMore: handleFetchMore,
      error,
      loading,
      refetch,
    },
  ];
};

export default useRepositories;
