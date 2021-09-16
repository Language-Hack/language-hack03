import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    logo: {
        flex:1,
        height: 500,
        width: 300,
        alignSelf: "center",
        margin: 30
    },
    button: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 3,
        marginRight: 10,
        marginTop: 20,
        height: 60,
        width: 170,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    button2: {
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 3,
        marginLeft: 10,
        marginTop: 20,
        height: 60,
        width: 170,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold"
    },
    buttonTitle2: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        flexDirection: "column",
    },
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 60,
        backgroundColor: "#6C6665",
    },
    dog:{
        marginLeft: 50,
        marginBottom: 20,
        marginTop: 10,
    },
    home:{
        marginLeft:50,
        marginBottom: 20,
        marginTop: 10,
    },
    calendar:{
        marginLeft:50,
        marginBottom: 20,
        marginTop: 10,
    },
    text: {
        color: "black",
        fontSize: 52,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    text1: {
        color: "black",
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    text2: {
        color: "black",
        fontSize: 16,
        marginLeft: 10,
        marginBottom: 20,
        marginTop: 20,
    },
    btn_logout:{
        width: 200,
        height: 60,
        marginTop: 20,
        borderRadius: 30,
        justifyContent: "center",
        backgroundColor: "#FFD180",
        borderColor: "black",
        borderWidth: 2,
    },
    image_heart: {
        width: 300,
        height: 100,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
    },
})