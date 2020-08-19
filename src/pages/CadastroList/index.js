import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import styles from "./style";

import Logo from '../../assets/images/logo.png'
import { RectButton } from "react-native-gesture-handler";
export default function CadastroList(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                <Ionicons 
                name="ios-arrow-back"
                size={45}
                color="black"
                />
                </TouchableOpacity>
                <Image source={Logo} style={styles.logo}/>
            </View>
            <Text style={styles.title}>Cadastrar nova Lista</Text>
            <View style={styles.textAreaContainer} >
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    numberOfLines={10}
                    multiline={true}
                />
            </View>
            <RectButton style={styles.buttonSubmit}><Text style={styles.textButton}>Cadastrar</Text></RectButton>
        </View>
    )
}