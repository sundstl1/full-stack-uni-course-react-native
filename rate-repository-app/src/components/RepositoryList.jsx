import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useHistory } from "react-router-native";
import { queryNodes } from "../utils/queryNodes";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, history }) => {
  // Get the nodes from the edges array
  const parsedRepositories = queryNodes(repositories);
  return (
    <FlatList
      data={parsedRepositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => {
        return <RepositoryItem item={item} history={history} />;
      }}
    />
  );
};

const RepositoryList = () => {
  const history = useHistory();

  const { repositories } = useRepositories({
    orderBy: "CREATED_AT",
    orderDirection: "ASC",
  });

  return (
    <RepositoryListContainer repositories={repositories} history={history} />
  );
};

export default RepositoryList;
