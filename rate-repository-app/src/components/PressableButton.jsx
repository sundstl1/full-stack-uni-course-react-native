import { Pressable } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: theme.forms.formButton,
});

const PressableButton = ({ label, onSubmit, style }) => {
  return (
    <Pressable
      onPress={onSubmit}
      style={{
        ...style,
        padding: 0,
        backgroundColor: theme.colors.primary,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: theme.fontWeights.bold,
        flex: 1,
      }}
    >
      <Text fontWeight="bold">{label}</Text>
    </Pressable>
  );
};

export default PressableButton;
