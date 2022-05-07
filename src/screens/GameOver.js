import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOver({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Guess <Text style={styles.highlight}>{roundsNumber}</Text> Given{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame} color={Colors.positive}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 300,
    borderWidth: 3,
    borderColor: Colors.light,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: Colors.light,
    fontWeight: "bold",
    marginBottom: 16,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.yellow,
  },
});
