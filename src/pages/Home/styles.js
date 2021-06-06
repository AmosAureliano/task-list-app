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
        width: 200,
        height: 30
    },
    title:{
        color: "#50115B",
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold"
    },
    containerFlatlist:{
        backgroundColor: "#fff",
        elevation: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        borderRadius: 30,
        marginTop: 20,
        marginBottom: 80,
        paddingTop: 10
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
        elevation: 40,
        zIndex: 10
      
    },
    containerModal:{
        flex: 1, 
        backgroundColor: '#F9FAFF'
    },
    header:{
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: 'space-between'
    },
    logo:{
        height: 20,
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
        margin: 25,
        borderRadius: 10
    
    },
    textArea: {
        height: 100,
        padding: 10,
        borderRadius: 10,
        justifyContent: "flex-start",
        backgroundColor: "#ffff"
    },
    buttonSubmit:{
        backgroundColor: "#50115B",
        margin: 20,
        padding: 10,
        borderRadius: 16,
        alignItems: "center",
    },
    textButton:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20
    }
})


export default styles;