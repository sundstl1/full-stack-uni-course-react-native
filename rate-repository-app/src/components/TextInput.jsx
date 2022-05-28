import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
  console.log(error);
  const textInputStyle = [style ? style : styles];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
