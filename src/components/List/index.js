import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {RectButton} from 'react-native-gesture-handler';


import styles from './styles';

export default function List({data, onPress}){
    return(
    <RectButton style={styles.listComponent} onPress={onPress}><Text style={styles.titleComponent}>{data.list}</Text></RectButton>
    );
}

