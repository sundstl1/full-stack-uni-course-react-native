import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";
import { Route } from "react-router-native";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import CreateReview from "./CreateReview";
import SingleRepository from "./SingleRepository";
import MyReviews from "./MyReviews";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  flexContainer: {
    display: "flex",
    backgroundColor: theme.colors.background,
    flex: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.flexContainer}>
      <AppBar />
      <Route path="/" component={RepositoryList} exact />
      <Route path="/signin" component={SignIn} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/review" component={CreateReview} exact />
      <Route path="/myreviews" component={MyReviews} exact />
      <Route path="/repository/:id" component={SingleRepository} exact />
    </View>
  );
};

export default Main;
