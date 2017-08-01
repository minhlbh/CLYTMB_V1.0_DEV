import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 5,
        backgroundColor: colors.background
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: deviceHeight / 20,
    },
    logoImage: {
        width: 150,
        height: 150,
    },
    logoText: {
        marginTop: 10,
        fontSize: 30,
        color: colors.light

    },
    bg: {
        flex: 1,
        marginTop: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 15,
        bottom: 0,
    },
    input: {
        fontSize: 15,
        color: colors.dark,
        paddingTop: 20
    },
    btnLogin: {

        marginTop: 30,
        alignSelf: 'center',
        backgroundColor: colors.dark
    },
    btnRegister: {

        marginTop: 30,
        alignSelf: 'center',
        borderColor: colors.dark
    },
    btnTransparent: {
        marginTop: 20,
        alignSelf: 'center',
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80
    },
    item: {
        borderColor: colors.light
    },
    icon: {
        color: colors.dark,
    }
});