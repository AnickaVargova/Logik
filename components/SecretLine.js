import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Squares } from "./Squares";
import { options } from "./options";

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

export const SecretLine = () => {
  return (
    <View style={styles.secretLine}>
      <Squares dropdown={false} backgroundsArr={createSecretOptions(options)} />
    </View>
  );
};

const styles = StyleSheet.create({
  secretLine: {
    marginBottom: 30,
    height: 40
  }
});
