import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../utils/colors";

const PrimaryButton = ({ children, color, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [
                styles.buttonInnerContainer,
                styles.pressed,
                { backgroundColor: color },
              ]
            : [styles.buttonInnerContainer, { backgroundColor: color }]
        }
        android_ripple={{ color: Colors.gray }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
