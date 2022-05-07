import { View, StyleSheet, Alert, FlatList, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../utils/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLog from "../components/Game/GuessLog";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRouds] = useState([initialGuess]);
  useEffect(() => {
    if (Number(currentGuess) === Number(userNumber)) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  const nextGuessNumber = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert(`Please lead to to correct way.`, "You know its wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRouds((state) => [newRandomNumber, ...state]);
  };

  const guessRoundsLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higer or lower?
        </InstructionText>
        <View style={styles.buttonsGroup}>
          <View style={styles.button}>
            <PrimaryButton
              onPress={() => nextGuessNumber("lower")}
              color={Colors.danger}
            >
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton
              onPress={() => nextGuessNumber("higher")}
              color={Colors.positive}
            >
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        {/* {guessRounds.map((round) => (
          <Text key={round}>{round}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLog
              roundsNumber={guessRoundsLength - itemData.index}
              computerGuess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsGroup: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
