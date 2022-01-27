import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Line } from "./Line";
import { SecretLine } from "./SecretLine";
import { options } from "./options";

export const Screen = () => {
  return (
    <View style={styles.sections}>
      <SecretLine />
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
