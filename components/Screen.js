import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Line } from "./Line";
import { Header } from "./Header";
import { GameContext } from "../App";
import { History } from "./History";

export const Screen = () => {
  const context = useContext(GameContext);
  const current = context.gameData.current;
  const setGameData = context.setGameData;
  const history = context.gameData.history;
  const submitId = context.gameData.submitId;
  const gameOver = context.gameData.gameOver;
  
  const renderHistory = () => {
    if (!history.length) return;
    return <History />;
  };

  const closeDropdowns = () => {
    setGameData((p) => ({ ...p, dropdowns: p.dropdowns.map((item) => false) }));
  };

  return (
    <TouchableWithoutFeedback onPress={closeDropdowns}>
      <View style={styles.sections}>
        <Header />
        {renderHistory()}
        {!gameOver && (
          <Line location={"current"} backgroundsArr={current} key={submitId} />
        )}
        {gameOver && (
          <View style={styles.messageContainer}>
            <Text style={styles.text}>
              Your guess is correct. Congratulations!!!
            </Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  sections: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    width: "100%"
  },
  messageContainer: {
    marginTop: 20
  },
  text: {
    color: "mediumseagreen",
    fontSize: 20
  }
});
