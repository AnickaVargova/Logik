import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import { Square } from "./Square";
import { GameContext } from "../App";

export const Squares = ({ location, backgroundsArr}) => {

  const context = useContext(GameContext);
  const current = context.gameData.current;
  const squareLine = Array.from(backgroundsArr).map((background, index) => (
    <Square
      key={Math.random() + current[index].length}
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
