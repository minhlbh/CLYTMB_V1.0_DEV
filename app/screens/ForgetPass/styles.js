import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    header: {
        backgroundColor: colors.header.background
    },
    textHeader: {
        color: colors.header.text,
    },
    btn: {
        backgroundColor: colors.light,
        marginTop: 20
    },
    textContent: {
        textAlign: 'center',
        color: '#666',
        fontSize: 18,
        margin: 35
    },
    form: {
        marginLeft: 20,
        marginRight: 20
    },
    content:{
        paddingLeft: 20,
        paddingRight: 20,
    },
     input: {
        fontSize: 15,
        color: colors.dark,
        paddingTop: 20
    },
    item: {
        borderColor: colors.light
    },
     container: {
        backgroundColor: colors.background,
    },
})