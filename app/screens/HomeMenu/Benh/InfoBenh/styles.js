import { StyleSheet, Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export let getStyles = function (colors) {
    return StyleSheet.create({
        content: {
            padding: 10,
        },
        video: {
            marginTop: 20,
            width: deviceWidth - 20,
            height: 240,
            alignSelf: 'center',
            marginRight: 5
        },
        image: {
            width: deviceWidth - 20,
            height: 240,
        },
        phantuContainer: {
            marginTop: 20
        },
        button: {
            marginBottom: 20,
            height: 30,
            backgroundColor: colors.dark
        }
    })
}