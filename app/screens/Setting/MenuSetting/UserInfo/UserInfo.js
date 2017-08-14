import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import {
    Container, Content, View, List, ListItem, Left, Image, Body, Right, Item, Label, Input, Fab, Button, Icon, Text, Header, Thumbnail, Title
} from 'native-base'
import { getStyles } from "./styles";
import { colors } from '../../../../config/styles';
import images from '../../../../config/images';
import apiUrl from '../../../../config/api';
import Login from '../../../Login'
export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            email: '',
            name: '',
            avatar: '',
            phone: '',
            address: ''

        };
        AsyncStorage.getItem('access_token').then((value) => {
            if (value) {
                alert('Bạn chưa đăng nhập')
                alert(value);
                this.props.navigation.navigate("Login");
            } 
        })
    }
    componentWillMount() {
        // return (
        //     fetch(apiUrl.userInfo)
        //         .then((res) => res.json())
        //         .then((res) => this.setState(
        //             { email: res.Email, name: res.HoVaTen, avatar: res.Avatar, phone: res.Phone, address: res.Address }
        //         ))
        // )
        // this.checkToken();
    }
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
                    <Title style={styles.textHeader}>Thông tin cá nhân</Title>
                    <Right>
                        {!this.state.disabled ?
                            <Button transparent
                                onPress={() => this.setState({ disabled: true })}
                            >
                                <Icon style={styles.icon} active name='md-checkmark' />
                            </Button>
                            :
                            <Button transparent
                                onPress={() => this.setState({ disabled: false })}
                            >
                                <Icon style={styles.icon} active name='md-create' />
                            </Button>
                        }
                    </Right>
                </Header>
                <Content>
                    <View style={styles.panel1}>
                        <List>
                            <ListItem>
                                <Left>
                                    <Thumbnail source={{ uri: this.state.avatar }}
                                        style={{ width: 100, height: 100 }} />
                                </Left>
                                <Body>
                                    <Text style={styles.textinfo}>{this.state.name}</Text>
                                    <Text style={styles.textinfo}>{this.state.email}</Text>
                                </Body>
                                <Right>
                                </Right>
                            </ListItem>
                        </List>
                    </View>
                    <View style={styles.panel2}>
                        <Text style={{ fontSize: 30 }}>Thông tin tài khoản</Text>
                        <Item>
                            <Label style={styles.label}>Họ và tên:</Label>
                            <Input
                                style={styles.textInput}
                                disabled={this.state.disabled}
                                onChangeText={(name) => this.setState({ name })}
                                value={this.state.name}>
                            </Input>
                        </Item>
                        <Item>
                            <Label style={styles.label}>Số điện thoại:</Label>
                            <Input
                                style={styles.textInput}
                                disabled={this.state.disabled}
                                onChangeText={(phone) => this.setState({ phone })}
                                value={this.state.phone}>
                            </Input>
                        </Item>
                        <Item>
                            <Label style={styles.label}>Chức danh:</Label>
                            <Input
                                style={styles.textInput}
                                disabled={this.state.disabled}
                                onChangeText={(position) => this.setState({ position })}>
                            </Input>
                        </Item>
                        <Item>
                            <Label style={styles.label}>Email:</Label>
                            <Input
                                style={styles.textInput}
                                disabled={this.state.disabled}
                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}>
                            </Input>
                        </Item>
                        <Item>
                            <Label style={styles.label}>Chuyên môn:</Label>
                            <Input
                                style={styles.textInput}
                                disabled={this.state.disabled}
                                onChangeText={(best) => this.setState({ best })}>
                            </Input>
                        </Item>
                        <Item>
                            <Label style={styles.label}>Địa chỉ:</Label>
                            <Input
                                style={styles.textInput}
                                disabled={this.state.disabled}
                                onChangeText={(job) => this.setState({ job })}
                                value={this.state.address}>
                            </Input>
                        </Item>
                        <Item>
                            <Label style={styles.label}>Vị trí đăng kí:</Label>
                            <Input
                                style={styles.textInput}
                                disabled={this.state.disabled}
                                onChangeText={(position2) => this.setState({ position2 })}>
                            </Input>
                        </Item>
                    </View>
                </Content>
            </Container >
        )
    }
}