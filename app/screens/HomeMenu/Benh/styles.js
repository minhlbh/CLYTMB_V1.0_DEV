import { StyleSheet, Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export let getStyles = function  (colors) {
    return  StyleSheet.create({
    container: {
        backgroundColor: colors.background,
    },
    header:{
        backgroundColor: colors.header.background
    },
    textHeader :{
        color : colors.header.text,
    },
    icon:{
        color: colors.gray,
    },
    iconBack:{
        color : colors.header.text,
        fontSize: 30,
        marginRight: 15,
    },
    textDivider:{
         color: '#999',
         fontSize: 13
    },
})}