import { FlatList, View, StyleSheet } from "react-native";
import { useState } from "react";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useHistory } from "react-router-native";
import { queryNodes } from "../utils/queryNodes";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import { useApolloClient } from "@apollo/client";

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
  const apolloClient = useApolloClient();
  const latest = {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  };

  const highestRated = {
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
  };

  const lowestRated = {
    orderBy: "RATING_AVERAGE",
    orderDirection: "ASC",
  };

  const [getRepositories, { repositories, loading }] = useRepositories();
  if (!repositories && !loading) {
    getRepositories({ variables: latest });
  }

  const [visible, setVisible] = useState(true);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <>
      <Provider>
        <View
          style={{
            paddingTop: 50,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>Sort by</Button>}
          >
            <Menu.Item
              onPress={() => {
                getRepositories({ variables: latest });
                setVisible(false);
              }}
              title="Latest repositories"
            />
            <Menu.Item
              onPress={() => {
                getRepositories({ variables: highestRated });
                setVisible(false);
              }}
              title="Highest rated repositories"
            />
            <Divider />
            <Menu.Item
              onPress={() => {
                getRepositories({ variables: lowestRated });
                setVisible(false);
              }}
              title="Lowest rated repositories"
            />
          </Menu>
        </View>

        <RepositoryListContainer
          repositories={repositories}
          history={history}
        />
      </Provider>
    </>
  );
};

export default RepositoryList;
