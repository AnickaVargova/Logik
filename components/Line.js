import React, {useContext, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Squares } from "./Squares";
import { Evaluation } from "./Evaluation";
import { getCorrectColorsCount, getCorrectNumbersCount } from "../helpers";
import { GameContext } from "../App";

export const Line = ({ dropdown, backgroundsArr }) => {

  const context = useContext(GameContext);  
  const setGameData = context.setGameData;
  const [currentLine, setCurrentLine] = useState(backgroundsArr);

  const handleSubmit = () => {
    setGameData((p) => ({...p, submitted: true}));
  }
  
  return (
    <View style={styles.line}>
      <Squares dropdown={dropdown} backgroundsArr={currentLine}/>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Done</Text>
      </TouchableOpacity>
      <Evaluation />  
    </View>
  );
};

const styles=StyleSheet.create(
    {
        line: {
            display: "flex",
            flexDirection: "row",
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
        },
        button: {
            width: 50,
            height: 40,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 30,
            padding: 5,
            backgroundColor: "lightgreen",
            marginLeft: 20,
            marginTop: 0,
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
    }
)
