import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { GET_ME } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage";
import { useHistory } from "react-router-native";
import { useApolloClient } from "@apollo/client";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    flexDirection: "row",
    // ...
  },
  // ...
});

const AppBar = () => {
  const history = useHistory();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const { data, error, loading } = useQuery(GET_ME, []);

  if (error) {
    console.log(error);
  }

  const loggedIn = !loading && data.me;

  const toHome = () => {
    history.push("/");
  };

  const toSignIn = () => {
    history.push("/signin");
  };

  const toReview = () => {
    history.push("/review");
  };

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push("/");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab label="Repositories" onPress={toHome} />
        {loggedIn ? (
          <>
            <AppBarTab label="Create a review" onPress={toReview} />
            <AppBarTab label="Sign out" onPress={signOut} />
          </>
        ) : (
          <AppBarTab label="Sign in" onPress={toSignIn} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
