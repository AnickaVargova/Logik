import React, {useContext} from "react";
import { SecretLine } from "./SecretLine";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { GameContext } from "../App";


export const Header = () => {
//   const enterGuess = useContext(gameContext).enterGuess;
  return (
    <View style={styles.header}>
      <SecretLine />
      <TouchableOpacity style={styles.button}>
        <Text>Evaluate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    width: 70,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "lightgreen",
    marginLeft: 20,
    marginTop: 0,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
