import { useHistory } from "react-router-native";
import useRepositories from "../hooks/useRepositories";
import { repositoryNodes } from "../utils/repositoryNodes";
import RepositoryItem from "./RepositoryItem";

const SingleRepository = () => {
  const history = useHistory();
  const { repositories } = useRepositories();
  const parsedRepositories = repositoryNodes(repositories);
  const location = history.location.pathname;
  const id = location.slice("/repository/".length);
  const repository = parsedRepositories.find((r) => r.id === id);

  return <RepositoryItem item={repository} showLink />;
};

export default SingleRepository;
