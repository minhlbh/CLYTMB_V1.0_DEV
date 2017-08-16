import React, { Component } from 'react';
import {
    Container, Header, Left, Button, Icon, Title, Right, Content, List, ListItem, Body, Switch, Text
} from 'native-base';
import styles from './styles'
import PushController from './PushController';
import PushNotification from 'react-native-push-notification';
export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false
        }
        console.log('Phuc DO');
    }

    handleNotification(){
        PushNotification.localNotification({
            title: "My Notification Title",
            message: "My Notification Message", // (required)
            //date: new Date(Date.now() + (60 * 1000)).toISOString // in 60 secs
          });
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
                        <Button
                            onPress={() => this.handleNotification()}
                        >
                            <Text>Show notification</Text>
                        </Button>
                        <PushController />
                    </List>
                </Content>
            </Container>
        )
    }
}