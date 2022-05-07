import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../utils/colors";

export default function GuessLog({ roundsNumber, computerGuess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundsNumber}</Text>
      <Text style={styles.itemText}>Computer Guess: {computerGuess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary500,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.yellow,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: Colors.primary900,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
