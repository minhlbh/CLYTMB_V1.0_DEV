import React, { Component } from 'react';
import {
    Container, Header, Left, Body, Right, Content, View,
    Text,
    List, ListItem,
    Item,
    Icon,
    Input,
    Button,
    Title,
    Label

} from 'native-base';
import { FlatList } from 'react-native';
import drugApi from '../../../api/drugApi';
import styles from './styles';
import Loading from '../../../components/loading';

class ListThuoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DsThuoc: [],
            page: 1,
            tongsoThuoc: 0,
            isLoading: true,
            key: '',
            isSearch: false,
        }
    }
    componentWillMount() {
        drugApi.getDsThuoc(this.state.page)
            .then((res) => {
                this.setState({
                    DsThuoc: res.DsThuoc.DsThuoc,
                    page: res.DsThuoc.Trang,
                    tongsoThuoc: res.DsThuoc.TongSoLuong,

                })
            })
    }

    search(key) {
        if (!key || key === null || key == '') {
            this.setState({})
        } else {
            drugApi.getSearchResult(key).then(res => {
                if (!res || res.length != 0) {
                    this.setState({
                        DsThuoc: res.DsThuoc.DsThuoc,
                    })
                }
            })
        }
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon style={styles.textHeader} name="ios-arrow-back" />
                        </Button >
                    </Left>

                    <Body>
                        <Title style={styles.textHeader}>Tra cứu thuốc</Title>
                    </Body>
                </Header>
                <View>
                    <Item style={{ marginLeft: 10 }}>
                        <Icon name="ios-search" />
                        <Input placeholder="Nhập tên thuốc..."
                            onChangeText={(key) => {
                                this.search(key);
                                this.setState({ key });
                            }}
                            onSubmitEditing={() => this.search(this.state.key)}
                            autoFocus={this.state.isSearch}
                        />
                    </Item>
                </View>
                <Content>
                    <List >
                        <ListItem>
                            {this.state.isLoading && <Loading />}
                            <Right><Text style={styles.textDivider}>Tổng số {50 * this.state.page}/{this.state.tongsoThuoc} Thuốc</Text></Right>
                        </ListItem>
                        <FlatList
                            data={this.state.DsThuoc}
                            renderItem={({ item }) =>
                                <ListItem onPress={() => {
                                    this.props.navigation.navigate()
                                }} >
                                    <Body >
                                        <Label>
                                        <Text style={styles.textHeader}>{item.Name}</Text>
                                        <Text style={styles.text} note> {(item.HamLuong)}</Text>
                                        </Label>
                                        <Label>
                                            <Icon style={styles.icon} name='ios-home' />
                                            <Text style={styles.text} note>  {item.Hang}</Text>
                                        </Label>
                                        <Label>
                                            <Icon style={styles.icon} name='md-information-circle' />
                                            <Text style={styles.text} note>  {item.DuongDung}</Text>
                                        </Label>
                                    </Body>
                                    <Icon name="ios-arrow-dropright" />
                                </ListItem>}
                        />
                    </List>
                </Content>
            </Container>
        )
    }
}
export default ListThuoc;
