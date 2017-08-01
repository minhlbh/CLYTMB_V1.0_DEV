import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container:{
        backgroundColor: colors.background,
    },
    content:{
        backgroundColor: colors.background
    },
    header:{
        backgroundColor: colors.light
    },
    textHeader :{
        color : colors.header.text,
    },
    logo:{
        height: 39,
        width: 39,
        marginTop: 5
    },
    titleHeader:{
        color : colors.header.text,
        marginTop: 16,
        fontWeight: 'bold'
    },
    textDivider:{
        color: '#999'
    }
})