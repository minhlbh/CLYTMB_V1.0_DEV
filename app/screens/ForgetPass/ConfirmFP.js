import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Form,
    Item,
    Label,
    Input,
    View
} from "native-base";
import { getStyles } from "./styles";
import { colors } from '../../config/styles';
import { Alert, AsyncStorage } from "react-native";
import Error from '../../components/error';
import accountApi from '../../api/accountApi';

class ConfirmFP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            error: '',
            pass: '',
            confirmPass: '',
        };
    }

    confirm = () => {
        var idU = this.props.navigation.state.params.idU;
        var phone = this.props.navigation.state.params.phone;
        var pass = this.state.pass;
        var code = this.state.code;
        var confirmPass = this.state.confirmPass;

        if (confirmPass == pass) {
            accountApi.forgotPassConfirm(idU, phone, pass, code).then(res => {
                if (res.Mes) {
                    accountApi.getToken(phone, pass).then(response => {
                        if (response.access_token) {
                            AsyncStorage.setItem('access_token', response.access_token);
                            this.props.navigation.navigate("Tabs");
                        }
                    })
                    Alert.alert('Thông báo',
                        res.Mes,
                        { text: 'OK', onPress: () => this.props.navigation.navigate("Login") },
                        { cancelable: false });
                } else {
                    this.setState({ error: 'Mã code sai' });
                }
            })
        } else {
            this.setState({ error: 'Mật khẩu xác nhận không trùng khớp' });
        }

    }

    render() {
        let styles = getStyles(colors);
        return (
            <Container style={styles.container}>
                <Header style={styles.header} >
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon style={styles.textHeader} name="ios-arrow-back" />
                        </Button >
                    </Left>

                    <Body>
                        <Title style={styles.textHeader}>{"Xác thực"}</Title>
                    </Body>

                    <Right />
                </Header>

                <Content>
                    <Text style={styles.textContent}>
                        {this.props.navigation.state.params.mess}
                    </Text>
                    <Form style={styles.form}>

                        <Item floatingLabel last style={styles.item}>
                            <Label>Nhập code</Label>
                            <Input
                                style={styles.input}
                                onChangeText={(code) => this.setState({ code })}
                                keyboardType="number-pad"
                                returnKeyType={'done'}
                            />
                        </Item>
                        <Item floatingLabel last style={styles.item}>
                            <Label>Mật khẩu</Label>
                            <Input
                                style={styles.input}
                                onChangeText={(pass) => this.setState({ pass })}
                                secureTextEntry={true}
                            />
                        </Item>
                        <Item floatingLabel last style={styles.item}>
                            <Label>Nhập lại mật khẩu</Label>
                            <Input
                                style={styles.input}
                                onChangeText={(confirmPass) => this.setState({ confirmPass })}
                                secureTextEntry={true}
                            />
                        </Item>
                        {this.state.error ?
                            <Error error={this.state.error} /> : <View />
                        }

                        <Button block info
                            style={styles.btn}
                            onPress={() =>
                                this.confirm()}
                        >
                            <Text>Tiếp tục</Text>
                        </Button>

                    </Form>
                </Content>
            </Container>
        );
    }
}

export default ConfirmFP;