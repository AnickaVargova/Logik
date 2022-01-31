import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Screen } from "./components/Screen";
import { options } from "./components/options";
import { createSecretOptions} from "./helpers";

export const GameContext = React.createContext();

export default function App() {

  const [gameData, setGameData] = useState({
    secretOptions: createSecretOptions(options),
    history: [],
    current: ['','','',''],
    submitted: 1
  });

  return (
    <GameContext.Provider value={{gameData, setGameData}}>
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
    padding: 20,
    paddingTop: 100
  }
});
