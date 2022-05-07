import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

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
    <View style={styles.inputBoxContainer}>
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
          <PrimaryButton onPress={resetInputHandler} color="#72063c">
            Reset
          </PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler} color="#0891B2">
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputBoxContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 16,
    backgroundColor: "#4e0329",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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