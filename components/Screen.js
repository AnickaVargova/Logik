import React, {useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Line } from "./Line";
import { Header } from "./Header";
import { options } from "./options";


export const Screen = () => {
  return (
    <View style={styles.sections}>
      <Header />
      <Line dropdown={true} backgroundsArr={[undefined,undefined,undefined,undefined]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  sections: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1
  }
});
