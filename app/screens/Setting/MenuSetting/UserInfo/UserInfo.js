import React, { Component } from 'react';
import {
    Container, Content, View, List, ListItem, Left, Image, Body, Right, Item, Label, Input, Fab, Button, Icon, Text, Header
} from 'native-base'
import { colors } from '../../../../config/styles';
export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            active: false,
            editable: false,
            name: 'Lê Đức Tiến',
            phone: '01672034616',
            position: 'Học viên',
            email: 'Leductien1997123@gmail.com',
            best: 'Không',
            job: 'Không',
            position2: 'Developer'

        };
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Text>Thông tin cá nhân</Text>
                    <Right />
                </Header>
                <Content>
                    <View>
                    <List>
                        <ListItem>
                        <Left>
                            <Image source={{ uri: 'http://lophocnauan.vn/profiles/lophocnauanvn/uploads/attach/post/images/1866.jpg' }}
                                style={{ width: 100, height: 100 }} />
                        </Left>
                        <Body>
                            <Text>Lê Đức Tiến</Text>
                            <Text>leductien1997123@gmail.com</Text>
                        </Body>
                        <Right>
                        </Right>
              </ListItem>
                    </List>
                    </View>
                </Content>
            </Container >
        )
    }
}