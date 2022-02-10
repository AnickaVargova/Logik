import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import { Screen } from "./components/Screen";
import { getDefaultData } from "./data";

export const GameContext = React.createContext();

export default function App() {

  const [gameData, setGameData] = useState(getDefaultData());

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
