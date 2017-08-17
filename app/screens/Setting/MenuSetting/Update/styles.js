import { StyleSheet } from 'react-native';
import { colors } from '../../../../config/styles';

export let getStyles = function  (colors) {
    return StyleSheet.create({
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
        marginTop: 30,
        color: colors.light
    },
    button: {
        backgroundColor: colors.dark,
        marginTop: 20
    },
})
}