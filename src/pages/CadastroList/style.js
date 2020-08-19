import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#F9FAFF'
    },
    header:{
        paddingTop: 40,
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
});

export default styles;