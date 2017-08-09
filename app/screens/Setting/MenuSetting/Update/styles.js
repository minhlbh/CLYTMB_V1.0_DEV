import { StyleSheet } from 'react-native';
import { colors } from '../../../../config/styles';

export default StyleSheet.create({
    textHeader: {
        color: colors.header.text,
        marginTop: 15
    },
    header: {
        backgroundColor: colors.header.background,
    },
    panel: {
        color: colors.background,
    },
    text: {
        alignSelf: 'center',
        marginTop: 30
    },
    button: {
        backgroundColor: '#2A8FBD',
        marginTop: 20
    },
})