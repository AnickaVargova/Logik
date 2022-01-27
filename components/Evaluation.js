import React, {useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import { GameContext } from '../App';

export const Evaluation = () => {
//   const evaluateGuess = useContext(GameContext).evaluateGuess;

  return (
    <View style={styles.line}>
      {Array.from({length: 4}).map((item,index) => <View style={styles.circle} key={index}/>)}

    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    marginLeft: 20
  },
  circle: {
      width: 20,
      height: 20,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'grey',
      backgroundColor: 'lightgrey',
      margin: 5,
      marginRight: 2
  }
});
