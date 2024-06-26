import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ subtitle }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBlockColor: "#e2b497",
    borderBottomWidth: 2,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
