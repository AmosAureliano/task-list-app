import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Modal, TouchableOpacity, TextInput, AsyncStorage} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import List from '../../components/List/index';

import Logo from '../../assets/images/logo.png';

import styles from './styles';




export default function Home(){

    const [list, setList] = useState([]);
    const [open, setOpen] = useState(false);
    const [openListItems, setOpenListItems] = useState(false)
    const [input, setInput] = useState('');

    let keySaved = "";

    function changeKey(key){
        setOpenListItems(true);
        keySaved = key;
    }

    useEffect( () => {
        async function loadLists(){
            const listStorage = await AsyncStorage.getItem("@list");

            if(listStorage)[
                setList(JSON.parse(listStorage))
            ]
        }

        loadLists();
    }, []);

    useEffect(() => {
        async function saveList(){
            await AsyncStorage.setItem("@list", JSON.stringify(list))
        }
        saveList();
    },  [list]);

    function handleAdd(){
        const data = {
            key: input,
            list: input
        }

        setList([...list, data]);
        setOpen(false);
        setInput("");
        alert("Salvo com sucesso")
    }
    return(
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoImg}/>
            
            
            <View style={styles.containerFlatlist}>

                <Text style={styles.title}>Minhas listas</Text>
                <FlatList
                    style={{marginTop: 20}}
                    showsHorizontalScrollIndicator={false}
                    data={list}
                    keyExtractor={ (item) => String(item.key) }
                    renderItem={ ({ item }) => <List data={item} onPress={() => changeKey(String("oi")) }/> }
                />
            </View>
            

            
            <RectButton style={styles.plusButton} onPress={() => setOpen(true) }>
                <Ionicons 
                    name="ios-add"
                    size={45}
                    color="#ffff"
                />
            </RectButton>

            <Modal animationType="slide" transparent={false} visible={open} statusBarTranslucent={true}>
                <View style={styles.containerModal}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={ () =>  setOpen(false)}>
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
                            multiline={true}
                            value={input}
                            onChangeText = { (text) => setInput(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonSubmit} onPress={ handleAdd }><Text style={styles.textButton}>Cadastrar</Text></TouchableOpacity>
                </View>
            </Modal>

            <Modal animationType="slide" transparent={false} visible={openListItems} statusBarTranslucent={true}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={ () =>  setOpenListItems(false)}>
                            <Ionicons 
                                name="ios-arrow-back"
                                size={45}
                                color="black"
                            />
                        </TouchableOpacity>
                        <Image source={Logo} style={styles.logo}/>
                    </View>
                    <View style={styles.containerFlatlist}>

                        <Text style={styles.title}>{keySaved}</Text>

                        {/*
                        <FlatList
                            style={{marginTop: 20}}
                            showsHorizontalScrollIndicator={false}
                            data={list}
                            keyExtractor={ (item) => String(item.key) }
                            renderItem={ ({ item }) => <List data={item} onPress={() => setOpenListItems(true)}/> }
                        />
                        */}
                    </View>

                <TouchableOpacity onPress={() => setOpenListItems(false)}><Text>voltar</Text></TouchableOpacity>
            </Modal>
        </View>
    )
}