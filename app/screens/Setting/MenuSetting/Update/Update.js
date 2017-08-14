import React, { Component } from 'react';
import {
    Container, Header, Left, Button, Title, Icon, Right, Content, Thumbnail, Card, Text, View
} from 'native-base';
import { getStyles } from "./styles";
import { colors } from '../../../../config/styles';
import images from '../../../../config/images'
export default class Update extends Component {
    render() {
        let styles = getStyles(colors);

        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent
                            onPress={() => { this.props.navigation.navigate('Setting') }}>
                            <Icon name='arrow-back'
                                style={{ color: 'black' }} />
                        </Button>
                    </Left>
                    <Title style={styles.textHeader}>Cập nhật</Title>
                    <Right />
                </Header>
                <Content>
                    <View>
                        <Thumbnail source={{uri: images.logo}}
                            style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 50 }} />
                        <Text style={styles.text}>Phiên bản hiện tại: 1.0</Text>
                    </View>
                </Content>
                <Button full
                    style={styles.button}>
                    <Text>Kiểm tra cập nhật</Text>
                </Button>

            </Container>
        )
    }
}