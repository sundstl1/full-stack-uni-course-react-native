import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  flexContainer: {
    display: "flex",
    backgroundColor: theme.colors.background,
  },
});

const Main = () => {
  return (
    <View style={styles.flexContainer}>
      <AppBar />
      <View style={styles.container}>
        <RepositoryList />
      </View>
    </View>
  );
};

export default Main;
