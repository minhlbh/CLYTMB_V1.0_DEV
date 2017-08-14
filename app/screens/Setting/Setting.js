import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import {
    Container, Header, Left, Body, Right, Content, DeckSwiper,
    Text, Title,
    List, ListItem,
    Icon
} from 'native-base';
import { getStyles } from "./styles";
import { colors } from '../../config/styles';

class Setting extends Component {

    render() {
        let styles = getStyles(colors);

        const list = [
            {
                title: 'Đăng nhập',
                icon: 'md-log-in',
                navigate: 'Login'
            },
            {
                title: 'Về chúng tôi',
                icon: 'md-information-circle',
                navigate: 'AboutUs'

            },
            {
                title: 'Thông tin cá nhân',
                icon: 'md-information-circle',
                navigate: 'UserInfo'

            },
            {
                title: 'Thông báo',
                icon: 'md-notifications',
                navigate: 'Notification'

            },
            {
                title: 'Cập nhập',
                icon: 'md-sync',
                navigate: 'Update'

            }
        ];

        return (
            <Container style={{ backgroundColor: '#FFF' }}>
                <Header style={styles.header}>
                    <Body>
                        <Title style={styles.textHeader}>Setting</Title>
                    </Body>
                </Header>

                <Content>
                    <List>
                        {list.map((item, i) => (
                            <ListItem icon
                                onPress={() => this.props.navigation.navigate(item.navigate)}
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