import React, {useContext} from "react";
import { SecretLine } from "./SecretLine";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { GameContext } from "../App";


export const Header = () => {
//   const enterGuess = useContext(gameContext).enterGuess;
  return (
    <View style={styles.header}>
      <SecretLine />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-between'
  },
  
});
