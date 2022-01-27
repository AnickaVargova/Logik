import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Square } from "./Square";

export const Squares = ({ dropdown, backgroundsArr }) => {
  const squareLine = Array.from(backgroundsArr).map((background, index) => (
    <Square
      key={index}
      withDropdown={dropdown}
      defaultBackground={background}
    />
  ));
  return <View style={styles.squareLine}>{squareLine}</View>;
};

const styles = StyleSheet.create({
  squareLine: {
    margin: 10,
    display: "flex",
    flexDirection: "row"
  }
});
