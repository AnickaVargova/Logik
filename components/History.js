import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { GameContext } from "../App";
import { Squares } from "./Squares";
import { Evaluation } from "./Evaluation";

export const History = () => {
  const context = useContext(GameContext);
  const history = context.gameData.history;
  const submitted = context.gameData.submitted;

  const historyMap = history.map((item, index) => (
    <View key={index} index={index} style={styles.historyLine}>
      <Squares dropdown={false} backgroundsArr={item.colors} />
      <Evaluation lineIndex={index} key={submitted} />
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
