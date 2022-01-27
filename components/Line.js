import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import  {Squares} from './Squares'; 

export const Line = ({dropdown, backgroundsArr}) => {
    return <Squares dropdown={dropdown} backgroundsArr={backgroundsArr}/>
}