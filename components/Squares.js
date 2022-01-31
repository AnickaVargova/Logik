import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Square } from "./Square";


export const Squares = ({ location, backgroundsArr}) => {

  const squareLine = Array.from(backgroundsArr).map((background, index) => (
    <Square
      key={index}
      location={location}
      defaultBackground={background}
      index={index}
    />
  ));
  return <View style={styles.squareLine}>{squareLine}</View>;
};

const styles = StyleSheet.create({
  squareLine: {
    display: "flex",
    flexDirection: "row"
  }
});
