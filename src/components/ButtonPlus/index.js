import React from 'react';
//import {} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';

import styles from './style'
export default function Buttonplus(){
    return(
        <RectButton style={styles.plusButton}>
            <Ionicons 
            name="ios-add"
            size={45}
            color="#ffff"
            />
        </RectButton>
        );
}