import { View, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import PressableButton from "./PressableButton";

const styles = StyleSheet.create({
  container: theme.forms.formField,
  formButton: theme.forms.formButton,
  flexContainer: {
    display: "flex",
    backgroundColor: theme.colors.background,
    flexGrow: 1,
    flexShrink: 0,
    minHeight: "100%",
  },
  outsideContainer: {
    padding: 10,
    height: 100,
    flexGrow: 0,
    flexShrink: 0,
  },
  buttonContainer: {
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 0,
    flexShrink: 0,
    height: 100,
    color: "white",
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.outsideContainer}>
        <FormikTextInput
          name="ownerName"
          placeholder="Repository owner name"
          style={theme.container}
        />
      </View>
      <View style={styles.outsideContainer}>
        <FormikTextInput
          name="repositoryName"
          placeholder="Repository name"
          style={theme.container}
        />
      </View>
      <View style={styles.outsideContainer}>
        <FormikTextInput
          name="rating"
          placeholder="Rating between 0 and 100"
          style={theme.container}
        />
      </View>
      <View style={styles.outsideContainer}>
        <FormikTextInput
          name="text"
          placeholder="Review"
          style={theme.container}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PressableButton
          label="Create a review"
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
