import React from 'react';
import { View, Text, Image } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import List from '../../components/List/index';

import Logo from '../../assets/images/logo.png';

import styles from './styles';


export default function Home(){
    return(
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoImg}/>
            <Text style={styles.title}>Minhas listas</Text>
            <List/>
        </View>
    )
}