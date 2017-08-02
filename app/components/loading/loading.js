import React, { Component } from 'react';
import {View, Image} from 'react-native';
import images from '../../config/images';

export default class Loading extends Component {
    render() {
        return (
            <View >
                <Image
                    style={{ width: 200, height: 30, alignSelf: 'center', }}
                    source={images.indicator}
                />
            </View>
        );
    }
}