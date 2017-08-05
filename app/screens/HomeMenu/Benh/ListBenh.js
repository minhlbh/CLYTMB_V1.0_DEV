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
import Loading from '../../../components/loading';
const history = [
    {
        "Id": 49517,
        "Name": "Áp xe ngoài màng cứng và dưới màng cứng ở tủy sống"
    },
    {
        "Id": 49338,
        "Name": "Ấu trùng sán vào tạng"
    },
    {
        "Id": 49297,
        "Name": "Ban đỏ đa dạng"
    },
    {
        "Id": 49296,
        "Name": "Ban đỏ nút"
    },
    {
        "Id": 49471,
        "Name": "Ban xuất huyết dạng thấp schonlen-henoch"
    },
    {
        "Id": 49479,
        "Name": "Ban xuất huyết do bệnh tiểu cầu"
    },
]

class ListBenh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DsBenh: [],
            isSearch: false,
            page: 1,
            searchResult: [],
            key: '',
            tongSoBenh: 0,
            isLoading: true
        }
    }

    componentWillMount() {
        medicalApi.getDsBenh(1).then(res => {
            this.setState({
                DsBenh: res.DsBenh,
                page: res.Trang,
                tongSoBenh: res.TongSoLuong,
                isLoading: false
            })
        });
    }

    cancelSearch = () => {
        this.setState({
            searchResult: history,
            isSearch: false,
            key: ''
        });

    }
    _onEndReached = () => {
        this.setState({isLoading: true})
        var page = this.state.page + 1;
        medicalApi.getDsBenh(page).then(res => {
            if (!res || res.length != 0) {
                this.setState({
                    page: res.Trang,
                    DsBenh: [...this.state.DsBenh, ...res.DsBenh],
                    isLoading: false
                })
            }
        });

    }

    search(key) {
        if (!key || key === null || key == '') {
            this.setState({ searchResult: history, })
        } else {
            medicalApi.getSearchResult(key).then(res => {
                if (!res || res.length != 0) {
                    this.setState({
                        searchResult: res.DsBenh,
                    })
                }
            })
        }
    }

    render() {
        if (!this.state.isSearch) {
            return (
                <Container style={styles.container}>
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
                                onPress={() => this.setState({ isSearch: true, searchResult: history })}
                            >
                                <Icon style={styles.textHeader} name='md-search' />
                            </Button>
                        </Right>
                    </Header>
                    <ListItem>
                        {this.state.isLoading && <Loading />}
                        <Right><Text style={styles.textDivider}>Tổng số {50*this.state.page}/{this.state.tongSoBenh} Bệnh</Text></Right>
                    </ListItem>
                    <Content>
                        <List >
                            <FlatList
                                data={this.state.DsBenh}
                                renderItem={({ item }) =>
                                    <ListItem onPress={() =>
                                        this.props.navigation.navigate('DetailBenh', { id: item.Id, name: item.Name }
                                        )}>
                                        <Body >
                                            <Text>{item.Name}</Text>
                                        </Body>
                                        <Icon style={styles.icon} name="ios-arrow-dropright" />
                                    </ListItem>}
                                onEndReached={({ distanceFromEnd }) => {
                                    this._onEndReached();
                                }}
                                onEndReachedThreshold={0.3}
                            />
                        </List>
                    </Content>
                </Container>
            )
        } else {
            return (
                <Container style={styles.container}>
                    <Header style={styles.header} searchBar rounded>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon style={styles.iconBack} name="ios-arrow-back" />
                        </Button >
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Nhập từ khoá"
                                onChangeText={(key) => {
                                    this.search(key);
                                    this.setState({ key });
                                }}
                                onSubmitEditing={() => this.search(this.state.key)}
                                autoFocus={this.state.isSearch}
                            />
                            <Right>
                                <Button transparent
                                    onPress={() => this.cancelSearch()}
                                >
                                    <Icon name="md-close-circle" style={styles.textHeader} />
                                </Button>
                            </Right>
                        </Item>
                    </Header>
                    <Content>
                        <List >
                            {!this.state.key ?
                                <ListItem itemDivider>
                                    <Icon name="md-alarm" />
                                    <Text>  Lịch sử tìm kiếm</Text>
                                </ListItem> :
                                <ListItem itemDivider>
                                    <Icon name="md-search" />
                                    <Text> Kết quả tìm kiếm</Text>
                                </ListItem>
                            }
                            <FlatList
                                data={this.state.searchResult}
                                renderItem={({ item }) =>
                                    <ListItem onPress={() =>
                                        this.props.navigation.navigate('DetailBenh', { id: item.Id, name: item.Name }
                                        )}>
                                        <Body >
                                            <Text>{item.Name}</Text>
                                        </Body>
                                        <Icon style={styles.icon} name="ios-arrow-dropright" />
                                    </ListItem>}
                            />
                        </List>
                    </Content>
                </Container>
            )
        }
    }
}

export default ListBenh;