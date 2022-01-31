import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const Button = ({ text, onPress, color }) => {
  return (
    <TouchableOpacity style={{...styles.button, backgroundColor: color}} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
    backgroundColor: "lightgreen",
    marginLeft: 20,
    marginRight: 5,
    marginTop: 0,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
