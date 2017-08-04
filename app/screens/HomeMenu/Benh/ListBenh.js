import React, { Component } from 'react';
import {
    Container, Header, Left, Body, Right, Content,
    Text,
    List, ListItem,
    Item,
    Icon,
    Input,
    Button,
    Title
} from 'native-base';
import { FlatList, } from 'react-native';
import medicalApi from '../../../api/medicalApi';
import styles from './styles';

class ListBenh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DsBenh: [],
            isSearch: false,
            page: 1,
        }
    }

    componentWillMount() {
        medicalApi.getDsBenh(1).then(res => {
            this.setState({
                DsBenh: res.DsBenh,
                isSearch: false,
                page: 1,
            })
        });
    }
    _onEndReached = () => {
        if (!this.state.isSearch) {
            this.setState({ page: this.state.page + 1 })
            var page = this.state.page + 1;
            medicalApi.getDsBenh(page).then(res => {
                if (!res || res.length != 0) {
                    this.setState({
                        DsBenh: [...this.state.DsBenh, ...res.DsBenh],
                        //loading: false
                    })
                }
            });
        }
    }

    search(key) {
            medicalApi.getSearchResult(key).then(res => {
                if (!res || res.length != 0) {
                    this.setState({
                        DsBenh: res.DsBenh,
                    })
                }
            })
    }


    render() {
        return (
            <Container style={styles.container}>
                {!this.state.isSearch ? (
                    <Header style={styles.header}>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon style={styles.textHeader} name="ios-arrow-back" />
                            </Button >
                        </Left>

                        <Body>
                            <Title style={styles.textHeader}>Từ điển bệnh</Title>
                        </Body>

                        <Right >
                            <Button transparent dark
                                onPress={() => this.setState({ isSearch: true })}
                            >
                                <Icon style={styles.textHeader} name='md-search' />
                            </Button>
                        </Right>
                    </Header>
                ) : (
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
                                onPress={() => {
                                    this.setState({ isSearch: false });
                                    this.componentWillMount();
                                }}
                            >
                                <Text style={styles.textHeader}>Cancel</Text>
                            </Button>
                        </Header>
                    )}

                <Content>
                    <List >
                        <FlatList
                            data={this.state.DsBenh}
                            renderItem={({ item }) =>
                            <ListItem onPress={() => 
                                this.props.navigation.navigate('DetailBenh',{id: item.Id, name: item.Name} 
                            )}>
                                    <Body >
                                        <Text>{item.Name}</Text>
                                    </Body>
                                    <Icon style={styles.icon} name="ios-arrow-dropright" />
                                </ListItem>}
                            onEndReached={({ distanceFromEnd }) => {
                                this._onEndReached();
                            }}
                            onEndReachedThreshold={0.1}
                        />
                    </List>
                </Content>
            </Container>
        )
    }
}

export default ListBenh;