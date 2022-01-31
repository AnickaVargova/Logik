import React, { useContext } from "react";
import { SecretLine } from "./SecretLine";
import { View, StyleSheet } from "react-native";
import { GameContext } from "../App";
import { Button } from "./Button";
import { getDefaultData } from "../data";

export const Header = () => {
  const context = useContext(GameContext);
  const setGameData = context.setGameData;

  const resetAll = () => { setGameData(getDefaultData) };

  const showSecretOptions = () => { setGameData((p) => ({...p, secretShown: true}))};

  return (
    <View style={styles.header}>
      <SecretLine />
      <View style={styles.buttonContainer}>
        <Button text={"Reset"} color={'pink'} onPress={resetAll}/>
        <Button text={"Show"} color={'mediumorchid'} onPress={showSecretOptions}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
  }
});
