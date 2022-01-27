import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Screen } from "./components/Screen";
import { options } from "./components/options";

const createSecretOptions = (options) => {
  const resultArr = [];
  const getRandomIndex = () => Math.round(Math.random() * (options.length - 1));
  while (resultArr.length < 4) {
    const randomColor = options[getRandomIndex()];
    if (!resultArr.includes(randomColor)) {
      resultArr.push(randomColor);
    }
  }
  return resultArr;
};

const gameData = {
  secretOptions: createSecretOptions(options),
  evaluateGuess: (selectedOptions) =>
    selectedOptions.reduce(
      (count, current) => (this.secretOptions.includes(current) ? ++count : count),
      0
    ),
  
  enterGuess: (bool) => bool,
};

export const GameContext = React.createContext();

export default function App() {
  return (
    <GameContext.Provider value={gameData}>
      <View style={styles.container}>
        <Screen />
      </View>
    </GameContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    paddingTop: 100
  }
});
