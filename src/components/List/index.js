import React from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {Ionicons} from '@expo/vector-icons';


import styles from './styles';

export default function List({data, deleteItem}){
    return(
    <View style={styles.listComponent}>
        <TouchableOpacity onPress={ () => deleteItem(data)}><Text><Ionicons name="md-checkmark-circle" size={30} color="#fff"/></Text></TouchableOpacity>
        <Text style={styles.titleComponent}>{data.list}</Text></View>
    
    );
}

