import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 20,
  },
  flexContainer: {
    display: "flex",
    flex: 1,
  },
});

const NumberField = ({ number, label }) => {
  let parsedNumber = number;
  if (number >= 1000) {
    parsedNumber = `${Math.round(number / 100) / 10}k`;
  }
  return (
    <View style={styles.flexContainer}>
      <Text fontSize={"kpi"} fontWeight="bold">
        {parsedNumber}
      </Text>
      <Text fontSize={"kpi"} color="textSecondary">
        {label}
      </Text>
    </View>
  );
};

export default NumberField;
