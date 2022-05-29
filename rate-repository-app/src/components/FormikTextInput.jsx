import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error,
    fontSize: theme.fontSizes.subheading,
  },
  default: theme.forms.formField,
});

const FormikTextInput = ({ name, style, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const usedStyle = style ? style : styles.default;
  const errorStyle = { ...usedStyle, borderColor: theme.colors.error };

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={showError ? errorStyle : usedStyle}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
