import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    content:{
        flex: 1, 
        backgroundColor: "#fff", 
        top: -1
    }
})