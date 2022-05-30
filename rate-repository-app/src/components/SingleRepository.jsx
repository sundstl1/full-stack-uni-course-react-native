import { useHistory } from "react-router-native";
import { FlatList, View, StyleSheet } from "react-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
import { queryNodes } from "../utils/queryNodes";
import theme from "../theme";

const styles = StyleSheet.create({
  reviewContainer: {
    flexDirection: "row",
    padding: 40,
    backgroundColor: theme.colors.listObject,
    display: "flex",
    justifyContent: "center",
  },
  ratingNumberContainer: {
    borderColor: theme.colors.primary,
    borderRadius: 100,
    borderWidth: 2,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingTextContainer: {
    borderColor: theme.colors.primary,

    paddingLeft: 10,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <View style={styles.reviewContainer}>
        <View style={styles.ratingNumberContainer}>
          <Text fontSize="rating" color="primary">
            {review.rating}
          </Text>
        </View>
        <View style={styles.ratingTextContainer}>
          <Text fontSize="kpi" fontWeight="bold">
            {review.user.username}
          </Text>
          <Text fontSize="kpi" color="textSecondary">
            {new Date(review.createdAt).toDateString()}
          </Text>
          <Text fontSize="kpi" style={{ paddingTop: 10 }}>
            {review.text}
          </Text>
        </View>
      </View>
    </View>
  );
};

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
