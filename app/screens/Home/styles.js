import { StyleSheet, Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export let getStyles = function  (colors) {
    return StyleSheet.create({
        container: {
            backgroundColor: colors.background,
        },
        content: {
            backgroundColor: colors.background
        },
        header: {
            backgroundColor: colors.header.background
        },
        textHeader: {
            color: colors.header.text,
        },
        logo: {
            height: 39,
            width: 39,
            marginTop: 5
        },
        titleHeader: {
            color: colors.header.text,
            marginTop: 16,
            fontWeight: 'bold'
        },
        textDividerTitle: {
            color: '#999',
            fontWeight: 'bold'
        },
        textDivider: {
            color: '#999',
        },
        textChildMenu: {
            color: colors.light
        },
        itemImage: {
            marginRight: 17,
            width: 65,
            height: 65
        },
        icon: {
            width: 40,
            height: 40
        }
    })
}
