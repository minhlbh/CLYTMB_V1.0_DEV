import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import {
    Container, Header, Left, Body, Right, Content,
    Text, Title,
    List, ListItem,
    Icon
} from 'native-base';

class Setting extends Component {

    render() {
        const list = [
            {
                title: 'Đăng nhập',
                icon: 'md-log-in'

            },
            {
                title: 'Về chúng tôi',
                icon: 'md-information-circle'
            },
            {
                title: 'Thông tin cá nhân',
                icon: 'md-information-circle'
            },
            {
                title: 'Thông báo',
                icon: 'md-notifications'
            },
            {
                title: 'Cập nhập',
                icon: 'md-sync'
            }
        ];

        return (
            <Container style={{ backgroundColor: '#FFF' }}>
                <Header>
                    <Body>
                        <Title>Setting</Title>
                    </Body>
                </Header>

                <Content>
                    <List>
                        {list.map((item, i) => (
                            <ListItem icon
                                onPress={() => this.props.navigation.navigate('Login')}
                            >
                                <Left>
                                    <Icon name={item.icon} />
                                </Left>
                                <Body>
                                    <Text>{item.title}</Text>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            </Container>
        );
    }
}

export default Setting;