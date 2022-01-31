import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Squares } from "./Squares";
import { Evaluation } from "./Evaluation";
import { getCorrectColorsCount, getCorrectNumbersCount, areColorsUnique } from "../helpers";
import { GameContext } from "../App";
import { Button } from './Button';

export const Line = ({location, backgroundsArr, index }) => {
  const context = useContext(GameContext);
  const setGameData = context.setGameData;
  const current = context.gameData.current;
  const submitted = context.gameData.submitted;
  const [currentLine, setCurrentLine] = useState(backgroundsArr);

  const showNotComplete = () =>
    Alert.alert(
      "All squares must be filled.",
      "Please select colours for remaining squares.",
      [
        {
          text: "OK"
        }
      ]
    );

 const showNoRepeat = () => 
 Alert.alert(
    "Some colors are used more times.",
    "Please change your colors.",
    [
      {
        text: "OK"
      }
    ]
  );

  const handleSubmit = () => {
    if (current.some((el) => el === "")) {
      showNotComplete();
      return;
    }

    if (!areColorsUnique(current)) {
        showNoRepeat();
        return;
    }

    setGameData((p) => ({ ...p, history: [...p.history, { colors: current }], current: ['','','',''], submitted: ++p.submitted }));
  };

  console.log(current);

  return (
    <View style={styles.line}>
      <Squares location={location} backgroundsArr={current} />
        <Button text={'Done'} onPress={handleSubmit} color={'lightgreen'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  button: {
    width: 50,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
    marginLeft: 20,
    marginTop: 0,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
