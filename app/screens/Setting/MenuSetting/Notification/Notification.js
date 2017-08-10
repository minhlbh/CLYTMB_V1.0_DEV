import React, { Component } from 'react';
import {
    Container, Header, Left, Button, Icon, Title, Right, Content, List, ListItem, Body, Switch, Text
} from 'native-base';
import styles from './styles'

export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false
        }
    }
    render() {
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
                    <Title style={styles.textHeader}>Thông báo</Title>
                    <Right />
                </Header>
                <Content style={styles.panel}>
                    <List>
                        <ListItem>
                            <Left>
                                <Text>Thông báo</Text>
                            </Left>
                            <Body />
                            <Right>
                                <Switch
                                />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}