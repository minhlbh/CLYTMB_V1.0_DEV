import { StyleSheet } from 'react-native';
import { colors } from '../../../../config/styles';

export let getStyles = function  (colors) {
    return StyleSheet.create({
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
        backgroundColor: colors.dark,
        marginTop: 20
    },
})
}