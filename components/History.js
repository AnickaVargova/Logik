import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { GameContext } from "../App";
import { Squares } from "./Squares";
import { Evaluation } from "./Evaluation";

export const History = () => {
  const context = useContext(GameContext);
  const history = context.gameData.history;

  const historyMap = history.map((item, index) => (
    <View key={index} >
      <Squares dropdown={false} backgroundsArr={item.colors} />
      {/* <Evaluation /> */}
    </View>
  ));

  return <View>{historyMap}</View>;
};

// const styles=styleSheet.create(

// )
