import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { options } from "../data";
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

const SecretSquare = () => (
  <View style={styles.menuButton}>
    <Text>?</Text>
  </View>
);


const renderSquare = (props, location, currentBackground) =>
  location === "current" ? (
    <TouchableOpacity
      {...props}
      style={{ ...styles.menuButton, backgroundColor: currentBackground }}
    />
  ) : location === "header" ? (
    props.secretShown ? (
      <View {...props} />
    ) : (
      <SecretSquare
        {...props}
        style={{ ...styles.menuButton, backgroundColor: "white" }}
      />
    )
  ) : (
    //for history squares
    <View {...props} />
  );

export const Square = ({ defaultBackground, location, index }) => {
  const context = useContext(GameContext);
  const secretShown = context.gameData.gameOver || context.gameData.secretShown;
  const setGameData = context.setGameData;
  const currentBackground = context.gameData.current[index];
  const dropdownVisible = context.gameData.dropdowns[index];

  const toggleDropdown = () => {
    setGameData((p) => {
      const isOpen = p.dropdowns[index];
      const newDropdown = [...p.dropdowns];
      newDropdown[index] = !isOpen;
      return { ...p, dropdowns: newDropdown };
    });
  };

  const squareProps = {
    onPress: toggleDropdown,
    secretShown,
    style: { ...styles.menuButton, backgroundColor: defaultBackground }
  };

  return (
    <View style={styles.dropdown}>
      {renderSquare(squareProps, location, currentBackground)}
      {location === "current" && dropdownVisible && (
        <Dropdown setVisible={toggleDropdown} squareIndex={index} />
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
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  option: {
    width: 20,
    height: 20
  }
});
