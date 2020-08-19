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
    listComponent:{
        backgroundColor: "#3B93B4",
        width: 300,
        justifyContent: "center",
        borderRadius: 8,
        padding: 10
    },
    titleComponent:{
        color: "#ffff",
        fontWeight: "700",
        textAlign: "center"
    }
})


export default styles;