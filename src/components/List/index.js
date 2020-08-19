import React from "react";
import {Text} from "react-native";
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

export default function List({data}){
    return(
    <RectButton style={styles.listComponent}><Text style={styles.titleComponent}> {data.list} </Text></RectButton>
    );
}

