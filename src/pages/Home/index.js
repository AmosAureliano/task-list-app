import React, { useState, useEffect, useCallback} from 'react';
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
    const [input, setInput] = useState('');

 

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

    const deleteItem = useCallback((data) => {
        const retornaListNoItemHandle = list.filter( r => r.key !== data.key);
        setList(retornaListNoItemHandle);
    });
    return(
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoImg}/>
            
            
            <View style={styles.containerFlatlist}>

                <Text style={styles.title}>Tarefas do dia</Text>
                <Text>Clique no Check para concluir!</Text>
                <FlatList
                    style={{marginTop: 20}}
                    showsHorizontalScrollIndicator={false}
                    data={list}
                    keyExtractor={ (item) => String(item.key) }
                    renderItem={ ({ item }) => <List data={item} deleteItem={deleteItem}/> }
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

                    <Text style={styles.title}>Cadastrar nova tarefa</Text>

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

            
        </View>
    )
}