import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { GameContext } from "../App";
import { Squares } from "./Squares";
import { Evaluation } from "./Evaluation";

export const History = () => {
  const context = useContext(GameContext);
  const history = context.gameData.history;
  const submitId = context.gameData.submitId;

  const historyMap = history.map((item, index) => (
    <View key={index} index={index} style={styles.historyLine}>
      <Squares location={'history'} backgroundsArr={item.colors} />
      <Evaluation lineIndex={index} key={submitId} />
    </View>
  ));

  return <View>{historyMap}</View>;
};

const styles = StyleSheet.create({
  historyLine: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start"
  }
});
