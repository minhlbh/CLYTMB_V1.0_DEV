import { StyleSheet } from 'react-native';
import { colors } from '../../../../config/styles';

export let getStyles = function  (colors) {
    return StyleSheet.create({
    header: {
        backgroundColor: colors.header.background
    },
    textHeader: {
        color: colors.header.text,
        marginTop: 15
    },
    textinfo: {
        fontSize: 15,
        color: 'white'
    },
    label: {
        color: colors.dark,
        fontSize: 15,
        paddingTop: 15,
    },
    textInput: {
        fontSize: 15,
        paddingBottom: 0
    },
    panel1: {
        paddingLeft: 20,
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: colors.dark
    },
    panel2: {
        paddingLeft: 20,
        color: colors.background,
        marginTop: 20
    },
    icon: {
        color: colors.header.text
    }

})
}