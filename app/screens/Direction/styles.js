import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export let getStyles = function  (colors) {
    return StyleSheet.create({
    searchButton:{
        alignSelf:'center',
        marginTop: 20,
        borderColor: colors.light
    },
    itemSearch:{
        borderBottomColor: colors.light
    },
    guide:{
        padding: 15,
        marginTop: 15
    },
    textGuide:{
        color: '#C0C0C0'
    },
    header:{
        backgroundColor: colors.header.background
    },
    textHeader :{
        color : colors.header.text,
    },
    activeTextTab:{
        color: colors.light,
    },
    underlineTab:{
        backgroundColor: colors.light,
    }
})
}
