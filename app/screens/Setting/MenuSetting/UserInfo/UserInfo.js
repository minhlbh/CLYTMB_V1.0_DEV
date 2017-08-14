import React, { Component } from 'react';
import {
    Container, Content, View, List, ListItem, Left, Image, Body, Right, Item, Label, Input, Fab, Button, Icon, Text, Header, Thumbnail, Title
} from 'native-base'
import { getStyles } from "./styles";
import { colors } from '../../../../config/styles';
import images from '../../../../config/images'
export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
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
                                    <Thumbnail source={{ uri: 'http://lophocnauan.vn/profiles/lophocnauanvn/uploads/attach/post/images/1866.jpg' }}
                                        style={{ width: 100, height: 100 }} />
                                </Left>
                                <Body>
                                    <Text style={styles.textinfo}>{this.state.name}</Text>
                                    <Text style={styles.textinfo}>@rockstar.tie</Text>
                                </Body>
                                <Right>
                                </Right>
                            </ListItem>
                        </List>
                    </View>
                    <View style={styles.panel2}>
                        <Text style={{fontSize:30}}>Thông tin tài khoản</Text>
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
                                onChangeText={(position) => this.setState({ position })}
                                value={this.state.position}>
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
                                onChangeText={(best) => this.setState({ best })}
                                value={this.state.best}>
                            </Input>
                        </Item>
                        <Item>
                            <Label style={styles.label}>Đơn vị công tác:</Label>
                            <Input
                                style={styles.textInput}
                                disabled={this.state.disabled}
                                onChangeText={(job) => this.setState({ job })}
                                value={this.state.job}>
                            </Input>
                        </Item>
                        <Item>
                            <Label style={styles.label}>Vị trí đăng kí:</Label>
                            <Input
                                style={styles.textInput}
                                disabled={this.state.disabled}
                                onChangeText={(position2) => this.setState({ position2 })}
                                value={this.state.position2}>
                            </Input>
                        </Item>
                    </View>
                </Content>
            </Container >
        )
    }
}