import { Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: theme.forms.formButton,
  textContainer: {
    justifyContent: "center",
    color: "white",
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.KPI,
  },
});

const PressableButton = ({ label, onSubmit, style }) => {
  return (
    <Pressable
      onPress={onSubmit}
      style={{
        ...style,
        backgroundColor: theme.colors.primary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.textContainer}>
        <Text fontWeight="bold" color="white" style={styles.textContainer}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export default PressableButton;
