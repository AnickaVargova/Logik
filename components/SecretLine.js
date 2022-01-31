import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Squares } from "./Squares";
import { GameContext } from "../App";

export const SecretLine = () => {
const context = useContext(GameContext);
const secretOptions = context.gameData.secretOptions;
  
  return (
    <View style={styles.secretLine}>
      <Squares location={'header'} backgroundsArr={secretOptions} />
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
