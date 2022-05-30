import { useHistory } from "react-router-native";
import { FlatList } from "react-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";

import { queryNodes } from "../utils/queryNodes";
import ReviewItem from "./ReviewItem";

const SingleRepository = () => {
  const history = useHistory();
  const location = history.location.pathname;
  const id = location.slice("/repository/".length);
  const { repository } = useRepository(id);

  if (repository) {
    console.log(repository.reviews.edges);
  }

  //const parsedRepositories = repositoryNodes(repositories);

  //const repository = parsedRepositories.find((r) => r.id === id);

  return repository ? (
    <FlatList
      data={queryNodes(repository.reviews)}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repository} showLink />}
      // ...
    />
  ) : (
    <></>
  );
};

export default SingleRepository;
