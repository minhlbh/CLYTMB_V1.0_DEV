import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export let getStyles = function (colors) {
    return StyleSheet.create({
        container: {
            backgroundColor: colors.background,
        },
        content: {
            padding: 20
        },
        btn: {
            backgroundColor: colors.light,
            marginTop: 25
        },
        input: {
            fontSize: 15,
            color: colors.dark,
            paddingTop: 20
        },
        header: {
            backgroundColor: colors.header.background
        },
        textHeader: {
            color: colors.header.text,
        },
        icon: {
            color: colors.dark,
            marginTop: 19,
        },
        item: {
            borderColor: colors.light
        },
        form: {
            marginLeft: 47,
            marginRight: 47
        },
        btnTransparent: {
            marginTop: 13,
            alignSelf: 'center',
        },
    })
}