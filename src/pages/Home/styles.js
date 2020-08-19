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
      
    }
})


export default styles;