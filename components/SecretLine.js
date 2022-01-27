import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Squares } from "./Squares";
import { GameContext } from "../App";

export const SecretLine = () => {
  const secretOptions = useContext(GameContext).secretOptions;
  
  return (
    <View style={styles.secretLine}>
      <Squares dropdown={false} backgroundsArr={secretOptions} />
    </View>
  );
};

const styles = StyleSheet.create({
  secretLine: {
    marginBottom: 30,
    borderColor: "blue",
    borderWidth: 1
  }
});
