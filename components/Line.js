import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Squares } from "./Squares";
import { Evaluation } from "./Evaluation";

export const Line = ({ dropdown, backgroundsArr }) => {
  return (
    <View style={styles.line}>
      <Squares dropdown={dropdown} backgroundsArr={backgroundsArr} />
      <Evaluation />  
    </View>
  );
};

const styles=StyleSheet.create(
    {
        line: {
            display: "flex",
            flexDirection: "row",
        }
    }
)
