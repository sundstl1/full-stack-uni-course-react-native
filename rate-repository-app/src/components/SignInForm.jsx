import { View, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import PressableButton from "./pressableButton";

const styles = StyleSheet.create({
  container: theme.forms.formField,
  formButton: theme.forms.formButton,
  flexContainer: {
    display: "flex",
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  outsideContainer: {
    padding: 10,
    flex: 1,
    maxHeight: "10%",
    minHeight: "8%",
  },
  buttonContainer: {
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    maxHeight: "10%",
    minHeight: "8%",
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.outsideContainer}>
        <FormikTextInput name="username" placeholder="Username" />
      </View>
      <View style={styles.outsideContainer}>
        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <PressableButton
          label="Sign in"
          onSubmit={onSubmit}
          style={{
            ...styles.formButton,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </View>
    </View>
  );
};

export default SignInForm;
