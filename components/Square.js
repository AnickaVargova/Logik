import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { options } from "./options";
import { GameContext } from "../App";

const Dropdown = ({ setVisible, squareIndex }) => {
  const context = useContext(GameContext);
  const setGameData = context.setGameData;

  const selectColor = (color, squareIndex) => {
    setGameData((p) => {
      const newLine = [...p.current];
      newLine[squareIndex] = color;
      return { ...p, current: newLine };
    });
  };

  return (
    <View>
      {Array.from(options).map((item, index) => (
        <TouchableOpacity
          style={{ ...styles.option, backgroundColor: item }}
          key={index}
          onPress={() => {
            selectColor(item, squareIndex);
            setVisible(false);
          }}
        />
      ))}
    </View>
  );
};

const withSquareFunctionality =
  (Component) =>
  ({ ...props }) =>
    <Component {...props} />;

const HeaderSquare = withSquareFunctionality(View);
const HistorySquare = withSquareFunctionality(View);
const CurrentSquare = withSquareFunctionality(TouchableOpacity);

const renderSquare = (props, location) =>
  location === "current" ? (
    <CurrentSquare {...props} />
  ) : location === "header" ? (
    <HeaderSquare {...props} />
  ) : (
    <HistorySquare {...props} />
  );

export const Square = ({ defaultBackground, location, index }) => {
  const context = useContext(GameContext);
  const [visible, setVisible] = useState(false);
  const toggleDropdown = () => {
    setVisible((p) => !p);
  };

  const squareProps = {
    onPress: toggleDropdown,
    style: { ...styles.menuButton, backgroundColor: defaultBackground }
  };

  return (
    <View style={styles.dropdown}>
      {renderSquare(squareProps, location)}
      {location === "current" && visible && (
        <Dropdown setVisible={setVisible} squareIndex={index} />
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
