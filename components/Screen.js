import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Line } from "./Line";
import { Header } from "./Header";
import { options } from "./options";
import { GameContext } from "../App";
import { History } from "./History";

export const Screen = () => {
  const context = useContext(GameContext);
  const current = context.gameData.current;
  const history = context.gameData.history;
  const submitted = context.gameData.submitted;
  const gameOver = context.gameData.gameOver;
  const renderHistory = () => {
    if (!history.length) return;
    return <History />;
  };

  return (
    <View style={styles.sections}>
      <Header />
      {renderHistory()}
      {!gameOver && <Line dropdown={true} backgroundsArr={current} key={submitted} />}
      {gameOver && (
        <View style={styles.messageContainer}>
          <Text style={styles.text}>
            Your guess is correct. Congratulations!!!
          </Text>
        </View>
      )}
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
