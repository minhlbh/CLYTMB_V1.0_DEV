import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    header:{
        backgroundColor: colors.header.background
    },
    textHeader :{
        color : colors.header.text,
    },
})