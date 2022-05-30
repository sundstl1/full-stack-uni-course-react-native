import useUserReviews from "../hooks/useUserReviews";
import { queryNodes } from "../utils/queryNodes";
import Text from "./Text";
import ReviewItem from "./ReviewItem";
import { FlatList } from "react-native";

const MyReviews = () => {
  const { user } = useUserReviews();
  if (!user) {
    return <Text>loading...</Text>;
  }
  const reviews = queryNodes(user.me.reviews);
  console.log(reviews);
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}

      // ...
    />
  );
};

export default MyReviews;
