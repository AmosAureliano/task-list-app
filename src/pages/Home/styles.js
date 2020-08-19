import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFF',
        paddingTop: 50,
        alignItems: "center"
    },
    logoImg: {
        width: 250,
        height: 60
    },
    title:{
        color: "#50115B",
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold"
    },
    plusButton:{
        backgroundColor: "#50115B",
        position: "absolute",
        right: 20,
        bottom: 40,
        padding: 10,
        height: 60,
        width: 60,
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        zIndex: 10
      
    },
    containerModal:{
        flex: 1, 
        backgroundColor: '#F9FAFF'
    },
    header:{
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: 'space-between'
    },
    logo:{
        height: 30,
        width: 90,
    },
    title:{
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: "#50115B",

    },
    textAreaContainer: {
        elevation: 1,
        borderRadius: 4,
        margin: 25
    
    },
    textArea: {
        height: 100,
        padding: 10,
        justifyContent: "flex-start",
        backgroundColor: "#ffff"
    },
    buttonSubmit:{
        backgroundColor: "#50115B",
        margin: 20,
        padding: 10,
        borderRadius: 4,
        alignItems: "center",
    },
    textButton:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20
    }
})


export default styles;