import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Squares } from "./Squares";
import { Evaluation } from "./Evaluation";
import { getCorrectColorsCount, getCorrectNumbersCount } from "../helpers";
import { GameContext } from "../App";

export const Line = ({ dropdown, backgroundsArr }) => {
  const context = useContext(GameContext);
  const setGameData = context.setGameData;
  const current = context.gameData.current;
  const submitted = context.gameData.submitted;
  const [currentLine, setCurrentLine] = useState(backgroundsArr);

  const showAlert = () =>
    Alert.alert(
      "All squares must be filled.",
      "Please select colours for remaining squares.",
      [
        {
          text: "OK"
        }
      ]
    );



  const handleSubmit = () => {
    if (current.some((el) => el === "")) {
      showAlert();
      return;
    }

    setGameData((p) => ({ ...p, history: [...p.history, { colors: current }], current: ['','','',''], submitted: ++p.submitted }));
  };

  

//   useEffect(() => {
//     setGameData((p) => ({ ...p, history: [...p.history, { colors: current }], current: emptyCurrent}));
//   }, [submitted]);

  return (
    <View style={styles.line}>
      <Squares dropdown={dropdown} backgroundsArr={current} />
      {/* {!submitted && ( */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text>Done</Text>
        </TouchableOpacity>
      {/* )} */}
      <Evaluation key={submitted}/>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start"
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
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
