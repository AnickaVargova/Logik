import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GameContext } from "../App";
import { getEvaluation } from "../helpers";

export const Evaluation = ({lineIndex}) => {
  const context = useContext(GameContext);
  const gameData = context.gameData;
  const submitted = context.gameData.submitted;
  const setGameData = context.setGameData;
  const secret = context.gameData.secretOptions;
  const history = context.gameData.history;
  const lineColors = history.length ? history[lineIndex].colors : ['', '', '', '']; 
  
  const [evalArray, setEvalArray] = useState(getEvaluation(4, lineColors ,secret).evalArray);
  
  useEffect(() => {setEvalArray(getEvaluation(4, lineColors ,secret).evalArray); setGameData({...gameData, gameOver: getEvaluation(4, lineColors ,secret).isGameOver})}, [submitted]);

  return (

    <View style={styles.line}>
        
      {evalArray.map((color, index) => (
        <View
          style={styles.circle}
          key={index}
          backgroundColor={color}
          borderWidth={!color && 0}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 20
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "grey",
    margin: 5,
    marginRight: 2
  }
});
