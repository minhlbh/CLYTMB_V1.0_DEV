import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../config/styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export let getStyles = function  (colors) {

    return StyleSheet.create({
    container: {
        backgroundColor: colors.background,
    },
    header: {
        backgroundColor: colors.header.background
    },
    textHeader: {
        color: colors.header.text,
    },
    icon: {
        color: colors.gray,
        fontSize:20
    },
    iconBack: {
        color: colors.header.text,
        fontSize: 30,
        marginRight: 15,
    },
    textDivider: {
        color: '#999',
        fontSize: 13,
    },
    text:{
        fontSize:14
    },
        button: {
        backgroundColor: colors.dark,
        marginTop: 20
    },
    ketquatimkiem:{
        color: '#999',
        fontSize: 15,
        marginTop: 20,
        marginLeft:15
    }
})
}