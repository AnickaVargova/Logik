import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { options } from "./options";

const Dropdown = ({ setChosen, setVisible }) => {
  return (
    <View>
      {Array.from(options).map((item, index) => (
        <TouchableOpacity
          style={{ ...styles.option, backgroundColor: item }}
          key={index}
          onPress={() => {
            setChosen(item);
            setVisible(false);
          }}
        />
      ))}
    </View>
  );
};

export const Square = ({defaultBackground, withDropdown}) => {
  const [visible, setVisible] = useState(false);
  const [chosen, setChosen] = useState("");

  const toggleDropdown = () => {
    setVisible((p) => !p);
  };

  return (
    <View style={styles.dropdown}>
      <TouchableOpacity
        style={{ ...styles.menuButton, backgroundColor: defaultBackground ? defaultBackground : chosen }}
        onPress={toggleDropdown}
      />
      {withDropdown && visible && <Dropdown setChosen={setChosen} setVisible={setVisible}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    display: "flex",
    flexDirection: "column",
    width: 30,
    margin: 10
  },
  menuButton: {
    width: 26,
    height: 26,
    borderColor: "black",
    borderWidth: 2
  },
  option: {
    width: 26,
    height: 26
  }
});
