import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../utils/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ pickedNumber }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const resetInputHandler = () => {
    setEnteredValue("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // Show alert
      Alert.alert(
        "Invalid number!",
        "Number need to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    pickedNumber(enteredValue);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          value={enteredValue}
          onChangeText={(value) => setEnteredValue(value)}
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.buttonsGroup}>
          <View style={styles.button}>
            <PrimaryButton
              onPress={resetInputHandler}
              color={Colors.primary500}
            >
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton
              onPress={confirmInputHandler}
              color={Colors.positive}
            >
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.yellow,
    borderBottomWidth: 2,
    color: Colors.yellow,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsGroup: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
