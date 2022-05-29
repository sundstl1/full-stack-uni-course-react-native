import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const TextInput = ({ style, error, ...props }) => {
  const styles = StyleSheet.create({
    error: {
      ...style,
      borderColor: "red",
      color: "red",
    },
    default: {},
  });
  const textInputStyle = [style ? style : styles.default];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
