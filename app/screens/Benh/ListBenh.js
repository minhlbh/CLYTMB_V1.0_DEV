import React, { Component } from 'react';
import {
    Container, Header, Left, Body, Right, Content,
    Text,
    List, ListItem,
    Item,
    Icon,
    Input,
    Button
} from 'native-base';
import { FlatList, } from 'react-native';
import medicalApi from '../../api/medicalApi';

class ListBenh extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header} searchBar rounded>
                    <Item >
                        <Icon name="ios-search" />
                        <Input placeholder="Nhập từ khoá"
                            onChangeText={(key) => {
                                this.search(key)
                            }}
                            onSubmitEditing={(key) => this.search(key)}
                        />
                    </Item>
                    <Button transparent
                        onPress={() => this.setState({ isSearch: false })}
                    >
                        <Text style={styles.textHeader}>Cancel</Text>
                    </Button>
                </Header>
            </Container>
        )
    }
}