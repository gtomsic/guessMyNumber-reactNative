import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const PrimaryButton = ({ children, color, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [
                styles.buttonInnerContainer,
                styles.pressed,
                { backgroundColor: color },
              ]
            : [styles.buttonInnerContainer, { backgroundColor: color }]
        }
        onPress={onPress}
        android_ripple={{ color: "#dedede" }}
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
