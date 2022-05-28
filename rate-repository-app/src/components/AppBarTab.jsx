import theme from "../theme";
import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBar,
    flexGrow: 1,
    flexShrink: 0,
    height: 50,
    justifyContent: "center",
    alignItems: "stretch",
    paddingLeft: 10,
  },
});

const AppBarTab = ({ label, to }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          console.log(`Pressed ${label}`);
        }}
      >
        <Link to={to}>
          <Text fontSize={"subheading"} fontWeight="bold" color="appBarText">
            {label}
          </Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
