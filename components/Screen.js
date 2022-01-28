import React, {useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Line } from "./Line";
import { Header } from "./Header";
import { options } from "./options";
import { GameContext } from "../App";

export const Screen = () => {
  const context = useContext(GameContext);
  const current = context.gameData.current;

  return (
    <View style={styles.sections}>
      <Header />
      <Line dropdown={true} backgroundsArr={current}/>
    </View>
  );
};

const styles = StyleSheet.create({
  sections: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    width: '100%'
  }
});
