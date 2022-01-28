import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { options } from "./options";
import { GameContext } from "../App";

const Dropdown = ({ setChosen, setVisible, squareIndex }) => {
const context = useContext(GameContext);
const setGameData = context.setGameData;

const selectColor = (color, squareIndex) => {
    setGameData((p) => {
        const newLine = [...p.current];
        newLine[squareIndex] = color;
        return {...p, current: newLine};
    })
}

  return (
    <View>
      {Array.from(options).map((item, index) => (
        <TouchableOpacity
          style={{ ...styles.option, backgroundColor: item }}
          key={index}
          onPress={() => {
            selectColor(item, squareIndex);
            setChosen(item);
            setVisible(false);
          }}
        />
      ))}
    </View>
  );
};

export const Square = ({
  defaultBackground,
  withDropdown,
  index,
}) => {
  const context = useContext(GameContext);
  const [visible, setVisible] = useState(false);
  const [chosen, setChosen] = useState("");

  const toggleDropdown = () => {
    setVisible((p) => !p);
  };

  return (
    <View style={styles.dropdown}>
      <TouchableOpacity
        style={{
          ...styles.menuButton,
          backgroundColor: defaultBackground ? defaultBackground : chosen
        }}
        onPress={toggleDropdown}
      />
      {withDropdown && visible && (
        <Dropdown
          setChosen={setChosen}
          setVisible={setVisible}
          squareIndex={index}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    display: "flex",
    flexDirection: "column",
    width: 24,
    margin: 5
  },
  menuButton: {
    width: 20,
    height: 20,
    borderColor: "black",
    borderWidth: 2
  },
  option: {
    width: 20,
    height: 20
  }
});
