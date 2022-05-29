import { View, StyleSheet, Image } from "react-native";
import theme from "../theme";
import Text from "./Text";
import NumberField from "./NumberField";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 10,
    justifyContent: "center",
    alignContent: "stretch",
  },
  flexContainer: {
    display: "flex",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  languageContainer: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    flexGrow: 0,
    flexDirection: "row",
  },
});

const RepositoryItem = ({ item }) => {
  const UserView = () => {
    return (
      <View
        style={{
          ...styles.container,
          flexDirection: "column",
          backgroundColor: theme.colors.listObject,
        }}
      >
        <View style={{ ...styles.container, flexDirection: "row" }}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.ownerAvatarUrl,
            }}
          />
          <View style={styles.container}>
            <Text fontSize={"subheading"} fontWeight="bold">
              {item.fullName}
            </Text>
            <Text fontSize={"subheading"} color="textSecondary">
              {item.description}
            </Text>
            <View>
              <View style={styles.languageContainer}>
                <Text style={{ color: "white", fontSize: 20 }}>
                  {item.language}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ ...styles.container, flexDirection: "row" }}>
          <NumberField number={item.stargazersCount} label="Stars" />
          <NumberField number={item.forksCount} label="Forks" />
          <NumberField number={item.reviewCount} label="Reviews" />
          <NumberField number={item.ratingAverage} label="Rating" />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <UserView />
    </View>
  );
};

export default RepositoryItem;
