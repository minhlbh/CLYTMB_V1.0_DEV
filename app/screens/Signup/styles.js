import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container:{
        backgroundColor: colors.background,
    },
    content :{
        padding: 15
    },
    btn:{
        backgroundColor: colors.light,
        marginTop : 15
    },
    input:{
        borderColor: colors.light,
    }
})