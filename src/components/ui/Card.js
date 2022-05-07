import { View, StyleSheet } from "react-native";
import React from "react";

import Colors from "../../utils/colors";

export default function Card({ children }) {
  return <View style={styles.inputBoxContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputBoxContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
