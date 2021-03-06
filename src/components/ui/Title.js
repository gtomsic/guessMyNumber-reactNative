import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../utils/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.light,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.light,
    padding: 12,
  },
});
