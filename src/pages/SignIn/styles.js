import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#F0F4FF'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginBottom: 25,
    },
    areaInput: {
        flexDirection: 'row',
    },
    input: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        fontSize: 17,
        padding: 10,
        borderRadius: 8,
        color: '#121212',
        marginBottom: 15,
    },
    submitButton:{
        width: '90%',
        height: 45,
        borderRadius: 8,
        backgroundColor: '#3b3dbf',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText:{
        fontSize: 20,
        color: '#FFFFFF',
    },
    link:{
        marginVertical: 10,
    },
    linkText:{
        color: '#171717',
    },

});

export default styles;