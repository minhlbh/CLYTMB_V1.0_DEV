import { StyleSheet } from 'react-native';
import { colors } from '../../../../config/styles';

export default StyleSheet.create({
    textHeader: {
        color: colors.header.text,
        marginTop: 15
    },
    header: {
        backgroundColor: colors.header.background
    },
    textInput: {
        marginLeft: 10,
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    panel: {
        color: colors.background,
    },
    button: {
        backgroundColor: '#2A8FBD',
        marginTop: 20
    },
})