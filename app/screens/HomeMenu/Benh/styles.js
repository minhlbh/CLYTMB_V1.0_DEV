import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../config/styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
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
    }
})